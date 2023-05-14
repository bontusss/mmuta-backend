const express = require("express");
const morgan = require("morgan");
const appError = require("./utils/appError");
const globalErrorCHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// App Routers
// app.use("/", (req, res) => {
//   res.send("<h1 style=text-align:center>Welcome to Mmuta</h1>");
// });
app.use("/api/v1/users", userRouter);

// 404 handler
app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server`));
});

// Global Error handling middleware
app.use(globalErrorCHandler);

module.exports = app;
