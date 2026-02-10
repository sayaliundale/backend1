require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoute");

const app = express();

const allowedOrigins =
    process.env.ALLOWED_ORIGINS?.split(",") ?? [];

app.use(
    cors({
        origin: allowedOrigins.length > 0 ? allowedOrigins : true,
        credentials: true,
    })
);

app.use(express.json());

/* ✅ ROUTES */
app.use("/api/contact", contactRoutes);

module.exports = app;
