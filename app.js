const express = require("express");
const app = express();
const api = require("./routes/routes");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("node server is up");
});
app.use("/upload", api);
app.listen(3000, () => {
  console.log(`server started at port 3000`);
});
