import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import bcrypt from "bcryptjs";

import { signinInput, signupInput } from "@shreyasprabhu26/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// Route for user signup
userRouter.post("/signup", async (c) => {
  // Validate the request body against the signupInput schema
  const result = signupInput.safeParse(await c.req.json());
  if (!result.success) {
    return c.json({ error: result.error.errors }, 400);
  }

  const { email, username, password } = result.data;

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // Generate a JWT token
    const token = await sign(
      { userId: newUser.id, email: newUser.email },
      c.env.JWT_SECRET
    );

    // Return the JWT token in the response
    return c.json(
      {
        message: "User created successfully",
        user: {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username,
        },
        token,
      },
      201
    );
  } catch (error: any) {
    console.error(error);

    // Handle unique constraint violation (if username-email is already registered)
    if (error.code === "P2002") {
      return c.json({ error: "Username or Email is already registered." }, 400);
    }

    // Return generic error message for other errors
    return c.json({ error: "An error occurred while creating the user." }, 500);
  }
});

// Route for user sign-in
userRouter.post("/signin", async (c) => {
  // Validate the request body against the signinInput schema
  const result = signinInput.safeParse(await c.req.json());
  if (!result.success) {
    return c.json({ error: result.error.errors }, 400);
  }

  const { email, password } = result.data;

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return c.json({ error: "Invalid email or password." }, 401); // User not found
    }

    // Compare the password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return c.json({ error: "Invalid email or password." }, 401); // Invalid password
    }

    // Generate a JWT token
    const token = await sign(
      { userId: user.id, email: user.email },
      c.env.JWT_SECRET
    );

    // Return the JWT token in the response
    return c.json(
      {
        message: "Sign-in successful",
        user: { id: user.id, username: user.username, email: user.email },
        token,
      },
      200
    );
  } catch (error) {
    console.error(error);
    return c.json({ error: "An error occurred during sign-in." }, 500);
  }
});
