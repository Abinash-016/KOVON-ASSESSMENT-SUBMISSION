import mongoose, { Schema, Document } from "mongoose";

export interface ICandidate extends Document {
  name: string;
  skill: string;
  experience: number;
  languageScore: number;
  documentsVerified: boolean;
  createdAt: Date;
}

const CandidateSchema = new Schema<ICandidate>(
  {
    name: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
      min: 0,
    },
    languageScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    documentsVerified: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const Candidate = mongoose.model<ICandidate>(
  "Candidate",
  CandidateSchema
);
