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
                setSessionId(res.data)
                res.data && handlePayment()
            })
            .catch((err) => {
                console.log('%c[Error]: Session ID :: ', 'color: red', err)
            })
    }
    const handlePayment = () => {
        let checkoutOptions = {
            paymentSessionId: sessionId,
            returnUrl: process.env.DEPLY + "/api/payment-status/{order_id}",
        }
        cashfree.checkout(checkoutOptions).then(function (result) {
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
        </div>
    )
}

export default PaymentForm
