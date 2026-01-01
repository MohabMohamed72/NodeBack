const express = require("express");
const router = express.Router();
const UserModel = require("../../Models/Users/UserModel");

router.post("/add", (req, res) => {
  const Schema = Joi.object({
    first_name: Joi.string().required().min(10),
    phone_number: Joi.string().required().min(10),
    email: Joi.string().required().min(10),
  });
  const { error } = Schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const user = new UserModel({
    first_name: req.body.first_name,
    phone_number: req.body.phone_number,
    email: req.body.email,
  });
  user.save().then(() => {
    res.status(201).json({
      message: "User added successfully",
      status: 200,
      data: user,
    });
  });
});

router.get("/", (req, res) => {
  UserModel.find().then((users) => {
    res.status(200).json({
      message: "Users fetched successfully",
      status: 200,
      data: users,
    });
  });
});

module.exports = router;
