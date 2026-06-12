import { Router } from "express";

import { upload } from "../middleware/upload";

import { identifyAudioController }
from "../controllers/audio.controller";

const router = Router();

router.post(
  "/identify",
  upload.single("audio"),
  identifyAudioController
);

export default router;