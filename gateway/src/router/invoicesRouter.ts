import * as invoiceController from "controllers/invoicesController";
import express from "express";

export const router = express.Router();

router.get("/", invoiceController.getInvoices);
