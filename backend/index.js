const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    email: "user@gmail.com",
    password: "Qwerty@1234",
  },
];

app.listen(3000, () => {
  console.log("Server Started in port 3000");
});

app.get("/", (req, res) => {
  res.send("Go to /login");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).send(true);
  } else {
    res.status(401).send(false);
  }

  console.log("Login: ", req.body);
});
