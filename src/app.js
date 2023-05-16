import express from 'express'
import morgan from 'morgan'
import AppError from './utils/appError'
import globalErrorCHandler from "./controllers/errorController"
import userRouter from "./routes/userRouter"

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
  next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

// Global Error handling middleware
app.use(globalErrorCHandler);

export default app;
