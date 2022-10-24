const express = require("express");
const cors = require("cors");

require("./DB/Config");
const port = 5000;
const userRoute = require("./Routes/User");
const adminRoute = require("./Routes/Admin");
const bloodRoute = require("./Routes/Blood");
const contactRoute = require("./Routes/Contact");
const app = express();

app.use(express.json());

app.use(
  cors({
    // origin: "https://1h477z.csb.app",
    // credentials: true
  })
);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/blood", bloodRoute);
app.use("/contact", contactRoute);
app.listen(port, () => {
  console.log(`Db started at port ${port}`);
});
