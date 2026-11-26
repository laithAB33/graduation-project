import { NextFunction, Request, Response } from "express";

import { AppError } from "../utils/AppError";

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
      ...(error.code ? { code: error.code } : {}),
    });
    return;
  }

  console.error(error);

  res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : error instanceof Error
        ? error.message
        : "Internal server error",
  });
}
