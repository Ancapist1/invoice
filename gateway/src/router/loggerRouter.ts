import * as loggerController from "controllers/loggerController";
import express from "express";

export const router = express.Router();

router.get("/", loggerController.getLogger);
