import { Router } from "express";
import { createApplicationController } from "../controllers/application.controller";
import { getApplicationsController } from "../controllers/application.controller";
import { shortlistApplicationController } from "../controllers/application.controller";

const router = Router();

router.get("/applications", getApplicationsController);
router.post("/applications", createApplicationController);
router.patch(
  "/applications/:id/shortlist",
  shortlistApplicationController
);

export default router;
