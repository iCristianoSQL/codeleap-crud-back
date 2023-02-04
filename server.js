const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
require('dotenv').config()

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const itemRoutes = require("./routes/itemRoutes");

app.use("/item", itemRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@codeleap.qisctke.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 3000);
    console.log("Conectou no banco!");
  })
  .catch((err) => console.log(err));