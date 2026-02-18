import { Router } from "express";
import { createJobController } from "../controllers/job.controller";

const router = Router();

router.post("/jobs", createJobController);

export default router;
