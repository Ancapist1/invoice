import express from "express";
import * as invoiceController from "../controllers/invoicesController";

export const router = express.Router();

router.get("/", invoiceController.getInvoices);
