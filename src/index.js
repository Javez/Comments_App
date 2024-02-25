import express from "express";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import { error } from "console";
import database from "./db/sequelize.db.js";

dotenv.config();
const env = process.env.NODE_ENV || "development";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

try {
  database.openConnection().then(() => {
    const PORT = process.env[`${env.toUpperCase()}_APP_PORT`] || "";
    
    app.listen(PORT, () => {
      console.log(`The server is running on port ${PORT}`);
    });
    database.initModels().then(() => {
      console.log("Models Initialized");
    });
    database.createTable().then(() => {
      console.log("Model for db created");
    });
  });
} catch (error) {
  console.log(error);
}
  
  
