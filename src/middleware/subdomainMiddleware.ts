import { NextFunction, Request, Response } from "express";

export function subdomainMiddleware(req: Request, _res: Response, next: NextFunction): void {
  req.headers["x-subdomain"] = req.hostname.split(".")[0];
  next();
}
