import express from "express";
import * as loggerController from "../controllers/loggerController";

export const router = express.Router();

router.get("/", loggerController.getLogger);
