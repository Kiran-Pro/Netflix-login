const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Email = "user@gmail.com";
const passWord = "Qwerty@1234";

app.listen(3000, () => {
  console.log("port 3000 started...");
});

app.get("/", (req, res) => {
  res.send("Go to /login");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (Email === email && passWord === password) {
    res.send(true);
  } else {
    res.send(false);
  }
  console.log(req.body);
});
