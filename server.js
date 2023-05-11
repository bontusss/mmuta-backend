const dotenv = require('dotenv')
const connectDB = require('./utils/connectDB')
const mongoose = require('mongoose');

dotenv.config({path: './config.env'})

// Database URi config

if (process.env.NODE_ENV === 'development')  DB = process.env.DB_URI_prod; // change to local server if need be
if (process.env.NODE_ENV === 'production') DB = process.env.DB_URI_prod

const app = require('./app')

// handle failed synchronoous requests
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
});

// connect database
connectDB(DB, mongoose)

// Start server
const port = process.env.PORT || 3000;
const server = app.listen(port, '127.0.0.1', () => {
  console.log(`Server is up and running on ${port} 🎈`);
});

// handle failed promises
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});