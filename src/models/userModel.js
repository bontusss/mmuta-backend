const mongoose = require("mongoose");
const crypto = require("crypto");
const JWT = require("jsonwebtoken");

const userSchema = mongoose.Schema({});

const User = mongoose.model("User", userSchema);

module.exports = User;
