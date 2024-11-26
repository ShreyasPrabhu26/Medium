import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
// Create a new Hono instance for the blog router
export const blogRouter = new Hono();
// Middleware for authentication
blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if (user && typeof user.userId === "string") {
            c.set("userId", user.userId);
            await next();
        }
        else {
            return c.json({ message: "You are not logged in!!!" }, 403);
        }
    }
    catch (error) {
        console.error(error);
        return c.json({ message: "Invalid or expired token" }, 403);
    }
});
// Route to get blogs with optional author ID
blogRouter.get("/blogs", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const { authorId } = c.req.query();
    try {
        const blogs = await prisma.blog.findMany({
            where: {
                // If authorId is provided, filter by authorId
                ...(authorId ? { authorId } : { published: true }),
            },
            include: {
                author: { select: { id: true, username: true, email: true } },
            },
        });
        return c.json(blogs);
    }
    catch (error) {
        console.error(error);
        return c.json({ error: "An error occurred while fetching blogs" }, 500);
    }
});
// Route to get a single blog by ID
blogRouter.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");
    const userId = c.get("userId");
    try {
        const blog = await prisma.blog.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        email: true,
                        username: true,
                    },
                },
            },
        });
        if (!blog) {
            return c.json({ error: "Blog not found" }, 404);
        }
        // Check if the blog is published or if the user is the author
        if (blog.published || blog.authorId === userId) {
            return c.json(blog);
        }
        // If the blog is unpublished and the user is not the author
        return c.json({ error: "Blog not found" }, 404);
    }
    catch (error) {
        console.error(error);
        return c.json({ error: "An error occurred while fetching the blog" }, 500);
    }
});
// Route to create a new blog
blogRouter.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    // Repeat for all other tables you want to truncate
    console.log("All tables truncated.");
    const { title, content, published } = await c.req.json();
    const authorId = c.get("userId");
    // Validate input data
    if (!title || !content || !authorId) {
        return c.json({ error: "Title, content, and authorId are required" }, 400);
    }
    try {
        const newBlog = await prisma.blog.create({
            data: {
                title,
                content,
                authorId,
                published: published || false,
            },
        });
        return c.json({ message: "Blog created successfully", blog: newBlog }, 201);
    }
    catch (error) {
        console.error(error);
        return c.json({ error: "An error occurred while creating the blog" }, 500);
    }
});
// Route to update an existing blog
blogRouter.put("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");
    const { title, content, published } = await c.req.json();
    const userId = c.get("userId");
    try {
        // Fetch the blog to verify the author
        const blog = await prisma.blog.findUnique({
            where: { id },
            select: { authorId: true },
        });
        if (!blog) {
            return c.json({ error: "Blog not found" }, 404);
        }
        // Check if the authenticated user is the author of the blog
        if (blog.authorId !== userId) {
            return c.json({ error: "You are not authorized to edit this blog" }, 403);
        }
        // Proceed to update the blog
        const updatedBlog = await prisma.blog.update({
            where: { id },
            data: {
                title: title || undefined,
                content: content || undefined,
                published: published !== undefined ? published : undefined,
            },
        });
        return c.json({ message: "Blog updated successfully", blog: updatedBlog });
    }
    catch (error) {
        console.error(error);
        if (error.code === "P2025") {
            return c.json({ error: "Blog not found" }, 404);
        }
        return c.json({ error: "An error occurred while updating the blog" }, 500);
    }
});
// Route to delete a blog by ID
blogRouter.delete("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");
    const userId = c.get("userId");
    try {
        // Fetch the blog to verify the author
        const blog = await prisma.blog.findUnique({
            where: { id },
            select: { authorId: true }, // Only fetch authorId
        });
        if (!blog) {
            return c.json({ error: "Blog not found" }, 404);
        }
        // Check if the authenticated user is the author of the blog
        if (blog.authorId !== userId) {
            return c.json({ error: "You are not authorized to delete this blog" }, 403);
        }
        // Proceed to delete the blog
        await prisma.blog.delete({
            where: { id },
        });
        return c.json({ message: "Blog deleted successfully" });
    }
    catch (error) {
        console.error(error);
        if (error.code === "P2025") {
            return c.json({ error: "Blog not found" }, 404);
        }
        return c.json({ error: "An error occurred while deleting the blog" }, 500);
    }
});
