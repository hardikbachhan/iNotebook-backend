// establishing connection to database
const connectToMongo = require("./db");
connectToMongo();

// initializing express app
const express = require('express');
const cors = require("cors");
const app = express();
const port = 5000;

// to use req.body
app.use(express.json())

// to enable cors
app.use(cors());

// Available Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});

