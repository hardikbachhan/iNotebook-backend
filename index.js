// establishing connection to database
const connectToMongo = require("./db");
connectToMongo();

// initializing express app
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Hardik!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

