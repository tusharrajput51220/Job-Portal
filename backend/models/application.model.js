const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema(
  {
    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    applicant: {
      type: Schema.Types.ObjectId,
      ref: "USer",
      required: true,
    },
    status: [
      {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    ],
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);
