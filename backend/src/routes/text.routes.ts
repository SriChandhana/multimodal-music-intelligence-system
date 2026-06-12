import express
from "express";

import {
  queryMusicController
}
from "../controllers/text.controller";

const router =
  express.Router();

router.post(
  "/query",
  queryMusicController
);

export default router;