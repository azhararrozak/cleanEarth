/* eslint-disable import/no-anonymous-default-export */
import connectDB from "@/utils/connectDB";
import Payment from "@/models/paymentmodel";
import auth from "@/middleware/auth";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getHistoryPayment(req, res);
      break;
    case "POST":
      await createData(req, res);
      break;
  }
};

const getHistoryPayment = async (req, res) => {
    try {
        const result = await auth(req, res)

        let orders;
        if(result.role !== 'admin'){
            orders = await Payment.find({user: result.id}).populate("user", "-password")
        }else{
            orders = await Payment.find().populate("user", "-password")
        }

        res.json({orders})
      } catch (err) {
        return res.status(500).json({ err: err.message });
      }
}

const createData = async (req, res) => {
  try {
    const result = await auth(req, res)

    const {
      transaction_id,
      order_id,
      fraud_status,
      payment_type,
      gross_amount,
      pdf_url,
    } = req.body;

    const newPaymentOrder = new Payment({
      user: result.id,
      transaction_id,
      order_id,
      fraud_status,
      payment_type,
      gross_amount,
      pdf_url,
    });

    await newPaymentOrder.save();
    
    res.json({
      msg: 'Order success! We will contact you to confirm the order.',
      newPaymentOrder
  })
  } catch (err) {
    return res.status(500).json({err: err.message})
  }
};
