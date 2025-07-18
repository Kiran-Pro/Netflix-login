const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const Email = "user@gmail.com";
const passWord = "12345";

app.listen(3000, () => {
  console.log("port 3000 started...");
});

app.get("/login", (req, res) => {
  const { email, password } = req.query;
  if (Email === email && passWord === password) {
    res.send(true);
  } else {
    res.send(false);
  }
  console.log(req.query);
});
