import { Request, Response } from "express";
import { createCandidateService } from "../services/candidate.service";

export const createCandidateController = async (
  req: Request,
  res: Response
) => {
  try {
    const candidate = await createCandidateService(req.body);

    return res.status(201).json({
      success: true,
      data: candidate,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
