const express = require('express');
const mongodb = require('mongodb');
const app = express();
const port = 3000;

app.get('/users', async (req, res) => {
  try {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('mydatabase');
    const collection = db.collection('Users');
    const users = await collection.find().toArray();
    res.send(Users);
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));