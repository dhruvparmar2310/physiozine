import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/AboutUs.module.scss'
import { Ubuntu } from 'next/font/google'
import FounderImg from '../../public/assets/img/Dr.DarshanParmar.jpg'
import Image from 'next/image'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const AboutUs = () => {
    const serviceCard = ['Physiotherapy Magazine', 'International Journals', 'Webinars', 'Workshops', 'Online Courses', 'Conference Collab']
    return (
        <>
            <Head>
                <title>About Us | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Support PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, International Physiotherapy Journal, Online Physiotherapy Courses, Physiotherapy Webinars, Physiotherapy Workshops, Evidence Based Physiotherapy, Physiotherapy Research, Physiotherapy Education, Global Physiotherapy Community, Indian Physiotherapy Magazine, Physio Articles, Physiotherapy Learning Platform, About PhysioZine, What is Physiozine' />
                <meta name="description" content="PhysioZine is a global physiotherapy platform offering a professional physiotherapy magazine, international journals, webinars, workshops, and online courses. We empower physiotherapy students, clinicians, and researchers through evidence-based education and global knowledge sharing." />
                <meta property="og:title" content="About PhysioZine | Global Physiotherapy Magazine, Journals & Online Courses" />
                <meta property="og:description" content="PhysioZine is a leading global physiotherapy platform providing physiotherapy magazines, international journals, webinars, workshops, and online courses for students, clinicians, and researchers worldwide." />
                <meta property="og:url" content="https://physiozine.co.in/aboutUs" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current='About Us' />
            <section className={`${styles?.aboutUs}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>About PhysioZine</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            Physiozine is a global leading physiotherapy platform dedicated to advancing knowledge, research, and professional growth in the field of Physiotherapy. We aim to bridge the gap between clinical practice, academic research, and continuous learning by providing reliable, high-quality, and accessible resources for physiotherapists worldwide
                        </p>
                        <p>
                            At Physiozine, we believe that evidence-based practice and lifelong learning are the foundation of modern physiotherapy. Our platform is designed to support students, clinicians, academicians, and researchers by offering a wide range of educational and professional opportunities under one umbrella.
                        </p>
                    </div>

                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>What We Do</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <div className={styles?.serviceGrid}>
                            {serviceCard?.map((service, _) => {
                                return (
                                    <div className={`${styles?.serviceCard}`} key={service}>
                                        <h1 className={ubuntu?.className}>{service}</h1>
                                    </div>
                                )
                            })}
                        </div>

                        <div className={styles?.missionCards}>
                            <div className={styles?.missionCard}>
                                <h1 className={ubuntu?.className}>Our Vision</h1>
                                <p>
                                    To become the most trusted global platform for physiotherapy education, research, and professional development, empowering physiotherapists to deliver better patient care through knowledge and innovation.
                                </p>
                            </div>
                            <div className={styles?.missionCard}>
                                <h1 className={ubuntu?.className}>Our Mission</h1>
                                <div>
                                    <ul>
                                        <li>To promote evidence-based physiotherapy practice</li>
                                        <li>To support research and academic excellence</li>
                                        <li>To provide accessible, high-quality learning opportunities</li>
                                        <li>To connect physiotherapy professionals globally</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Founder's Message</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className={`mt-3 ${styles?.founderMessage}`}>
                        <div className={styles?.imgContent}>
                            <Image
                                src={FounderImg}
                                alt='Dr. Darshan Parmar'
                                priority
                                quality={100}
                            />
                        </div>
                        <div className={styles?.founderDesc}>
                            <h1 className={ubuntu?.className}>Dr. Darshan Parmar</h1>
                            <h5 className={ubuntu?.className}>Founder – Physiozine</h5>
                            <div className={`${styles?.line} my-3`}></div>
                            <p>
                                Dr. Darshan Parmar is a passionate physiotherapy professional, academician, and researcher with a strong vision to elevate the standards of physiotherapy education and practice globally. With extensive experience in clinical practice, research, and professional training, he founded Physiozine to create a unified platform that supports learning, innovation, and collaboration within the physiotherapy community.
                            </p>
                            <p>
                                Dr. Parmar strongly believes that continuous education and research-driven practice are essential for the growth of physiotherapy as a profession. Through Physiozine, his goal is to provide physiotherapists with global exposure, access to quality scientific content, and opportunities for skill enhancement beyond traditional boundaries.
                            </p>
                            <p>
                                Under his leadership, Physiozine has grown into a respected international platform connecting students, clinicians, educators, and researchers from across the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
