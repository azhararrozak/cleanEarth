import midtransClient from "midtrans-client";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  const serverKey = process.env.SERVER_KEY;
  const clientKey = process.env.CLIENT_KEY;
  const order_id = uuidv4();
  const { total, firstname, lastname, email, address, city, mobile } = req.body;

  // Buat instance Snap
  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: serverKey,
    clientKey: clientKey,
  });

  // Persiapkan parameter API Snap (lihat: https://snap-docs.midtrans.com) contoh parameter minimum:
  const parameter = {
    transaction_details: {
      order_id: order_id,
      gross_amount: total,
    },
    customer_details: {
      first_name: firstname,
      last_name: lastname,
      email: email,
      phone: mobile,
      billing_address: {
        first_name: firstname,
        last_name: lastname,
        email: email,
        phone: mobile,
        address: address,
        city: city,
        postal_code: "",
        country_code: "IDN",
      },
      shipping_address: {
        first_name: firstname,
        last_name: lastname,
        email: email,
        phone: mobile,
        address: address,
        city: city,
        postal_code: "",
        country_code: "IDN",
      },
    },
    enabled_payments: [
      "credit_card",
      "cimb_clicks",
      "bca_klikbca",
      "bca_klikpay",
      "bri_epay",
      "echannel",
      "permata_va",
      "bca_va",
      "bni_va",
      "bri_va",
      "other_va",
      "gopay",
      "indomaret",
      "danamon_online",
      "akulaku",
      "shopeepay",
      "kredivo",
      "uob_ezpay",
    ],
    credit_card: {
      secure: true,
    },
  };

  try {
    // Buat transaksi
    const transaction = await snap.createTransaction(parameter);

    // Dapatkan token transaksi
    const transactionToken = transaction.token;
    console.log("transactionToken:", transactionToken);

    // Dapatkan URL redirect transaksi
    const transactionRedirectUrl = transaction.redirect_url;
    console.log("transactionRedirectUrl:", transactionRedirectUrl);

    // Kirim token dan URL redirect sebagai respons API
    res.status(200).json({ transactionToken, transactionRedirectUrl });
  } catch (e) {
    console.log("Error occurred:", e.message);
    res.status(500).json({ error: "An error occurred" });
  }
}
