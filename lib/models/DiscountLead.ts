import { Schema, models, model } from "mongoose";

const DiscountLeadSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        source: {
            type: String,
            default: "dholera-city",
        },
        discountCode: {
            type: String,
            required: true,
        },
        isUsed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default models.DiscountLead || model("DiscountLead", DiscountLeadSchema);
