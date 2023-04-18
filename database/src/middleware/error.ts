import { NextFunction, Request, Response } from "express";

export type Exception = {
  status: number;
  message: string;
};

export function errorMiddleware(
  error: Exception,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = error.status || 500;
  const message = error.message || "Internal error";

  res.status(status).send({ status, message });
}
