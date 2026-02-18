import mongoose, { Schema, Document } from "mongoose";

export type ApplicationStatus =
  | "ELIGIBLE"
  | "REJECTED"
  | "SHORTLISTED";

export interface IApplication extends Document {
  candidateId: mongoose.Types.ObjectId;
  jobId: mongoose.Types.ObjectId;
  eligibilityScore: number;
  status: ApplicationStatus;
  createdAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    candidateId: {
      type: Schema.Types.ObjectId,
      ref: "Candidate",
      required: true,
    },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    eligibilityScore: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["ELIGIBLE", "REJECTED", "SHORTLISTED"],
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const Application = mongoose.model<IApplication>(
  "Application",
  ApplicationSchema
);
