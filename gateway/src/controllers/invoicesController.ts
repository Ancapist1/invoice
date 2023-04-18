import { Request, Response } from "express";
import { Invoice, invoiceSchema } from "../schemas/invoice";

export const getInvoices = (req: Request, res: Response) => {
  req.body.forEach((item: Invoice[]) => {
    invoiceSchema.validate(item);
  });

  res.status(200).json({ message: "good job bruh" });
};

export const postInvoices = (req: Request, res: Response) => {
  req.body.forEach((item: Invoice[]) => {
    invoiceSchema.validate(item);
  });

  res.status(200).json({ message: "good job bruh" });
};
