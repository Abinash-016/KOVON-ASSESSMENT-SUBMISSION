import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  country: string;
  minExperience: number;
  minLanguageScore: number;
  createdAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    title: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    minExperience: {
      type: Number,
      required: true,
      min: 0,
    },
    minLanguageScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const Job = mongoose.model<IJob>("Job", JobSchema);
