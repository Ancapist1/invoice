import { number } from "joi";
import { Invoice } from "../schemas/invoice";

const database = new Map<number, Invoice>();

export function addToDB(data: Invoice) {
  if (!database.has(data.id)) {
    database.set(data.id, data);
  }
  console.log(getFromDB());
}

export function getFromDB() {
  const arr = Array.from(database.values());
  return JSON.stringify(arr);
}
