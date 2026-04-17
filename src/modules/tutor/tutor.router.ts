import express from "express";
import { Router } from "express";
import { tutorControllers } from "./tutor.controller";

const router = express.Router();

router.get("/", tutorControllers.getTutors);
router.post("/", tutorControllers.createTutorProfile);


export const tutorRouter: Router = router;