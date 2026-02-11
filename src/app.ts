

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoute.js";
const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }));
app.use(express.json()); /* ✅ ROUTES */ app.use("/api/contact", contactRoutes); app.get("/", (req, res) => { res.send("Server is running"); });

export default app;
