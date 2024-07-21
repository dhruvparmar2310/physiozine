import { cashfree } from '@/utils'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

const PaymentForm = () => {
    const [sessionId, setSessionId] = useState()
    let version = cashfree?.version()

    const getSessionId = (e) => {
        e.preventDefault()
        axios.post('api/payment', { version })
            .then((res) => {
                console.log('res :>> ', res.data);
                if (res.status === 200) {
                    setSessionId(res.data)
                    // setTimeout(() => {
                    //     handlePayment()
                    // }, 2000)
                }
            })
            .catch((err) => {
                console.log('%c[Error]: Session ID :: ', 'color: red', err)
            })
    }
    const handlePayment = async (e) => {
        e.preventDefault()
        console.log('sessionId :>> ', sessionId);
        let checkoutOptions = {
            paymentSessionId: await sessionId,
            // returnUrl: 'https://t8j4snd7-3000.inc1.devtunnels.ms' + "/api/payment-status/{order_id}",
            returnUrl: 'https://physiotrends-stag.vercel.app' + "/api/payment-status/{order_id}",
        }
        cashfree.checkout(checkoutOptions).then(function (result) {
            console.log('result :>> ', result);
            if (result.error) {
                alert(result.error.message)
            }
            if (result.redirect) {
                console.log("Redirection", result)
            }
        });
    }
    return (
        <div>
            <Button onClick={(e) => getSessionId(e)}>Get Session ID</Button>
            <h1>Session ID: {sessionId}</h1>
            <Button onClick={(e) => handlePayment(e)}>Pay Now</Button>
        </div>
    )
}

export default PaymentForm
