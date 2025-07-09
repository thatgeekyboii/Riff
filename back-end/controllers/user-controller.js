const User = require("../models/user-model");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res
        .status(400)
        .json({ msg: "username, email and password required." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ msg: "User already exists. Please Sign Up" });
    }

    const hashedPassword = await bycrypt(password, 10);
    if (!hashedPassword) {
      return res.status(400).json({ msg: "Error in password hasing" });
    }

    const user = new User({
      userName: userName,
      email: email,
      password: hashedPassword,
    });

    const result = await user.save();

    if (!result) {
      return res.status(400).json({ msg: "Error while saving user" });
    }

    // generating token
    const accessToken = jwt.sign(
      { token: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    if (!accessToken) {
      return res.status(400).json({ msg: "Error while generating token" });
    }

    // generating cookie
    res.cookie("token", accessToken),
      {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      };

    res.status(201).json({ msg: "User Created Successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Error in signin !", err: err.message });
  }
};

module.exports = { signUp };
