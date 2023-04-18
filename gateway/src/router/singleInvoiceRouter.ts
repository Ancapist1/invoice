import * as singleInvoiceController from "controllers/singleInvoiceController";
import express from "express";

export const router = express.Router();

router.get("/", singleInvoiceController.getInvoice);
