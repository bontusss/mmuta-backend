const connectDB = (dbUrl, database) => {
  console.log("connecting to DB..");
  database.connect(dbUrl);
  database.connection.on("connected", function () {
    console.log("Database is connected");
  });
  database.connection.on("error", function (err) {
    console.error(`Error: ${err.name}, ${err.message}`);
  });
  database.connection.on("disconnected", function () {
    console.warn(`Warn: Database is disconnected`);
  });

  process.on("SIGINT", function () {
    database.connection.close(function () {
      console.log("Database is disconnect because of app termination");
    });
  });
};

export default connectDB;
