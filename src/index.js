import dotenv from "dotenv";
dotenv.config({
  // path: "./env",
});
import app from "./app.js";
import connectDB from "./db/db.js";

// PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

connectDB();
// connectDB(() => {
app.listen(8000, () => {
  console.log(`Server is running on 8000`);
});
// });
