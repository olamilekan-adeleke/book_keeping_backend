const express = require("express");
const morgan = require("morgan");
const authRoutes = require("../../controllers/auth/auth_routes");
const notFoundRoutes = require("../../controllers/not_found/not_found_routes");

const dotenv = require("dotenv");
dotenv.config();

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
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
