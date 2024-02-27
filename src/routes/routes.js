import express from "express";
import commentRoutes from "./comment.route.js";
import userRoutes from "./user.route.js";
const setupCommentRoutes = (io) => {

  io.on('connection', (socket) => {
    console.log('A user connected');
    commentRoutes(socket);

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};

const setupUserRoutes = () => {
  const app = express.Router();
  app.use("/users", userRoutes);

  return app;
};



export { setupCommentRoutes, setupUserRoutes };