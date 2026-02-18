import { Request, Response } from "express";
import { createJobService } from "../services/job.service";

export const createJobController = async (
  req: Request,
  res: Response
) => {
  try {
    const job = await createJobService(req.body);

    return res.status(201).json({
      success: true,
      data: job,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
