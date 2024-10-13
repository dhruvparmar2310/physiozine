import axios from "axios";

export default function handler (req, res) {
    const {
        version,
        sPaperTitle: PaperTitle,
        customer_email: EmailID,
        customer_phone: MobileNo,
        City,
        Country
    } = req.body;

    try {
        const data = {
            customer_details: {
              customer_id: 'CID' + Date.now(),
              customer_email: EmailID,
              customer_phone: MobileNo,
              customer_name:  PaperTitle
            },
            order_meta: {
              payment_methods: "cc,dc,upi",
              notify_url: "https://webhook.site/99f719b8-0357-42a2-ad27-eea33f55f258",
            },
            order_id: 'ORID' + Date.now(),
            order_amount: 500,
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