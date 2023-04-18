import bodyParser from "body-parser";
import express from "express";
import { errorMiddleware } from "middleware/error";
import { router as invoicesRouter } from "router/invoicesRouter";
import { router as singleInvoiceRouter } from "router/singleInvoiceRouter";

const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(errorMiddleware);
app.use("/invoices", invoicesRouter);
app.use("./invoice", singleInvoiceRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
