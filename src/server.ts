import * as dotenv from 'dotenv'
import connectDB from './utils/connectDB'
import mongoose from "mongoose"

dotenv.config({path: './config.env'})

// Database URi config
let DB: string
if (process.env.NODE_ENV === 'development') {
  DB = process.env.DB_URI_prod; // change to local server if need be
}
if (process.env.NODE_ENV === 'production') {
  DB = process.env.DB_URI_prod
}

import app from './app'

// handle failed synchronoous requests
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
});

// connect database
connectDB(DB, mongoose)

// Start server
const PORT = parseInt(process.env.PORT) || 3000;
const server = app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is up and running on ${PORT} 🎈`);
});

// // handle failed promises
// process.on('unhandledRejection', (err) => {
//   console.log(err.name, err.message);
//   console.log('UNHANDLED REJECTION! Shutting down...');
//   server.close(() => {
//     process.exit(1);
//   });
// });