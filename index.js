const express = require("express");
const MahaLap = require("./Maha-Lap");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("เจริญพร"));

app.use("/public", express.static("public"));
// http://localhost:3000/public

app.get("/namo", (req, res) => {
  const day = req.query.day;
  const story = req.query.story;
  const time = req.query.time;
  const TheHolyNumber = MahaLap.namo(day, story, time);
  res.json({
    result: TheHolyNumber
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
