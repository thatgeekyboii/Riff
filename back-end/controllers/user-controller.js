const User = require("../models/user-model");
const bcrypt = require("bcrypt"); // Corrected bcrypt import
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  console.log("before calling route");

  try {
    const { userName, email, password } = req.body;

    // Check if all fields are provided
    if (!userName || !email || !password) {
      return res
        .status(400)
        .json({ msg: "username, email and password are required." });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ msg: "User already exists. Please Sign Up" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
      return res.status(400).json({ msg: "Error in password hashing" });
    }

    // Create a new user
    const user = new User({
      userName,
      email,
      password: hashedPassword,
    });

    const result = await user.save();

    if (!result) {
      return res.status(400).json({ msg: "Error while saving user" });
    }

    // Generate JWT Token
    const accessToken = jwt.sign(
      { token: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    if (!accessToken) {
      return res.status(400).json({ msg: "Error while generating token" });
    }

    // Set the token in cookie
    res.cookie("token", accessToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    });

    // Respond with success
    res.status(201).json({ msg: "User Created Successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Error in Creating User !", err: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and Password required" });
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ msg: "User is not registered" });
    }
    const passwordMatch = await bcrypt.compare(password, userExists.password);
    if (!passwordMatch) {
      return res.status(400).json({ msg: "password validation failed" });
    }

    const accessToken = jwt.sign(
      { token: userExists._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.cookie("token", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      sameSite: "none",
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({ msg: "User signed in successfuly" });
  } catch (err) {
    res
      .status(400)
      .json({ msg: "Error in Signing In User !", err: err.message });
  }
};

const userDetails = async (req, res) => {
  try {
    // getting from url
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "Id is required" });
    }
    const user = await User.findById(id)
      .select("-password")
      .populate("followers")
      .populate({
        path: "threads",
        populate: [{ path: "likes" }, { path: "comments" }, { path: "admin" }],
      })
      .populate({ path: "replies", populate: { path: "admin" } })
      .populate({
        path: "reposts",
        populate: [{ path: "likes" }, { path: "comments" }, { path: "admin" }],
      });

    res.status(200).json({ msg: "User Details Fetched !" });
  } catch (err) {
    res
      .status(400)
      .json({ msg: "Error in getting user details !", err: err.message });
  }
};

const followUser = async (req, res) => {
  try {
    const { id } = req.params; // id of the user to follow

    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(400).json({ msg: "User is not registered" });
    }

    // follow unfollow check
    if (userExists.followers.includes(req.user._id)) {
      await User.findByIdAndUpdate(
        userExists._id,
        {
          $pull: { followers: req.user._id },
        },
        { new: true }
      );
      return res.status(201).json({ msg: `Unfollowed ${userExists.userName}` });
    } else {
      await User.findByIdAndUpdate(
        userExists._id,
        {
          $push: { followers: req.user._id },
        },
        { new: true }
      );
      return res.status(201).json({ msg: `Followed ${userExists.userName}` });
    }
  } catch (err) {
    res.status(400).json({ msg: "Error in Following user", err: err.message });
  }
};

module.exports = { signUp, signIn, userDetails, followUser };
