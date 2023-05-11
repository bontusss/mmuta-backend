const express = require("express");
const {
  registerWithGoogle,
  registerWithfacebook,
} = require("../controllers/authController");
const router = express.Router();

// localhost:3000/api/v1/users/auth/google
router.get("/auth/google", registerWithGoogle);

// localhost:3000/api/v1/users/auth/facebook
router.get("/auth/facebook", registerWithfacebook);

module.exports = router;
