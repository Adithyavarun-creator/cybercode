const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/error");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const {
    firstname,
    surname,
    email,
    company,
    country,
    postalCode,
    designation,
    password,
    address,
    contactNumber,
    version,
  } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    firstname,
    surname,
    email,
    company,
    country,
    postalCode,
    designation,
    address,
    contactNumber,
    version,
    password: hashedPassword,
  });
  try {
    await newUser.save();

    // sendWelcomeEmail(newUser).catch((err) => console.log("Email error:", err));
    // sendWelcomeEmail(newUser).catch((err) => console.log("Email error:", err));
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out!");
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, signin, signOut };
