import { Router } from "express";
import { createCandidateController } from "../controllers/candidate.controller";

const router = Router();

router.post("/candidates", createCandidateController);

export default router;
