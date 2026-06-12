import { Request, Response }
from "express";

import {
  processMusicQuery
}
from "../services/text/queryProcessor";

export const queryMusicController =
async (
  req: Request,
  res: Response
) => {

  try {

    const { query } =
      req.body;

    const response =
      await processMusicQuery(
        query
      );

    return res.status(200).json({

      success: true,

      data:
        response

    });

  } catch {

    return res.status(500).json({

      success: false,

      message:
        "Query failed"

    });

  }

};