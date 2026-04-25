const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
// const listingRoute = require("./routes/listingRoute");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB 🚀🚀🚀"))
  .catch((error) => console.log(error));

const app = express();

// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.listen(5000, () => {
  console.log("Server running on 5000 🚀🚀🚀");
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
// app.use("/api/listing", listingRoute);

// app.get("/", (req, res) => {
//   res.send("API is running on live 🚀");
// });

app.use(express.static(path.join(__dirname, "public")));

// your existing route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(5000, () => console.log("Server running"));

//middlewares
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
