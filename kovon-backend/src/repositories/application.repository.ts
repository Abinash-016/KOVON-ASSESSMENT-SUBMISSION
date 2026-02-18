import { Application, IApplication } from "../models/application.model";

export const createApplication = async (
  data: Partial<IApplication>
): Promise<IApplication> => {
  const application = new Application(data);
  return await application.save();
};


export const getApplicationById = async (
  id: string
): Promise<IApplication | null> => {
  return await Application.findById(id);
};

export const updateApplicationStatus = async (
  id: string,
  status: string
): Promise<IApplication | null> => {
  return await Application.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
};

export const getApplicationsByJobId = async (
  jobId: string
) => {
  return await Application.find({ jobId })
    .populate("candidateId") 
    .sort({
      status: 1,
      eligibilityScore: -1,
    });
};
