import Head from 'next/head'
import React from 'react'
import styles from '../styles/Webinar.module.scss'
import webinarOne from '../../public/assets/img/webinar/webinar.jpg'
import Image from 'next/image'
import { Ubuntu } from 'next/font/google'
import { Button } from 'react-bootstrap'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { useRouter } from 'next/router'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const Webinar = () => {
    const CARD_TAG = {
        REGISTER: 'Register Now',
        YOUTUBE: 'YouTube Link'
    }
    return (
        <>
            <Head>
                <title>Webinar | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Magazine of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, PhysioZine Webinar, physiozine webinar, physiotherapy webinar, Physiotherapy Webinar, PhysioZine Webinar Series' />
                <meta name="description" content="India's leading digital magazine for Physiotherapy." />
                <meta property="og:title" content="Webinar | PhysioZine" />
                <meta property="og:description" content="India's leading digital magazine for Physiotherapy." />
                <meta property="og:url" content="https://physiozine.vercel.app/webinar" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            {/* <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Magazines'} /> */}
            <section className={`${styles?.magazineSection}`}>
                <div className={`${styles?.innerContent} container`}>
                    <div className={styles?.magazineTitle}>
                        <p>Webinar Series</p>
                    </div>
                    <div className={styles?.latestMagazine}>
                        <div className={`${styles?.articleCard}`} onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScmb_W-q5Wf6LPBugf-KTcG8A1ofnZxWaGL-oc6WQ8hJClKNA/viewform?usp=pp_url', '_blank')}>
                            <div className={`${styles?.cardImg}`}>
                                <Image src={webinarOne} className='img-fluid' priority quality={100} width={100} height={100} alt='Webinar' />
                            </div>
                            <div className={`${styles?.cardBody}`}>
                                <div className={styles?.topContent}>
                                    <p className={ubuntu?.className}><span>Date:</span> <span>06/09/2025, 6:00 - 7:00 PM</span></p>
                                </div>
                                <div className={styles?.bottomContent}>
                                    <p className={ubuntu?.className}>{CARD_TAG.REGISTER}</p>
                                    <p className={`${ubuntu?.className} ${styles?.runningArrow}`}>
                                        <span className={`${styles?.arrow} ${styles?.arrow1}`}>&gt;</span>
                                        <span className={`${styles?.arrow} ${styles?.arrow2}`}>&gt;</span>
                                        <span className={`${styles?.arrow} ${styles?.arrow3}`}>&gt;</span>
                                        <span className={`${styles?.arrow} ${styles?.arrow4}`}>&gt;</span>
                                    </p>

                                    <Button className={`${styles?.downloadBtn} `} variant='info' onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScmb_W-q5Wf6LPBugf-KTcG8A1ofnZxWaGL-oc6WQ8hJClKNA/viewform?usp=pp_url', '_blank')}>
                                        Click Here <span><FaArrowUpRightFromSquare /></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Webinar
