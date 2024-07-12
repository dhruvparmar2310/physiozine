import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/JoinAsInstructor.module.scss'

const JoinAsInstructor = () => {
    return (
        <>
            <Head>
                <title>Join As Instructor | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Advertise of PhysioTrends, PhysioTrends Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing ISSN Certified E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="Promote your brand to targeted physio audiences - Advertise with Physiotrends." />
                <meta property="og:url" content="https://physiotrends.vercel.app/advertise" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Join as Editor'} />
            <section className={`${styles?.joinAsInstructor}`}>
                <div className={`${styles?.innerContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Join as Instructor</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            Become an Instructor at PhysioTrends: Shape the Future of Online Physiotherapy Education
                        </p>
                        <p>PhysioTrends is seeking dedicated physiotherapy professionals to join our team of online instructors. As a leader in digital physiotherapy education, we're looking for experts who are passionate about sharing their knowledge and advancing the field.</p>

                        <h1 className={`sectionTitle ${styles?.sectionTitle}`}>Why Teach with PhysioTrends?</h1>
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

                        <h1 className={`sectionTitle ${styles?.sectionTitle}`}>What We're Looking For:</h1>
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

                        <h1 className={`sectionTitle ${styles?.sectionTitle}`}>As a PhysioTrends instructor, you'll play a crucial role in:</h1>
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
                            Join the PhysioTrends family and help us revolutionize physiotherapy education. Apply now to start your journey as an online instructor and make a lasting impact on the next generation of physiotherapists!
                        </p>
                        <p>Send your CV/Resume to <span style={{ color: 'var(--primary-color)' }}>physiotrendsmagazine@gmail.com</span></p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default JoinAsInstructor
