import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/JoinAsInstructor.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const JoinAsInstructor = () => {
    return (
        <>
            <Head>
                <title>Join As Instructor | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Join As Instructor of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOZINE is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiozinemagazine@gmail.com or +91 7984377793." />
                <meta property="og:title" content="Join As Instructor | PhysioZine" />
                <meta property="og:description" content="Promote your brand to targeted physio audiences - Advertise with PhysioZine." />
                <meta property="og:url" content="https://physiozine.co.in/joinAsInstructor" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Join as Editor'} />
            <section className={`${styles?.joinAsInstructor}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Join as Instructor</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            Become an Instructor at PhysioZine: Shape the Future of Online Physiotherapy Education
                        </p>
                        <p>PhysioZine is seeking dedicated physiotherapy professionals to join our team of online instructors. As a leader in digital physiotherapy education, we're looking for experts who are passionate about sharing their knowledge and advancing the field.</p>

                        <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Why Teach with PhysioZine?</h1>
                        <div className={`${styles?.line}`}></div>

                        <ul className='mt-3'>
                            <li>
                                <span>Reach a global audience of aspiring physiotherapists</span>
                            </li>
                            <li>
                                <span>Flexible scheduling to fit your professional life</span>
                            </li>
                            <li>
                                <span>Opportunity to create innovative, cutting-edge course content</span>
                            </li>
                        </ul>

                        <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>What We're Looking For:</h1>
                        <div className={`${styles?.line}`}></div>

                        <ul className='mt-3'>
                            <li>
                                <span>Qualified physiotherapists with a minimum of 5 years teaching experience</span>
                            </li>
                            <li>
                                <span>Excellent communication skills and a passion for teaching</span>
                            </li>
                            <li>
                                <span>Ability to create engaging online content and interactive learning experiences</span>
                            </li>
                            <li>
                                <span>Commitment to staying current with the latest physiotherapy research and techniques</span>
                            </li>
                        </ul>

                        <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>As a PhysioZine instructor, you'll play a crucial role in:</h1>
                        <div className={`${styles?.line}`}></div>

                        <ul className='mt-3'>
                            <li>
                                <span>Developing and delivering high-quality online physiotherapy courses</span>
                            </li>
                            <li>
                                <span>Mentoring students and providing expert guidance</span>
                            </li>
                            <li>
                                <span>Contributing to our growing library of physiotherapy resources</span>
                            </li>
                            <li>
                                <span>Collaborating with a diverse team of healthcare professionals</span>
                            </li>
                        </ul>

                        <p>
                            Join the PhysioZine family and help us revolutionize physiotherapy education. Apply now to start your journey as an online instructor and make a lasting impact on the next generation of physiotherapists!
                        </p>
                        <p>Send your CV/Resume to <span style={{ color: 'var(--primary-color)' }}>physiozinemagazine@gmail.com</span></p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default JoinAsInstructor
