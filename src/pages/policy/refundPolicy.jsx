import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../../styles/Policy.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const RefundPolicy = () => {
    return (
        <>
            <Head>
                <title>Refund Policy | Policy | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Advertise of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, Refund Policy of Physiozine' />
                <meta name="description" content="Read the Refund Policy carefully." />
                <meta property="og:title" content="Refund Policy | Read the Refund Policy carefully." />
                <meta property="og:description" content="Read the Refund Policy carefully." />
                <meta property="og:url" content="https://physiozine.vercel.app/policy/refundPolicy" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Policy - Privacy Policy'} />
            <section className={`${styles?.policy}`}>
                <div className={`${styles?.policyContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading='Kindly Read Our'>Refund Policy</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        At PhysioZine, we are committed to providing high-quality educational content for physiotherapy professionals. We want you to be satisfied with your purchase. Please read our refund policy carefully before making a purchase.
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Magazine Subscriptions:</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        <ul className='mt-2'>
                            <li> Digital subscriptions: No refunds are available for digital magazine subscriptions once access has been granted.</li>
                        </ul>
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Online Courses:</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        <ul className='mt-2'>
                            <li>Full refunds are available within 2 days of purchase if less than 25% of the course content has been accessed.</li>
                            <li>No refunds will be issued after 2 days from the date of purchase or if more than 25% of the course content has been accessed, whichever comes first.</li>
                        </ul>
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}> Live Webinars and Workshops:</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        <ul className='mt-2'>
                            <li>50% refunds are available up to 7 days before the scheduled event.</li>
                            <li>20% refund is available between 7 days and 48 hours before the scheduled event.</li>
                            <li>No refunds are available within 48 hours of the scheduled event.</li>
                        </ul>
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}> Bundle Purchases:</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        <ul className='mt-2'>
                            <li>Refunds for bundle purchases will be assessed on a case-by-case basis, considering the usage of individual components within the bundle.</li>
                        </ul>
                    </p>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        To request a refund, please contact our customer support team at <span className='text-info'>physiozinemagazine@gmail.com</span> with your order number and reason for the refund request. All refunds will be processed using the original payment method.
                    </p>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        PhysioZine reserves the right to modify this refund policy at any time. Any changes will be effective immediately upon posting on our website.
                    </p>

                    <p>Last updated: 20/07/2024</p>
                </div>
            </section >
        </>
    )
}

export default RefundPolicy
