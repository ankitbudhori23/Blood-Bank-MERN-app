const express = require("express");
const Blood = require("../DB/Blood");

const router = express();

router.get("/", async (req, res) => {
  const blood = await Blood.find().sort({ $natural: -1 });
  res.json({ data: blood });
});

router.post("/", async (req, res) => {
  const newblood = new Blood(req.body);
  try {
    let blood = await newblood.save();
    res.status(200).json({ message: "added", data: blood });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const b = await Blood.findById(req.params.id);
    await b.updateOne({ $set: req.body });
    res.status(200).json({ succ: "Information Updated" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const a = await Blood.findById(req.params.id);
    await a.deleteOne();
    res.status(200).json("Information deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:state/:city/:blood", async (req, res) => {
  const { state, city, blood } = req.params;

  let finddata = await Blood.find({
    $and: [
      {
        state: { $regex: state, $options: "i" }
      },
      {
        city: { $regex: city, $options: "i" }
      },
      {
        blood_type: { $regex: blood, $options: "i" }
      }
    ]
  });
  if (finddata.length > 0) {
    return res.json({ data: finddata });
  } else {
    return res.status(404).json({ error: `No Data Found` });
  }
});

module.exports = router;
