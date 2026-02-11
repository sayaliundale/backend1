import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import env from "./config/env.js";
import contactRoutes from "./routes/contactRoute.js";

const app = express();

/* ✅ CORS CONFIG (VERCEL SAFE) */
const allowedOrigins = [
    "https://t-beta-jade.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
    ...(env.ALLOWED_ORIGINS ? env.ALLOWED_ORIGINS.split(",") : [])
];

app.use(
    "/*",
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("CORS not allowed"));
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);

/* ✅ Handle preflight explicitly */
app.options("*", cors());

app.use(express.json());

/* ROUTES */
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

export default app;
