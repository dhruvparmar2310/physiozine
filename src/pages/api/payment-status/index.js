import axios from "axios";

export default function handler (req, res) {
    console.log('payment status :: ', req);
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
                console.log('get order data :: ', response.data);

                if(response.data.order_status === "PAID"){
                    return res.redirect(`https://physiotrends-stag-git-stag-dhan-parmars-projects.vercel.app`)
                } else if (response.data.order_status = "ACTIVE"){
                    return res.redirect(`https://physiotrends-stag-git-stag-dhan-parmars-projects.vercel.app/${response.data.payment_session_id}`)
                } else{
                    return res.redirect(`https://physiotrends-stag-git-stag-dhan-parmars-projects.vercel.app/failure`)
                }
            //   return res.status(200).send(response.data.payment_session_id)
            })
            .catch(function (error) {
              console.log('%cAxios Error ::', 'color: red',error);
            });
      } catch (err) {
        res.status(500).json({ error: 'failed to load order data' })
      }
}