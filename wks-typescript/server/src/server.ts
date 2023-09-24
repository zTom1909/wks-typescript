import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

import express, { Application, Request, Response, NextFunction } from "express";

import config from "./lib/config";
import router from "./routes";

interface error {
  status: number;
  message: string;
}

const server: Application = express();
server.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

server.use(
  cors({
    origin: config.cors,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

server.use((err: error, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.use("/api", router)

export default server;
