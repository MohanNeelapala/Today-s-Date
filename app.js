const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();

  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  let mon = date.getMonth() + 1;
  if (mon < 10) {
    mon = "0" + mon;
  }

  let year = date.getFullYear();

  response.send(`${day}-${mon}-${year}`);
});

app.listen(3000);

module.exports = app;
