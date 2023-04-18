import { Request, Response } from "express";
export const getLogger = (req: Request, res: Response) => {
  res.status(200).send({ message: "good job bruh" });
};
