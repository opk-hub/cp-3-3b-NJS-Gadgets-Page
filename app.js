// create the express server instance

const express = require("express");
const app = express();

//create handing http request

app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = app;
