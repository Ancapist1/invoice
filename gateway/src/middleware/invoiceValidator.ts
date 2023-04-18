import { NextFunction, Request, RequestHandler, Response } from "express";
import { Invoice, invoiceSchema } from "../schemas/invoice";

export function invoiceValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.body) {
    const { error, value } = invoiceSchema.validate(req.body);
    if (error) {
      console.log(error);
      res.status(400).json({ message: "not that good" });
    }
    if (!isTotalPriceCorrect) {
      res.status(400).json({ message: "total price is not correct" });
    }
    next();
  } else {
    res.send("No auth");
  }
}

function isTotalPriceCorrect(invoice: Invoice) {
  return invoice.net_price * invoice.tax === invoice.total_price;
}
