import { Request, Response } from "express";

export const getInvoice = (req: Request, res: Response) => {
  res.status(200).json({ message: "good job bruh" });
};

export const createInvoice = (req: Request, res: Response) => {
  res.status(200).json({ message: "good job bruh" });
};
