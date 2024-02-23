import commentRoutes from "./comment.route";
import userRoutes from "./user.route";

export default (app) => {
    app.use("/comments", commentRoutes);
    app.use("/users", userRoutes);
}