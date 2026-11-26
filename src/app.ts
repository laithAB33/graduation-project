import "dotenv/config";
import express, { Request, Response } from "express";

import { errorHandler } from "./middleware/errorHandler";
import authRoutes from "./modules/auth/auth.routes";
import { AppError } from "./utils/AppError";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);

app.use((_req: Request, _res: Response, next) => {
  next(AppError.notFound("Route not found", "ROUTE_NOT_FOUND"));
});

app.use(errorHandler);

export default app;
