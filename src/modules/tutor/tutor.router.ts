import express from "express";
import { Router } from "express";
import { tutorControllers } from "./tutor.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.get("/", tutorControllers.getTutors);
router.post("/",auth(UserRole.TUTOR), tutorControllers.createTutorProfile);
router.patch("/assign-subject", auth(UserRole.TUTOR), tutorControllers.assignSubject);


export const tutorRouter: Router = router;