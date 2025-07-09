const express = require("express");
const {
  signUp,
  signIn,
  userDetails,
  followUser,
  updateProfile,
} = require("./controllers/user-controller");
const auth = require("./middleware/auth");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/user/:id", auth, userDetails);
router.put("/user/follow/:id", auth, followUser);
router.put("/user/update", auth, updateProfile);

const tokenfuncTest = async (req, res) => {
  res.status(200).json({ msg: `access allowed ->`, user: req.user });
};

router.get("/access", auth, tokenfuncTest);

module.exports = router;
