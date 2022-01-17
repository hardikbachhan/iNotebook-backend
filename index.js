// establishing connection to database
const connectToMongo = require("./db");
connectToMongo();

// initializing express app
const express = require('express');
const app = express();
const port = 3000;

// to use req.body
app.use(express.json())

// Available Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

