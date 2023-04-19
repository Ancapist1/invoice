import bodyParser from "body-parser";
import express from "express";
import { rabbitMQPublisher } from "./controllers/rabbitController";
import { errorMiddleware } from "./middleware/error";

const PORT = 8081;

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(errorMiddleware);
rabbitMQPublisher();
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
