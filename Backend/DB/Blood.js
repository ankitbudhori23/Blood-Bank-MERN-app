const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    blood_type: {
      type: String
    },
    unit_available: {
      type: String
    },
    phone_number: {
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

module.exports = mongoose.model("bloodbank", userSchema);
