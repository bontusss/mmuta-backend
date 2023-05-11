const admin = require("../utils/firebase-admin");
const JWT = require("jsonwebtoken");
const AppError = require("../utils/appError");

// check for the idtoken in the request body, verify and decode
// use the uid from the decoded idtoken to generate a jwt token and send it to the client
exports.registerWithGoogle = (req, res, next) => {
  const { idToken } = req.body;

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      const token = JWT.sign({ uid }, "your-secret-key", {
        expiresIn: "7 days",
      });
      //todo: create new user and save to database here

      // send token
      res
        .status(201)
        .json({ status: "success", token, message: "Registration successful" });
    })
    .catch((error) => {
      next(new AppError(error, 400));
    });
};

exports.registerWithfacebook = (req, res, next) => {
  const { accessToken } = req.body;
  admin
    .auth()
    .verifyIdToken(accessToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      const token = JWT.sign({ uid }, "your-secret-key", {
        expiresIn: "7 days",
      });
      //todo: create new user and save to database here

      // send token
      res
        .status(201)
        .json({ status: "success", token, message: "Registration successful" });
    })
    .catch((error) => {
      next(new AppError(error, 400));
    });
};