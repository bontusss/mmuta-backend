import catchAsync from "../utils/catchAsync";
import admin from "../utils/firebase-admin";
import AppError from "../utils/AppError";

const verifyToken = catchAsync((req, res, next) => {
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
  // if (decodedToken) next();
});

export default verifyToken;