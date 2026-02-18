import { Candidate, ICandidate } from "../models/candidate.model";

export const createCandidate = async (
  data: Partial<ICandidate>
): Promise<ICandidate> => {
  const candidate = new Candidate(data);
  return await candidate.save();
};

export const getCandidateById = async (
  id: string
): Promise<ICandidate | null> => {
  return await Candidate.findById(id);
};
