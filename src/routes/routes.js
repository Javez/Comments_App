import commentRoutes from "./comment.route";

export default (app) => {
    app.use("/comments", commentRoutes);
}