import express from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerConfig from "./swagger.json";

const swaggerOptions = {
  customCssUrl: "/assets/swagger/custom.css",
  customSiteTitle: "API User Documentation",
  customfavIcon: "/assets/swagger/favicon.ico",
};

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/assets", express.static("./src/assets"));

app.use(
  "/api/docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerConfig, swaggerOptions)
);

app.use("/users", usersRoutes);

export { app };
