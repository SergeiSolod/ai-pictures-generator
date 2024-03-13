const express = require("express");
const router = require("./router");
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = dotenv.parsed.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(
  cors({
    credentials: true,
    origin:
      dotenv.parsed.STATUS === "DEV"
        ? dotenv.parsed.FRONT_URL_DEV
        : dotenv.parsed.FRONT_URL_PROD,
  }),
);

app.use("/", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {}
};

start();
