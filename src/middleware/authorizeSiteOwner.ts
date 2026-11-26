import { NextFunction, Request, Response } from "express";

export function authorizeSiteOwner(_req: Request, res: Response, next: NextFunction): void {
  res.status(403).json({ message: "Site owner authorization required" });
  void next;
}
