const express = require("express");
const {ping} = require('../controllers/testController');
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();
router.get('/ping',verifyToken, ping)


module.exports = router;


