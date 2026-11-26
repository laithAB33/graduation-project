import { NextFunction, Request, Response } from "express";

export function authenticate(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    res.status(401).json({ message: "Authentication required" });
    return;
  }
  next();
}
