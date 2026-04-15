import express from "express";
import { Application } from "express";

const app: Application = express();
// app.all('/api/auth/{*any}', toNodeHandler(auth));
// 24-1 er 11:20 er por eikhane /api/auth/*splat likhte bola hoisilo.
// Kintu ami Better auth er docu onujayi likhechi. And So far, it is working.

app.use(express.json());
// "seed:admin": "npx tsx src/scripts/seedAdmin.ts"

app.get("/", (req, res)=>{
    res.send("SkillBridge Server is Running");
});

export default app;