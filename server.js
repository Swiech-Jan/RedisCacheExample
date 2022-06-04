const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

var port = 3000;

app.get("/photos", async (req, res) => {
  const albumId = req.query.albumId;
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos",
    { params: { albumId } }
  );
  res.json(data);
});

app.listen(port, function () {
  console.log("Example app listening on port " + port + "!");
});
