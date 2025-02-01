import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Policy.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const BeFeatured = () => {
    return (
        <>
            <Head>
                <title>Be Featured | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Advertise of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, Be Featured of Physiozine' />
                <meta name="description" content="Read the Be Featured content carefully." />
                <meta property="og:title" content="Be Featured | PhysioZine" />
                <meta property="og:description" content="Read the Be Featured content carefully." />
                <meta property="og:url" content="https://physiozine.vercel.app/policy/be-featured" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Be Featured'} />
            <section className={`${styles?.policy}`}>
                <div className={`${styles?.policyContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Be Featured in PhysioZine Magazine Cover</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        Do you want to be in the spotlight? Physiozine Magazine offers you an exclusive opportunity to be our Cover Story a chance to showcase your work, achievements, and vision to a global audience.
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Why Be Our Cover Story?</h3>
                    <div className={`${styles?.line}`}></div>

                    <ol className='mt-2'>
                        <li><strong>Gain Visibility</strong>: Feature on the cover of a magazine read by physiotherapy professionals, students, and enthusiasts worldwide.</li>

                        <li><strong>Highlight Your Journey</strong>: Share your inspiring story, innovations, and contributions to the field of physiotherapy and healthcare.</li>

                        <li><strong>Build Your Personal Brand</strong>: Enhance your reputation and recognition as a thought leader.</li>
                    </ol>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Who Can Be Featured?</h3>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        We invite individuals and organizations with:

                        <ul className='mt-2'>
                            <li>Pioneering contributions to physiotherapy, rehabilitation, healthcare or fitness.</li>
                            <li>Inspiring personal journeys and professional milestones.</li>
                            <li>Innovations in technology, therapy, or education within the healthcare industry.</li>
                            <li>Stories that can inspire and educate the physiotherapy community.</li>
                        </ul>
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>How to Apply?</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        To apply for the Cover Story, please provide:

                        <ul className='mt-2'>
                            <li>Your Name / Organization Name</li>
                            <li>Professional Background and Achievements</li>
                            <li>A Brief on Your Story or Topic</li>
                            <li>High-Resolution Photographs</li>
                            <li>Contact Information</li>
                        </ul>

                        Email your submission to: <span className='text-info'>physiozinemagazine@gmail.com</span>
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Rates for Featuring as Our Cover Story</h3>
                    <div className={`${styles?.line}`}></div>
                    <ol className='mt-2'>
                        <li><strong>For Individuals/Companies in India</strong>: ₹10,000</li>
                        <li><strong>For International Individuals/Companies</strong>: $300</li>
                    </ol>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Make Your Mark</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        Don’t miss this exclusive opportunity to be featured on the cover of Physiozine Magazine. Let your story inspire and resonate with thousands of readers worldwide.
                    </p>
                </div>
            </section>
        </>
    )
}

export default BeFeatured