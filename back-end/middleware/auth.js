const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({ msg: "No token in auth !" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      res.status(400).json({ msg: "Error while decoding token in auth" });
    }

    const user = await User.findById(decodedToken.token).select("-password");
    //   .populate("followers")
    //   .populate("threads")
    //   .populate("replies")
    //   .populate("reposts");
    console.log("userInfo -> ", user);
    if (!user) {
      return res
        .status(400)
        .json({ msg: "Error while getting user/ no user found !" });
    }

    // storing user info to be passed to the next phase
    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json({ msg: "Error in auth !", err: err.message });
  }
};

module.exports = auth;
