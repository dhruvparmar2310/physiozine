import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Conference.module.scss'
import Image from 'next/image'
import { Ubuntu } from 'next/font/google'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { FaArrowRight } from 'react-icons/fa'
import ConphycsLogo from '../../public/assets/img/15-conphycs-logo-02.png'
import gptaLogo from '../../public/assets/img/GPTA-LOGO.jpeg'
import muLogo from '../../public/assets/img/MU_LOGO_BROWN.png'
import mainLogo from '../../public/assets/img/logo-1.png'
import FeppaLogo from '../../public/assets/img/Feppa-Logo.png'
import SwatiLogo from '../../public/assets/img/Swati-Logo.jpg'
import odfLogo from '../../public/assets/img/odf-logo.png'
import mahalaxmiLogo from '../../public/assets/img/mahalaxmi.jpeg'
import jainUniversityLogo from '../../public/assets/img/jain-university.jpeg'
import konvergeLogo from '../../public/assets/img/konverge.jpeg'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const Conferences = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Conferences | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, Conferences of Physiozine, PhysioZine Conference' />
                <meta name="description" content="PHYSIOZINE is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <meta property="og:title" content="Conferences | PhysioZine" />
                <meta property="og:description" content="Physiozine Conferences" />
                <meta property="og:url" content="https://physiozine.vercel.app/conferences" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Conferences'} />
            <section className={`${styles?.mediaPartner}`}>
                <div className={`container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Conferences</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className={`${styles?.innerContent}`}>
                        <div>
                            <p>
                                PhysioZine serves as a premier media partner for physiotherapy conferences, providing extensive coverage, promotions, and visibility to industry events. We help amplify conference reach through our platform, connecting professionals, researchers, and practitioners globally. Partner with us to enhance your event’s impact!
                            </p>
                            <Button type='button' onClick={() => router.push('/mediaPartner')}><span className="me-1">Learn More</span> <span><FaArrowRight /></span></Button>

                            <h1 className={`sectionTitle my-3 ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading='Our'> Partnered Conference:</h1><hr />

                            <div className={`${styles?.tabContent}`}>
                                <div className={`${styles?.upcomingDetailCard} ${ubuntu?.className}`}>
                                    <div className={`${styles?.cardDetails} ${ubuntu?.className}`}>
                                        <h1 className={`${ubuntu?.className} text-uppercase`}>1<sup>st</sup> International Physiotherapy Conference, Physio Confluence, 2025</h1>
                                        <p className='mt-4'>Theme: Expanding horizons in Physiotherapy</p>
                                        <p>Venue: Zila Parishad Auditorium Powai Naka, Satara, Maharastra</p>
                                        <p>Date: 22 - 23 February, 2025</p>
                                        <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLSdvgVmc-dmcswi-sv_zRpmpFxsiKKQ5wZvZGy77_cYKeYImkQ/viewform?pli=1')}>Register Now</Button>
                                    </div>
                                    <div className={styles?.middleImg}>
                                    </div>
                                    <div className={styles?.lastDetails}>
                                        <p>Organized By</p>
                                        <Image
                                            src={mahalaxmiLogo}
                                            alt='Mahalaxmi College Of Physiotherapy & Rehabilitation Center Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                            style={{ maxWidth: '180px' }}
                                        />

                                        <p className='mt-3'>Media Partner</p>
                                        <Image
                                            src={mainLogo}
                                            alt='PhysioZine Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                <hr />

                                <div className={`${styles?.upcomingDetailCard} ${ubuntu?.className} mt-3`}>
                                    <div className={`${styles?.cardDetails} ${ubuntu?.className}`}>
                                        <h1 className={`${ubuntu?.className} text-uppercase`}>KONVERGE, National Physiotherapy Conference, 2025</h1>
                                        <p className='mt-4'>Theme: Physiotherapy</p>
                                        <p>Venue: Jain University, Bangalore</p>
                                        <p>Date: 20 - 21 March, 2025</p>
                                        <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('https://docs.google.com/forms/d/e/1FAIpQLScPC-s2ThAwrIfmbWgUCGBd7VtczEZXvRpN5zvKnegbkQZV_w/viewform?usp=send_form')}>Register Now</Button>
                                    </div>
                                    <div className={styles?.middleImg}>
                                        <Image
                                            src={konvergeLogo}
                                            alt='Konverge Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className={styles?.lastDetails}>
                                        <p>Organized By</p>
                                        <Image
                                            src={jainUniversityLogo}
                                            alt='Jain University Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                        />

                                        <p className='mt-3'>Media Partner</p>
                                        <Image
                                            src={mainLogo}
                                            alt='PhysioZine Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                <hr />

                                <div className={`${styles?.upcomingDetailCard} ${ubuntu?.className} mt-3`}>
                                    <div className={`${styles?.cardDetails} ${ubuntu?.className}`}>
                                        <h1 className={`${ubuntu?.className} text-uppercase`}>2<sup>nd</sup> FEPPA International Conference on CPP, 2025</h1>
                                        <p className='mt-4'>Theme: Recognition, Resolution, Rehabilitation</p>
                                        <p>Venue: Mumbai</p>
                                        <p>Date: 19 - 20 April, 2025</p>
                                        <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('https://feppa.org/feppa-2025-2nd-annual-conference-of-female-pelvic-pain-association/')}>Register Now</Button>
                                    </div>
                                    <div className={styles?.middleImg}>
                                        <Image
                                            src={FeppaLogo}
                                            alt='Feppa Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                        />
                                        <Image
                                            src={SwatiLogo}
                                            alt='Swati Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                        // onClick={() => router.push('https://gptaindia.org/')}
                                        />
                                    </div>
                                    <div className={styles?.lastDetails}>
                                        <p>Organized By</p>
                                        <Image
                                            src={odfLogo}
                                            alt='ODF Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                            style={{ maxWidth: '130px' }}
                                            onClick={() => router.push('https://www.orphandiseasefoundation.com/')}
                                        />

                                        <p className='mt-3'>Media Partner</p>
                                        <Image
                                            src={mainLogo}
                                            alt='PhysioZine Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                <hr />

                                <div className={`${styles?.upcomingDetailCard} ${ubuntu?.className} mt-3`}>
                                    <div className={`${styles?.cardDetails} ${ubuntu?.className}`}>
                                        <h1 className={`${ubuntu?.className} text-uppercase`}>15<sup>th</sup> Gujstate Conphycs, 2024</h1>
                                        <p className='mt-4'>Theme: Global Perspectives on Physiotherapy - Collaboration & Innovation</p>
                                        <p>Venue: Marwadi University, Rajkot</p>
                                        <p>Date: 20 - 21 December, 2024</p>
                                        {/* <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('https://conphycs2024.com/')}>Register Now</Button> */}
                                    </div>
                                    <div className={styles?.middleImg}>
                                        <Image
                                            src={ConphycsLogo}
                                            alt='15th Conphycs Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                        />
                                        <Image
                                            src={gptaLogo}
                                            alt='GPTA Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                            onClick={() => router.push('https://gptaindia.org/')}
                                        />
                                    </div>
                                    <div className={styles?.lastDetails}>
                                        <p>Organized By</p>
                                        <Image
                                            src={muLogo}
                                            alt='Marwadi University Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                            onClick={() => router.push('https://www.marwadiuniversity.ac.in/faculty-of-physiotherapy/')}
                                        />

                                        <p className='mt-3'>Media Partner</p>
                                        <Image
                                            src={mainLogo}
                                            alt='PhysioZine Logo'
                                            loading='lazy'
                                            quality={100}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Conferences