import Joi from "joi";
export class Invoice {
  id: number;
  issue_date: Date;
  purchase_date: Date;
  supplier: string;
  customer: string;
  products: Array<string>;
  net_price: number;
  tax: number;
  total_price?: number;
}

export const invoiceSchema = Joi.object({
  id: Joi.number().required(),
  issue_date: Joi.date().iso().max(new Date()).required(),
  purchase_date: Joi.date().max(Date.now()).required(),
  supplier: Joi.string().required(),
  customer: Joi.string().required(),
  products: Joi.array().items(Joi.string()).required(),
  net_price: Joi.number().required(),
  tax: Joi.number().required(),
  total_price: Joi.number(),
});
