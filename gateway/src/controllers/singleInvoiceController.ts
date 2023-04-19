import { Request, Response } from "express";
import { RabbitMQ } from "../rabbit";

export const getInvoice = (req: Request, res: Response) => {
  res.status(200).json({ message: "good job bruh" });
};

export const createInvoice = async (req: Request, res: Response) => {
  (await RabbitMQ.getInstance()).publishMsg(req.body);
  res.status(200).json({ message: "good job bruh" });
};

export const deleteInvoice = (req: Request, res: Response) => {
  res.status(202).json();
};
