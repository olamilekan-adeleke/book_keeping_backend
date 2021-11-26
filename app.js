const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const authRoutes = require("./routes/auth/auth_routers");
const notFoundRoutes = require("./routes/not_found/not_found");

// middle-wares
const app = express();
app.use(express.json());
app.use(morgan("dev"));

// routes...

// authentication
app.use("/auth", authRoutes);

// not found
app.use("/", notFoundRoutes);

// start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
