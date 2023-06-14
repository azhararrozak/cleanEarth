import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  transaction_id: {
    type: String,
    required: true,
  },
  order_id: {
    type: String,
    required: true,
  },
  fraud_status: {
    type: String,
    required: true,
  },
  payment_type: {
    type: String,
    required: true,
  },
  gross_amount: {
    type: Number,
    required: true,
  },
  pdf_url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

let Payment =
  mongoose.models.payment || mongoose.model("payment", paymentSchema);

export default Payment;
