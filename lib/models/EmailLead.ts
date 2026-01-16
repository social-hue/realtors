import { Schema, models, model } from "mongoose";

const EmailLeadSchema = new Schema(
  {  
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }             
);

export default models.EmailLead || model("EmailLead", EmailLeadSchema);
