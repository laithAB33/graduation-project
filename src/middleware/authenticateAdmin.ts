import { NextFunction, Request, Response } from "express";

export function authenticateAdmin(_req: Request, res: Response, next: NextFunction): void {
  res.status(403).json({ message: "Admin authentication required" });
  void next;
}
