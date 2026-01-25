import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Policy.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const CallForInterview = () => {
    return (
        <>
            <Head>
                <title>Call for Interview | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Advertise of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, Call for Interview of Physiozine' />
                <meta name="description" content="Are you a visionary in the field of physiotherapy, rehabilitation, or fitness? Do you have groundbreaking ideas, inspiring experiences, or expert insights to share? Physiozine Magazine invites you to be a part of our exclusive interview series." />
                <meta property="og:title" content="Call for Interview | PhysioZine" />
                <meta property="og:description" content="Are you a visionary in the field of physiotherapy, rehabilitation, or fitness? Do you have groundbreaking ideas, inspiring experiences, or expert insights to share? Physiozine Magazine invites you to be a part of our exclusive interview series." />
                <meta property="og:url" content="https://physiozine.co.in/policy/call-for-interview" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Call for Interview'} />
            <section className={`${styles?.policy}`}>
                <div className={`${styles?.policyContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Call For Interview</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        Are you a visionary in the field of physiotherapy, rehabilitation, or fitness? Do you have groundbreaking ideas, inspiring experiences, or expert insights to share? Physiozine Magazine invites you to be a part of our exclusive interview series.
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Why Join Us?</h3>
                    <div className={`${styles?.line}`}></div>

                    <ol className='mt-2'>
                        <li><strong>Inspire a Global Audience</strong>: Share your journey, innovations, and expertise with physiotherapy professionals and enthusiasts worldwide.</li>

                        <li><strong>Showcase Your Work</strong>: Gain recognition for your contributions to the healthcare and fitness industry.</li>

                        <li><strong>Collaborate and Connect</strong>: Build networks with industry leaders, organizations, and like-minded professionals.</li>
                    </ol>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Who Can Apply?</h3>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        We are looking for:

                        <ul className='mt-2'>
                            <li>Renowned physiotherapists and healthcare professionals.</li>
                            <li>Innovators in physiotherapy techniques, equipment, or technology.</li>
                            <li>Authors of notable research or publications in the field.</li>
                            <li>Experts in fitness, rehabilitation, and wellness.</li>
                            <li>Educators and trainers advancing physiotherapy education.</li>
                        </ul>
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>How to Apply?</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        Submit your application with the following details:

                        <ul className='mt-2'>
                            <li>Full Name</li>
                            <li>Professional Background</li>
                            <li>Field of Expertise</li>
                            <li>Contact Information</li>
                            <li>Reason for Interview (Highlight key topics you wish to discuss.)</li>
                            <li>Attach your CV</li>
                        </ul>

                        Email your application to: <span className='text-info'>physiozinemagazine@gmail.com</span>
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Join Us in Shaping the Future of Physiotherapy</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        Your insights can make a difference. Let’s collaborate to spread knowledge, inspire innovation, and contribute to the growth of the physiotherapy community.
                    </p>
                </div>
            </section>
        </>
    )
}

export default CallForInterview