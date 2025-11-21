import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema(
  {
    jobId: { type: String, required: true },
    jobTitle: { type: String, required: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    experience: { type: String, required: true },
    resumeUrl: { type: String },
    resumeFilename: { type: String },
    coverLetter: { type: String, trim: true },
    status: {
      type: String,
      enum: ["New", "Under Review", "Interview", "Rejected", "Hired"],
      default: "New",
    },
  },
  { timestamps: true }
);

// Delete the model if it exists to avoid schema conflicts
if (mongoose.models.JobApplication) {
  delete mongoose.models.JobApplication;
}

export default mongoose.model("JobApplication", JobApplicationSchema);

