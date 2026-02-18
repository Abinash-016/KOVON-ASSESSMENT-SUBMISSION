import { IJob } from "../models/job.model";
import { createJob } from "../repositories/job.repository";

export const createJobService = async (
  data: Partial<IJob>
): Promise<IJob> => {
  if (data.minExperience !== undefined && data.minExperience < 0) {
    throw new Error("Minimum experience cannot be negative");
  }

  if (
    data.minLanguageScore !== undefined &&
    (data.minLanguageScore < 0 || data.minLanguageScore > 100)
  ) {
    throw new Error("Minimum language score must be between 0 and 100");
  }

  return await createJob(data);
};
