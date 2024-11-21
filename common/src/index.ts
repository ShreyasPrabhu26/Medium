import z from "zod";

// Schema for user signup input
export const signupInput = z.object({
  email: z.string().email(),
  username: z.string().min(4).max(15),
  password: z.string().min(4).max(20),
});

export type SignupInput = z.infer<typeof signupInput>;

// Schema for user signin input
export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export type SigninInput = z.infer<typeof signinInput>;

// Schema for creating a blog
export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

// Schema for updating a blog
export const updateBlogInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  id: z.string(),
  published: z.boolean().optional(),
});

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
