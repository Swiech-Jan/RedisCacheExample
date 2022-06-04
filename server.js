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

//------------------------- PHOTOS ------------------------
app.get("/photos", async (req, res) => {
  const albumId = req.query.albumId;
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos",
    { params: { albumId } }
  );
  res.json(data);
});

//----- REDIS

//-----

app.get("/photos/:id", async (req, res) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
  );
  res.json(data);
});
//----------------------------------------------------------

app.listen(port, function () {
  console.log("Example app listening on port " + port + "!");
});
