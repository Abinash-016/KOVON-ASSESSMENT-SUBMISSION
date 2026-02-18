import { Request, Response } from "express";
import {
  createApplicationService,
  getApplicationsByJobService,
  shortlistApplicationService,
} from "../services/application.service";


export const createApplicationController = async (
  req: Request,
  res: Response
) => {
  try {
    const { candidateId, jobId } = req.body;

    const application = await createApplicationService(
      candidateId,
      jobId
    );

    return res.status(201).json({
      success: true,
      data: application,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const getApplicationsController = async (
  req: Request,
  res: Response
) => {
  try {
    const { jobId } = req.query;

    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "jobId is required",
      });
    }

    const applications = await getApplicationsByJobService(
      jobId as string
    );

    return res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const shortlistApplicationController = async (
  req: Request,
  res: Response
) => {
  try {
const id = req.params.id as string;

    const updatedApplication =
      await shortlistApplicationService(id);

    return res.status(200).json({
      success: true,
      data: updatedApplication,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
