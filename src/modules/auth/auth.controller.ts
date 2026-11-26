import { Request, Response } from "express";

export function register(req: Request, res: Response): void {
  res.status(201).json({ message: "Registered", data: req.body });
}

export function login(req: Request, res: Response): void {
  res.json({ message: "Logged in", data: req.body });
}
