//require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute";

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

export default app;
