import express from "express";
import commentRoutes from "./comment.route.js";
import userRoutes from "./user.route.js";

const app = express.Router();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/comments", commentRoutes);
app.use("/users", userRoutes);

export default app;
