import express from "express";
import http from "http";
import { Server } from "socket.io";
import { setupCommentRoutes, setupUserRoutes } from "./routes/routes.js";
import dotenv from "dotenv";
import database from "./db/sequelize.db.js";

try {
  dotenv.config();
  const env = process.env.NODE_ENV || "development";
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const userRoutes = setupUserRoutes();
  app.use(userRoutes);
  
  const server = http.createServer(app);
  const io = new Server(server);

  setupCommentRoutes(io);

  database.openConnection().then(() => {
    const PORT = process.env[`${env.toUpperCase()}_APP_PORT`] || "";
    database.initModels().then(() => {
      console.log("Models Initialized");
    });
    database.createTable().then(() => {
      console.log("Model for db created");
    });
    app.get("/", (req, res) => {
      res.send("<h1>Hello world</h1>");
    });
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
} catch (error) {
  console.log(error);
}
