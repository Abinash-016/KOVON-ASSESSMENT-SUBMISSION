import { Job, IJob } from "../models/job.model";

export const createJob = async (
  data: Partial<IJob>
): Promise<IJob> => {
  const job = new Job(data);
  return await job.save();
};

export const getJobById = async (
  id: string
): Promise<IJob | null> => {
  return await Job.findById(id);
};
