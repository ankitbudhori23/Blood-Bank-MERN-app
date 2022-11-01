const express = require("express");
const Contact = require("../DB/Contact");

const router = express();

router.get("/", async (req, res) => {
  const c = await Contact.find().sort({ $natural: -1 });
  res.json({ data: c });
});

router.post("/", async (req, res) => {
  const c = new Contact(req.body);
  try {
    let contact = await new c.save();
    res.status(200).json({ message: "added", data: contact });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
