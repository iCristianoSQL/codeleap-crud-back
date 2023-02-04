const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const itemRoutes = require("./routes/itemRoutes");

app.use("/item", itemRoutes);

const DB_USER = "icristianosql";
const DB_PASSWORD = encodeURIComponent("#86790102aB");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@codeleap.qisctke.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3100);
    console.log("Conectou no banco!");
  })
  .catch((err) => console.log(err));