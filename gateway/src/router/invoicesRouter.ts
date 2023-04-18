import express from "express";
import * as invoiceController from "../controllers/invoicesController";
import { invoiceValidator } from "../middleware/invoiceValidator";

export const router = express.Router();

router.get("/", invoiceValidator, invoiceController.getInvoices);
