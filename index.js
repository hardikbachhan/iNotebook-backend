// establishing connection to database
const connectToMongo = require("./db");
connectToMongo();

// initializing express app
const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// to use req.body
app.use(express.json())

// to enable cors
app.use(cors());

// Available Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

app.use(express.static(path.join(__dirname, "client")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"))
})

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});

