import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose
  .connect(
    config.mongoUri,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected.."))
  .catch(err => console.log(err));

app.listen(config.port, err => {
  if (err) {
    console.log(err);
  }
  console.log("Server started on port %s.", config.port);
});
