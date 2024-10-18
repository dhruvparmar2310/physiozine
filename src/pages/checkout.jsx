import React, { useEffect, useState } from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import styles from '@/styles/Checkout.module.scss'
import { Ubuntu } from 'next/font/google'
import Head from 'next/head'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import { cashfree, getCookie, removeCookie } from '@/utils'
import axios from 'axios'
import { useRouter } from 'next/router'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'], style: ['normal'] })
const Checkout = () => {
    const router = useRouter()
    const [articleData, setArticleData] = useState(null)
    const [sessionID, setSessionID] = useState(null)
    const { orderID, status } = router.query
    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState({ type: '', data: '' });
    let version = cashfree?.version()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedArticleData = localStorage.getItem('articleData') || getCookie('articleData')
            setArticleData(savedArticleData ? JSON.parse(savedArticleData) : null);
        }
    }, [])

    useEffect(() => {
        if (articleData !== null) {
            // Prepare form data for submission
            const formDataForSheet = {
                // sPaperTitle: articleData?.sPaperTitle,
                customer_email: articleData?.sEmailID,
                customer_phone: articleData?.sMobileNo,
            };

            axios.post('api/payment', { version, ...formDataForSheet })
                .then(async (res) => {
                    if (res.status === 200) {
                        setSessionID(res.data)
                    }
                })
                .catch((err) => {
                    console.log('%c[Error]: Session ID :: ', 'color: red', err)
                })
        }
    }, [articleData])

    const handlePaymentBtn = async () => {
        if (sessionID !== null) {
            let checkoutOptions = {
                paymentSessionId: sessionID,
                // returnUrl: 'https://t8j4snd7-3000.inc1.devtunnels.ms' + "/api/payment-status/{order_id}",
                returnUrl: 'https://physiotrends.vercel.app' + "/checkout?orderID={order_id}",
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
    }

    useEffect(() => {
        if (orderID !== undefined) {
            setMsg({ type: 'pending', data: 'Your payment was successful. To complete your submission, please submit your article.' })
        }
    }, [orderID])

    const handleSubmit = async () => {
        setIsLoading(true)
        setMsg({ type: 'pending', data: 'Your article is being uploaded. Please do not refresh the page or close the tab.' })
        try {
            const serializeAuthors = (authors) => {
                return authors.map((author, index) => {
                    return `Author ${index + 1}: Name: ${author.name}, Designation: ${author.designation}, Mobile: ${author.mobileNumber}`;
                }).join(' | ');
            };

            // Prepare form data for submission
            const formDataForSheet = {
                "Paper Title": articleData.sPaperTitle,
                EmailID: articleData.sEmailID,
                "Mobile No.": articleData.sMobileNo,
                City: articleData.sCity,
                Country: articleData.sCountry,
                "Author Counts": articleData.sAuthorCount?.value,
                Authors: serializeAuthors(articleData.authors || []),
                "Author Form File URL": articleData?.fAuthorFormFileBase64,
                "File URL": articleData?.fArticleFileBase64,
            };

            // Post to backend
            const driveResponse = await fetch('/api/upload-to-drive', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formDataForSheet }),
            });

            const driveData = await driveResponse.json();

            // Submit the updated form data (with Drive URLs) to Google Sheets
            const sheetResponse = await fetch('/api/submit-to-sheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(driveData.formDataForSheet),
            })

            if (!sheetResponse.ok) {
                setIsLoading(false);
                throw new Error('Failed to submit to Google Sheets');
            } else {
                setIsLoading(false);
                localStorage.removeItem('articleData')
                removeCookie('articleData')
                setMsg({ type: 'submitted', data: 'Your article has been submitted successfully.' })
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    }
    return (
        <>
            <Head>
                <title>Checkout Form | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Submission Form | PhysioTrends'} link={'/submissionForm'} current={'Checkout'} />
            <section className={`${styles?.checkout}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Proceed to Payment</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles?.notes} ${ubuntu?.className}`}>
                        Please review your article details below and confirm the payment details before proceeding to checkout. If you have any questions, feel free to reach out to our customer support team at <span style={{ color: 'var(--primary-color)' }}>physiotrendsmagazine@gmail.com</span>.
                    </p>

                    <div>
                        <Row className={styles?.customerDetails}>
                            <Col lg={4} md={6} sm={12}>
                                <div className={`${styles?.dataTitle} ${ubuntu?.className}`}>Article Name</div>
                                <div className={`${styles?.dataValue} ${ubuntu?.className}`}>{articleData?.sPaperTitle || '-'}</div>
                            </Col>
                            <Col lg={4} md={6} sm={12} className='mt-3 mt-lg-0 mt-md-0'>
                                <div className={`${styles?.dataTitle} ${ubuntu?.className}`}>Email ID</div>
                                <div className={`${styles?.dataValue} ${ubuntu?.className}`}>{articleData?.sEmailID || '-'}</div>
                            </Col>
                            <Col lg={4} md={6} sm={12} className='mt-3 mt-lg-0 '>
                                <div className={`${styles?.dataTitle} ${ubuntu?.className}`}>Mobile No</div>
                                <div className={`${styles?.dataValue} ${ubuntu?.className}`}>{articleData?.sMobileNo || '-'}</div>
                            </Col>
                        </Row>
                    </div>

                    {orderID ?
                        <Button
                            type='button'
                            disabled={isLoading}
                            onClick={() => handleSubmit()}
                            className='my-2'
                        >
                            Submit Article {isLoading && <Spinner animation='border' size='sm' />}
                        </Button>
                        : <Button
                            type='button'
                            disabled={sessionID === null}
                            onClick={() => handlePaymentBtn()}
                            className='my-2'
                        >
                            Proceed to Pay
                        </Button>
                    }

                    {msg?.data !== '' && <div className="mt-2">
                        <span className={msg.type === 'submitted' ? 'text-warning' : 'text-danger'}>{msg?.data}</span>
                    </div>}
                </div>
            </section >
        </>
    )
}

export default Checkout