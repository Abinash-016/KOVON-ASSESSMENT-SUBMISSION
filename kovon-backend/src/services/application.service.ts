import { IApplication } from "../models/application.model";
import { createApplication } from "../repositories/application.repository";
import { getCandidateById } from "../repositories/candidate.repository";
import { getJobById } from "../repositories/job.repository";
import { getApplicationsByJobId } from "../repositories/application.repository";
import { getApplicationById, updateApplicationStatus } from "../repositories/application.repository";

export const createApplicationService = async (
  candidateId: string,
  jobId: string
): Promise<IApplication> => {
  const candidate = await getCandidateById(candidateId);
  if (!candidate) {
    throw new Error("Candidate not found");
  }

  const job = await getJobById(jobId);
  if (!job) {
    throw new Error("Job not found");
  }

  const eligibilityScore =
    candidate.experience * 2 +
    candidate.languageScore / 10 +
    (candidate.documentsVerified ? 10 : 0);

  const isEligible =
    candidate.experience >= job.minExperience &&
    candidate.languageScore >= job.minLanguageScore &&
    candidate.documentsVerified === true;

  const status = isEligible ? "ELIGIBLE" : "REJECTED";

  return await createApplication({
    candidateId: candidate._id,
    jobId: job._id,
    eligibilityScore,
    status,
  });
};


export const getApplicationsByJobService = async (
  jobId: string
) => {
  const applications = await getApplicationsByJobId(jobId);

  const statusPriority: Record<string, number> = {
    ELIGIBLE: 1,
    SHORTLISTED: 1,
    REJECTED: 2,
  };

  return applications.sort((a: any, b: any) => {

    if (statusPriority[a.status] !== statusPriority[b.status]) {
      return statusPriority[a.status] - statusPriority[b.status];
    }

    if (b.eligibilityScore !== a.eligibilityScore) {
      return b.eligibilityScore - a.eligibilityScore;
    }

    return (
      (b.candidateId.experience || 0) -
      (a.candidateId.experience || 0)
    );
  });
};

export const shortlistApplicationService = async (
  applicationId: string
) => {
  const application = await getApplicationById(applicationId);

  if (!application) {
    throw new Error("Application not found");
  }

  if (application.status !== "ELIGIBLE") {
    throw new Error("Only ELIGIBLE applications can be shortlisted");
  }

  return await updateApplicationStatus(applicationId, "SHORTLISTED");
};