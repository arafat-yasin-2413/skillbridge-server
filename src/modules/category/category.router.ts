import express from "express";
import { Router } from "express";
import { categoryControllers } from "./category.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.get("/", categoryControllers.getAllCategories);
router.post("/", auth(UserRole.ADMIN), categoryControllers.createCategory);

export const categoryRouter: Router = router;
