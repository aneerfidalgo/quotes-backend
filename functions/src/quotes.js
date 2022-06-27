import connectDb from "./connectDb.js";

export const addQuotes = async (req, res) => {
  //   console.log("data coming in ", req.body);
  // check if request is valid
  // connect to Firestore
  const db = connectDb();

  if (!req.body || !req.body.name || !req.body.message) {
    res.status(401).send("Invalid request");
    return;
  }
};

export const getQuotes = async (req, res) => {
  const db = connectDb();
  const quotes = await db.collection("quotes").get();
  const quotesArray = quotes.docs.map((doc) => doc.data());
  res.status(200).send(quotesArray);
};
