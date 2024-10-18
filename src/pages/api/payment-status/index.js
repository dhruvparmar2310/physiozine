
import axios from "axios";

export default function handler (req, res) {
    const order_id = req.params.order_id
    try {
        // res.status(200).json({ members })
        const options ={
            method: 'GET',
            url: `https://api.cashfree.com/pg/orders/${order_id}`,
            headers: {
                accept: 'application/json',
                'x-api-version': '2022-09-01',
                'x-client-id': process.env.CASHFEE_API_KEY,
                'x-client-secret': process.env.CASHFEE_SECKRET_KEY
            }
        }

        axios.request(options)
            .then(function (response) {
                if(response.data.order_status === "PAID"){
                    res.redirect(302, `https://physiotrends.vercel.app/checkout?data=${encodeURIComponent(JSON.stringify(orderData))}&status=success&message=Payment Successful`);
                } else if (response.data.order_status = "ACTIVE"){
                    res.redirect(302, `https://physiotrends.vercel.app/checkout?orderId=${orderData.payment_session_id}&status=active&message=Payment In Process`);
                } else{
                    res.redirect(302, `https://physiotrends.vercel.app/checkout?status=failure&message=Payment Failed`);
                }
            })
            .catch(function (error) {
              console.log('%cAxios Error ::', 'color: red',error);
            });
      } catch (err) {
        res.status(500).json({ error: 'failed to load order data' })
      }
}