import { ICandidate } from "../models/candidate.model";
import { createCandidate } from "../repositories/candidate.repository";

export const createCandidateService = async (
  data: Partial<ICandidate>
): Promise<ICandidate> => {


  if (data.experience !== undefined && data.experience < 0) {
    throw new Error("Experience cannot be negative");
  }

  if (
    data.languageScore !== undefined &&
    (data.languageScore < 0 || data.languageScore > 100)
  ) {
    throw new Error("Language score must be between 0 and 100");
  }

  return await createCandidate(data);
};
