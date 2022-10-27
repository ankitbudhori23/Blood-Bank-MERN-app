const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fiestname: {
      type: String
    },
    lastname: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    blood: {
      type: String
    },
    unit_needed: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("contact", userSchema);
