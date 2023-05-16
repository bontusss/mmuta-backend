const catchAsync = require("../utils/catchAsync");
const admin = require("../utils/firebase-admin");
const AppError = require("../utils/appError");

exports.verifyToken = catchAsync((req, res, next) => {
  let token;
  // check if token exists
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    token = req.headers.authorization.split(" ")[1];
  if (!token) return next(new AppError("Please signin or login", 401));
  //   verify token
  const decodedToken = admin.auth().verifyIdToken(token);
  if (decodedToken) next();
});
