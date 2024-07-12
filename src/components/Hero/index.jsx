import React, { useEffect, useState } from 'react'
import styles from '../../styles/Hero.module.scss'
import { Bebas_Neue, Teko, Roboto_Condensed } from 'next/font/google'
import Image from 'next/image'
import { Button, Modal } from 'react-bootstrap'
import BannerImg from '../../../public/assets/img/bannerImg.png'
import { useRouter } from 'next/router'
import textLogo from '../../../public/assets/img/main-logo.png'
import { motion } from 'framer-motion'

const Roboto_Condensed_Font = Roboto_Condensed({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal'] })
// const Teko_Font = Teko({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal'] })

function Hero ({ width }) {
    const router = useRouter()
    const [mobile, setMobile] = useState(null)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        if (window?.innerWidth < 576) {
            setMobile(true)
        }
    }, [mobile])

    return (
        <>
            <section className={`${styles?.hero}`} id='hero'>
                <div className={`${styles?.heroContent}`}>
                    <div className={`${styles?.adsContent}`}>
                        <h1 data-heading='ISSN (Online)' className={`${Roboto_Condensed_Font?.className}`}></h1>
                        <motion.div
                            className={`styles?.mainLogo`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: width ? 0 : 0.5, // delay the animation by 0.2 seconds
                                duration: width ? 0.3 : 0.8, // animation duration of 0.8 seconds
                                ease: 'easeInOut', // easing function for a smoother animation
                            }}
                        >
                            <Image
                                src={textLogo}
                                alt='PhysioTreends Logo'
                                quality={100}
                                className='img-fluid'
                                priority
                            />
                        </motion.div>

                        <motion.p
                            className={`${styles?.desc} ${Roboto_Condensed_Font?.className} mt-3`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: width ? 0 : 0.5, // delay the animation by 0.2 seconds
                                duration: width ? 0.3 : 0.8, // animation duration of 0.8 seconds
                                ease: 'easeInOut', // easing function for a smoother animation
                            }}
                        >
                            Read the latest research and empower your physiotherapy journey.
                        </motion.p>
                    </div>

                    <motion.div
                        className={`${styles?.imgContent}`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: width ? 0.3 : 1, animate: 'easeInOut' }}
                    >
                        <Image src={BannerImg} quality={100} width={100} priority height={100} className={`${styles?.phoneMockUp}`} />
                    </motion.div>
                </div >

            </section >

            <Modal show={modal} onHide={() => setModal(false)} id='add-article' size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='add-ticket-header'>Read the Instruction Carefully!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Here are the rules and regulations for manuscript submission to PhysioTrends:
                    </p>

                    <ol>
                        <li>Manuscripts must be original and not published elsewhere.</li>
                        <li>Authors are responsible for obtaining permissions for any copyrighted material used.</li>
                        <li>Manuscripts should be submitted in English.</li>
                        <li>Follow the APA style guide for formatting, including citations and references.</li>
                        <li>Manuscripts must be submitted electronically in Microsoft Word format.</li>
                        <li>Include a cover letter with author information, affiliations, and contact details.</li>
                        <li>Clearly state the title and main text in the manuscript.</li>
                        <li>Figures and tables should be submitted as separate files in high resolution.</li>
                        <li>Manuscripts undergo peer review; authors should be prepared to revise based on feedback.</li>
                        <li>PhysioTrends reserves the right to reject submissions that do not adhere to these guidelines or are deemed unsuitable for publication.</li>
                    </ol>

                    <p>
                        These guidelines ensure a smooth submission process and maintain the quality and integrity of PhysioTrends.
                    </p>

                    <div className={`${styles.submitBtn}`}>
                        <a href='mailto:physiotrendsmagazine@gmail.com' target='_blank'>Submit Now</a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Hero