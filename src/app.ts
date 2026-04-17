import { toNodeHandler } from "better-auth/node";
import express from "express";
import cors from "cors";
import { Application } from "express";
import { auth } from "./lib/auth";
import { tutorRouter } from "./modules/tutor/tutor.router";

const app: Application = express();
app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_APP_URL || "http://localhost:4000",
    credentials: true
}));
// "seed:admin": "npx tsx src/scripts/seedAdmin.ts"


// user defined routes
app.use("/tutors", tutorRouter);

app.get("/", (req, res)=>{
    res.send("SkillBridge Server is Running");
});

export default app;