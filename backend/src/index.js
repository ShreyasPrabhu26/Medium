import { Hono } from "hono";
import { userRouter } from "./routes/userRouter";
import { blogRouter } from "./routes/blogRouter";
// Create the main Hono app
const app = new Hono();
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);
export default app;
