import functions from "firebase-functions";
import express from "express";
import cors from "cors";

import { getQuotes } from "./src/quotes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("My Quotes...");
});
app.get("/quotes", getQuotes);

export const api = functions.https.onRequest(app);
