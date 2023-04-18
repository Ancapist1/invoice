import bodyParser from "body-parser";
import express from "express";
import { errorMiddleware } from "middleware/error";

const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
