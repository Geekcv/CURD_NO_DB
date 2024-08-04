const jwt = require("jsonwebtoken");

const users = [];
const secretKey = "your_secret_key";
const EmpResister = (req, res) => {
  const { username, password } = req.body;
  // const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password });
  res.status(201).send("User registered");
};

const Emplogin = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).send("user wrong");
  }
  const pass = users.find((u) => u.password === password);

  if (!pass) {
    return res.status(401).send("password wrong");
  }
  const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
  res.json({ token });
};

module.exports = { EmpResister, Emplogin };
