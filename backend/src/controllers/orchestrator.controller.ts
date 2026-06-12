import {
  Request,
  Response
}
from "express";

import {
  orchestrateRequest
}
from "../services/orchestrator/musicOrchestrator";

export const processController =
async (
  req: Request,
  res: Response
) => {

  try {

    const result =
      await orchestrateRequest(
        req.body
      );

    res.status(200).json({

      success: true,

      data:
        result

    });

  } catch {

    res.status(500).json({

      success: false,

      message:
        "Processing failed"

    });

  }

};