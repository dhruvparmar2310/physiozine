import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../../styles/Interview.module.scss'
import { Abril_Fatface, Comfortaa, Ubuntu } from 'next/font/google'
import { motion, useAnimation } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import kpImage from '../../../public/assets/img/interview/kunal-patel.JPG'
import wnImage from '../../../public/assets/img/interview/waqar-naqvi.JPG'
import brdImage from '../../../public/assets/img/interview/Bhavna-Rajesh- Devnani.JPG'
import rpImage from '../../../public/assets/img/interview/rachna-patel.JPG'
import msImage from '../../../public/assets/img/interview/DrMeghaSheth.jpg'
import rupamSarkarImage from '../../../public/assets/img/interview/DrRupamSarkar.jpg'
import { Button, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const Interview = () => {
    const router = useRouter()
    const width = useMediaQuery('(max-width: 576px)')

    return (
        <>
            <Head>
                <title>Interview | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Interview of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOZINE is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiozinemagazine@gmail.com or +91 7984377793." />
                <meta property="og:title" content="Interview with fastest growing Physiotherapy Network at PhysioZine" />
                <meta property="og:description" content="Promote your brand to targeted physio audiences - Interview with PhysioZine." />
                <meta property="og:url" content="https://physiozine.vercel.app/Interview" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Interview'} />
            <section className={`${styles?.interview} container`}>
                <div className={`${styles?.interviewContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading="">Interview with Experts</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className={styles?.innerContent}>
                        <Row>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <motion.div
                                    className={`${styles?.interviewCard} ${ubuntu?.className}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <div className={styles?.cardTop}>
                                        <Image src={wnImage} alt='Dr. Waqar Naqvi' quality={100} className='img-fluid' />
                                    </div>
                                    <div className={`${styles?.cardBody}`}>
                                        <p className={`${styles?.interviewerName}`}>Dr. Waqar Naqvi</p>
                                        <p className={`${styles?.cardTitle}`}>Artificial Intelligence (AI) in Physiotherapy</p>
                                        <Button type='button' className={`${styles?.readMoreBtn}`} onClick={() => router.push('/interview/Dr. Waqar Naqvi')}>Read Interview</Button>
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <motion.div
                                    className={`${styles?.interviewCard} ${ubuntu?.className}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <div className={styles?.cardTop}>
                                        <Image src={kpImage} alt='Kunal Patel' quality={100} className='img-fluid' />
                                    </div>
                                    <div className={`${styles?.cardBody}`}>
                                        <p className={`${styles?.interviewerName}`}>Kunal Patel</p>
                                        <p className={`${styles?.cardTitle}`}>From Setback to Success: Kunal Patel's Inspirational Journey in Football </p>
                                        <Button className={`${styles?.readMoreBtn}`} onClick={() => router.push('/interview/Kunal Patel')}>Read Interview</Button>
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <motion.div
                                    className={`${styles?.interviewCard} ${ubuntu?.className}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <div className={styles?.cardTop}>
                                        <Image src={brdImage} alt='Bhavna Rajesh Devnani' quality={100} className='img-fluid' />
                                    </div>
                                    <div className={`${styles?.cardBody}`}>
                                        <p className={`${styles?.interviewerName}`}>Bhavna Rajesh Devnani</p>
                                        <p className={`${styles?.cardTitle}`}>Let’s Talk About My Journey: A Path from India to Global Healthcare</p>
                                        <Button className={`${styles?.readMoreBtn}`} onClick={() => router.push('/interview/Bhavna Rajesh Devnani')}>Read Interview</Button>
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <motion.div
                                    className={`${styles?.interviewCard} ${ubuntu?.className}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <div className={styles?.cardTop}>
                                        <Image src={rpImage} alt='Dr. Rachana Patel' quality={100} className='img-fluid' />
                                    </div>
                                    <div className={`${styles?.cardBody}`}>
                                        <p className={`${styles?.interviewerName}`}>Dr. Rachana Patel</p>
                                        <p className={`${styles?.cardTitle}`}>Journey of Para Badminton Player</p>
                                        <Button className={`${styles?.readMoreBtn}`} onClick={() => router.push('/interview/Dr. Rachana Patel')}>Read Interview</Button>
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <motion.div
                                    className={`${styles?.interviewCard} ${ubuntu?.className}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <div className={styles?.cardTop}>
                                        <Image src={msImage} alt='Dr. Megha Sheth' quality={100} className='img-fluid' />
                                    </div>
                                    <div className={`${styles?.cardBody}`}>
                                        <p className={`${styles?.interviewerName}`}>Dr. Megha Sheth</p>
                                        <p className={`${styles?.cardTitle}`}>How to Select a Research Topic in Physiotherapy</p>
                                        <Button className={`${styles?.readMoreBtn}`} onClick={() => router.push('/interview/Dr. Megha Sheth')}>Read Interview</Button>
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <motion.div
                                    className={`${styles?.interviewCard} ${ubuntu?.className}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <div className={styles?.cardTop}>
                                        <Image src={rupamSarkarImage} alt='Dr. Rupam Sarkar' quality={100} className='img-fluid' />
                                    </div>
                                    <div className={`${styles?.cardBody}`}>
                                        <p className={`${styles?.interviewerName}`}>Dr. Rupam Sarkar</p>
                                        <p className={`${styles?.cardTitle}`}>Physiotherapy in COVID-19 Recovery: Challenges, Interventions and Lessons Learned</p>
                                        <Button className={`${styles?.readMoreBtn}`} onClick={() => router.push('/interview/Dr. Rupam Sarkar')}>Read Interview</Button>
                                    </div>
                                </motion.div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Interview
