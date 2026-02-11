//require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
import env from "./config/env.js";
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute.js";

const app = express();

const allowedOrigins = env.ALLOWED_ORIGINS ? env.ALLOWED_ORIGINS.split(',') : [];
const defaultOrigins = [
    'https://t-beta-jade.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
];

app.use(
    cors({
        origin: [...allowedOrigins, ...defaultOrigins],
        credentials: true,
    })
);

app.use(express.json());

/* ✅ ROUTES */
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
});

export default app;
