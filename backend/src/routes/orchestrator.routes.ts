import express
from "express";

import {
  processController
}
from "../controllers/orchestrator.controller";

const router =
  express.Router();

router.post(
  "/process",
  processController
);

export default router;