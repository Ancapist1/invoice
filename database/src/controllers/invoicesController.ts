import { Request, Response } from "express";
import { getFromDB } from "../model/manageDatabase";
import { Invoice, invoiceSchema } from "../schemas/invoice";

export const getInvoices = (req: Request, res: Response) => {
  res.status(200).json(getFromDB());
};
