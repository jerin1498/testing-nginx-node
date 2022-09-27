const express = require("express");
const Port = 8811;
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    data: "workinggg",
  });
});

app.listen(Port, () => console.log("app is connected on ", Port));
