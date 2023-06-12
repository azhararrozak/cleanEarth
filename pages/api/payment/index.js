/* eslint-disable import/no-anonymous-default-export */
import connectDB from "@/utils/connectDB";
import Payment from "@/models/paymentmodel";

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createData(req, res)
            break;
    }
}

const createData = async (req, res) => {
    try{
        const { orderId } = req.body

        const newPaymentOrder = new Payment({
            orderId
        })

        await newPaymentOrder.save()
        res.json("Success")
    }catch(err){
        return res.status(500).json("error")
    }
}