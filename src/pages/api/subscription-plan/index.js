import axios from "axios";

export default function handler (req, res) {
    const {
        customer_name, customer_email, customer_phone, subscription_plan
    } = req.body;

    try {
        const data = {
            customer_details: {
              customer_id: 'CID' + Date.now(),
              customer_name,
              customer_email,
              customer_phone,
              subscription_plan
            },
            order_meta: {
              payment_methods: "cc,dc,upi",
              // notify_url: "https://webhook.site/99f719b8-0357-42a2-ad27-eea33f55f258",
              notify_url: "https://webhook.site/b9d5c83a-8405-4ca4-a7ae-b9932346850d",
            },
            order_id: 'ORID' + Date.now(),
            order_amount: subscription_plan === 'basic' ? 2000 : subscription_plan === 'professional' ? 5000 : subscription_plan === 'premium' && 6000,
            order_currency: "INR",
          };

          const config = {
            method: 'POST',
            // url: 'https://sandbox.cashfree.com/pg/orders', // test
            url: 'https://api.cashfree.com/pg/orders', // prod
            headers: { 
              'accept': 'application/json', 
              'content-type': 'application/json', 
              'x-api-version': '2023-08-01', 
              'x-client-id': process.env.CASHFEE_API_KEY, 
              'x-client-secret': process.env.CASHFEE_SECKRET_KEY
            },
            data: data
          };
          
          axios.request(config)
            .then(function (response) {
              return res.status(200).send(response.data.payment_session_id)
            })
            .catch(function (error) {
              console.log('%cAxios Error ::', 'color: red',error);
            });
      } catch (err) {
        res.status(500).send({ message: 'failed to load session id' })
      }
}