import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/AcademicPartner.module.scss'
import Image from 'next/image'
import { Abril_Fatface, Comfortaa, Ubuntu } from 'next/font/google'
import { motion, useAnimation } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery'
import { FaRupeeSign } from 'react-icons/fa'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { IoInformationCircle } from 'react-icons/io5'
import { FaCircleCheck } from 'react-icons/fa6'
import { Controller, useForm } from 'react-hook-form'
import { cashfree, setCookie } from '@/utils'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const abrilFatface = Abril_Fatface({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const AcademicPartner = () => {
    const width = useMediaQuery('(max-width: 576px)')
    const [modal, setModal] = useState({ open: false, type: '' })
    const [sessionID, setSessionID] = useState(null)
    let version = cashfree?.version()
    const router = useRouter()

    const { control, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm({
        mode: 'all',
    })

    const handleBuyNowBtn = (type) => {
        switch (type) {
            case 'basic':
                setModal({ open: true, type: 'basic' });
                break;
            case 'professional':
                setModal({ open: true, type: 'professional' });
                break;
            case 'premium':
                setModal({ open: true, type: 'premium' });
                break;
            default:
                console.log('Invalid type')
                break;
        }
    }

    const handleClose = () => {
        setModal({ open: false, type: '' })
        reset({})
    }

    const onSubmit = (data) => {
        const formDataForSheet = {
            sCollegeName: data?.sCollegeName,
            sAddress: data?.sAddress,
            sEmailID: data?.sEmailID,
            sMobileNo: data?.sMobileNo,
            subscription_plan: modal?.type
        }

        setCookie('subscriptionData', JSON.stringify(formDataForSheet), 1)
        localStorage.setItem('subscriptionData', JSON.stringify(formDataForSheet))
        router.push('/checkout?type=subscription')
    }

    return (
        <>
            <Head>
                <title>Academic Partner | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Academic Partners of PhysioTrends, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiotrendsmagazine@gmail.com or +91 7984377793." />
                <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="Empowering Colleges and Students through Publication and Recognition - Physiotrends" />
                <meta property="og:url" content="https://physiotrends.vercel.app/academicPartner" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <section className={`${styles?.academicPartner}`}>
                <div className={`${styles?.innerContent}`}>
                    <div className={`${styles?.innerText}`}>
                        <h1 className={ubuntu?.className}>Academic Partner Program</h1>
                        <p className={ubuntu?.className}>Empowering Colleges and Students through Publication and Recognition</p>
                    </div>
                </div>

                <div className={`${styles?.academicContent} container my-5`}>
                    <h1 className={`${ubuntu.className} text-center`}>Coming Soon</h1>
                </div>
                {/* <div className={`${styles?.academicContent} container`}>
                    <p className={`${styles?.introduction} ${ubuntu?.className}`}>
                        Welcome to Physiotrends Digital Magazine’s Academic Partner Program! As a trusted resource in the field of physiotherapy, our digital magazine is dedicated to supporting educational institutions and their students. This program offers exclusive subscription plans that encourage knowledge sharing, promote student achievements, and build a strong community of future healthcare professionals. Join us in fostering academic excellence through accessible publication opportunities and gain recognition on a national platform!
                    </p>
                    <p>
                        Before buying any plan, Please read all the <Link href='/terms-and-conditions' target='_blank'>Terms & Conditions</Link> of the Company.
                    </p>

                    <div className={`${styles?.subscriptionCards} container mt-5`}>
                        <div className={`${styles?.subscriptionCard}`}>
                            <h2 className={`${styles?.planType} ${ubuntu?.className}`}>Basic</h2>
                            <h2 className={`${styles?.planPrice} ${ubuntu?.className}`}><FaRupeeSign /> 2000 <span>/ Year</span></h2>
                            <Button type='button' onClick={() => handleBuyNowBtn('basic')}>Buy Now</Button>

                            <p className={`${styles?.cardInfo} mt-3`}>
                                <span className='me-1'><IoInformationCircle /></span>
                                Ideal for colleges looking to introduce students to publishing opportunities in the field of physiotherapy.
                            </p>
                            <div className={`${styles?.planBenefits}`}>
                                <ul>
                                    <li>
                                        <span><FaCircleCheck /></span> <span>Free Publication</span>
                                        <p>
                                            Each issue of Physiotrends Digital Magazine will include one free student publication from your institution, offering visibility to emerging talent in physiotherapy.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${styles?.subscriptionCard}`}>
                            <h2 className={`${styles?.planType} ${ubuntu?.className}`}>Professional</h2>
                            <h2 className={`${styles?.planPrice} ${ubuntu?.className}`}><FaRupeeSign /> 5000 <span>/ Year</span></h2>
                            <Button type='button' onClick={() => handleBuyNowBtn('professional')}>Buy Now</Button>

                            <p className={`${styles?.cardInfo} mt-3`}>
                                <span className='me-1'><IoInformationCircle /></span>
                                Designed for institutions eager to showcase academic achievements with higher visibility and recognition.
                            </p>
                            <div className={`${styles?.planBenefits}`}>
                                <ul>
                                    <li>
                                        <span><FaCircleCheck /></span> <span>Unlimited Free Publications</span>
                                        <p>
                                            Publish an unlimited number of articles by students or faculty in every edition of the magazine. Promote thought leadership and innovative research from your college on a larger scale.
                                        </p>
                                    </li>
                                    <li>
                                        <span><FaCircleCheck /></span> <span>Fast-Track Publication</span>
                                        <p>
                                            Submissions from Professional Plan members receive priority in our review process, ensuring faster publication and timely sharing of recent research.
                                        </p>
                                    </li>
                                    <li>
                                        <span><FaCircleCheck /></span> <span>Ads of College Achievements</span>
                                        <p>
                                            Share milestones, awards, and significant achievements of students and faculty in our digital magazine. This feature allows your institution to showcase success stories on a respected platform, reaching an audience that values academic accomplishments.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${styles?.subscriptionCard}`}>
                            <h2 className={`${styles?.planType} ${ubuntu?.className}`}>Premium</h2>
                            <h2 className={`${styles?.planPrice} ${ubuntu?.className}`}><FaRupeeSign /> 6000 <span>/ Year</span></h2>
                            <Button type='button' onClick={() => handleBuyNowBtn('premium')}>Buy Now</Button>

                            <p className={`${styles?.cardInfo} mt-3`}>
                                <span className='me-1'><IoInformationCircle /></span>
                                Our most comprehensive plan, offering maximum exposure, prestige, and recognition for your college.
                            </p>
                            <div className={`${styles?.planBenefits}`}>
                                <ul>
                                    <li>
                                        <span><FaCircleCheck /></span> <span>Unlimited Free Publications</span>
                                        <p>
                                            As with the Professional Plan, publish unlimited articles from students and faculty in each magazine edition.
                                        </p>
                                    </li>
                                    <li>
                                        <span><FaCircleCheck /></span> <span>Fast-Track Publication</span>
                                        <p>
                                            Guaranteed priority review for faster release and wider reach of your research contributions.
                                        </p>
                                    </li>
                                    <li>
                                        <span><FaCircleCheck /></span> <span>Ads of College Achievements</span>
                                        <p>
                                            Highlight student and faculty accomplishments on a national stage, drawing attention to your college's commitment to academic excellence.
                                        </p>
                                    </li>
                                    <li>
                                        <span><FaCircleCheck /></span> <span>Academic Excellence Award</span>
                                        <p>
                                            Based on the volume of publications from your college, you’ll be in the race for our prestigious Academic Excellence Award. This award is reserved for institutions that demonstrate a commitment to thought leadership and publication excellence.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h3 className={`${ubuntu?.className} mt-5`}>Why Join the Academic Partner Program?</h3>
                    <div>
                        <ul>
                            <li>
                                <p className={`${ubuntu?.className} mb-0`}>
                                    <strong>Boost Visibility</strong>: Share your college's achievements and your students' success with a professional audience.
                                </p>
                            </li>
                            <li>
                                <p className={`${ubuntu?.className} mb-0`}>
                                    <strong>Encourage Student Engagement</strong>: Motivate students to publish their work and gain confidence in their research abilities.
                                </p>
                            </li>
                            <li>
                                <p className={`${ubuntu?.className} mb-0`}>
                                    <strong>Gain Recognition</strong>: Compete for our Academic Excellence Award, reserved for the institution with the highest number of contributions.
                                </p>
                            </li>
                        </ul>

                        <p>
                            <em>
                                Join the Physiotrends Digital Magazine Academic Partner Program and empower your students through publication and recognition in the field of physiotherapy!
                            </em>
                        </p>
                    </div>
                </div> */}
            </section>

            {/* <Modal show={modal?.open} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Subscription Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>College Name <span className='text-danger'>*</span></Form.Label>
                            <Controller
                                name='sCollegeName'
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Name is required' }}
                                render={({ field }) => (
                                    <Form.Control {...field} placeholder="Enter College Name" />
                                )}
                            />
                            {errors?.sCollegeName && (
                                <span className='d-block text-danger text-end'>{errors.sCollegeName.message}</span>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email Address <span className='text-danger'>*</span></Form.Label>
                            <Controller
                                name="sEmailID"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Email field is required', pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Please enter a valid email address',
                                    },
                                }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control {...field} placeholder="eg: example@gmail.com" autoCapitalize="none" />
                                    </>
                                )}
                            />
                            {errors?.sEmailID &&
                                <span className='d-block text-danger text-end'>{errors?.sEmailID?.message}</span>
                            }
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mobile No. <span className='text-danger'>*</span></Form.Label>
                            <Controller
                                name="sMobileNo"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Mobile number is required', pattern: { value: /^\d{10}$/, message: 'Invalid mobile number' } }}
                                render={({ field }) => (
                                    <>
                                        <Form.Control
                                            {...field}
                                            placeholder="Enter mobile number"
                                            maxLength={10}
                                        />
                                    </>
                                )}
                            />
                            {errors?.sMobileNo &&
                                <span className='d-block text-danger text-end'>{errors?.sMobileNo?.message}</span>
                            }
                        </Form.Group>

                        <Button
                            type='submit'
                            className='me-2'
                        // disabled={isLoading}
                        >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal> */}
        </>
    )
}

export default AcademicPartner
