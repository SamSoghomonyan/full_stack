const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
app.use(express.json());
app.use(cors());
const url =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1";

const PORT = 4000;
const client = new MongoClient(url);
(async function () {
  await client.connect();
  const db = client.db("Task_intervu");
  const collection = db.collection("users");
  app.get("/users", async (req, res) => {
    const findResult = await collection.find().toArray();
    res.send(findResult);
  });

  app.post("/api/user", async (req, res) => {
    const existing = req.body;
    collection.insertOne(existing);
    res.send(existing);
  });

  app.delete("/users/:id", async (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    const result = await collection.deleteOne({ id: Number(id) });
    res.send(result);
  });
  app.put("/api/data/:id", async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const surname = req.body.surname;
    const position = req.body.position;
    const email = req.body.email;
    await collection.findOneAndUpdate(
      { id: Number(id) },
      {
        $set: {
          name: String(name),
          surname: surname,
          position: position,
          email: email,
        },
      },
      { new: true, old: false }
    );
  });

  app.listen(PORT, (req, res) => {
    console.log("PORT", PORT);
  });
})();
