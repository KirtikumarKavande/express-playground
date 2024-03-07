const express = require("express");
const { PORT } = require("../config/server.config");
const v1router = require("./routes/v1");
const app = express();


app.use('/api',v1router)

app.listen(PORT, () => {
  console.log("connection established" + " PORT " + PORT);
});
