import express from "express";
import {
  createInvoice,
  getInvoice,
} from "../controllers/singleInvoiceController";
import { invoiceValidator } from "../middleware/invoiceValidator";

export const router = express.Router();

router.get("/", getInvoice);

router.patch("/", invoiceValidator, createInvoice);
