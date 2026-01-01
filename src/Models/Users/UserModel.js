const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: Number,
      required: true,
      maxlength: 11,
      unique: true,
    },
    email: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
