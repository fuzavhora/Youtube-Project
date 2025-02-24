import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});
import app from "./app.js";
import connectDB from "./db/db.js";

connectDB(() => {
  app.listen(process.env.PORT || 8000);
});
