const express = require("express");
const User = require("../DB/Admin");

const app = express();

app.post("/register", async (req, res) => {
  let fuser = await User.findOne({ email: req.body.email });
  if (fuser) {
    res.status(500).json({ error: "This email already exists" });
  } else {
    let user = new User(req.body);
    let result = await user.save();

    result = result.toObject();
    delete result.password;

    res.send(result);
  }
});

// For login Page
app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.status(200).json({ user: user });
    } else {
      res.status(400).json({ message: "Invalied Email or Password" });
    }
  } else {
    res.status(403).json({ message: "Email and password required" });
  }
});

module.exports = app;
