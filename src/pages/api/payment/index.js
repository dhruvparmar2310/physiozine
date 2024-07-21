import axios from "axios";

export default function handler (req, res) {
    try {
        const data = {
            customer_details: {
              customer_id: 'CID' + Date.now(),
              customer_email: "abc@gmail.com",
              customer_phone: "9876543210",
              customer_name: "Dhruv"
            },
            order_meta: {
              payment_methods: "cc,dc,upi",
              notify_url: "https://webhook.site/bb201c66-0f59-468f-aaf0-c19c7b4cb0ed"
            },
            order_id: 'ORID' + Date.now(),
            order_amount: 1,
            order_currency: "INR",
          };
          
          const config = {
            method: 'post',
            url: 'https://api.cashfree.com/pg/orders',
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
              console.log(response.data);
              
              return res.status(200).send(response.data.payment_session_id)
            })
            .catch(function (error) {
              console.log('%cAxios Error ::', 'color: red',error);
            });
      } catch (err) {
        res.status(500).json({ error: 'failed to load members data' })
      }
}