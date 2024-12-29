import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/JoinAsInstructor.module.scss'
import { Ubuntu } from 'next/font/google'
import Image from 'next/image'
import mediaPartnerOne from '../../public/assets/img/media-partner/media-partner-1.png'
import mediaPartnerTwo from '../../public/assets/img/media-partner/media-partner-2.jpeg'
import mediaPartnerThree from '../../public/assets/img/media-partner/media-partner-3.jpeg'
import mediaPartnerFour from '../../public/assets/img/media-partner/media-partner-4.jpeg'
import mediaPartnerFive from '../../public/assets/img/media-partner/media-partner-5.jpeg'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const MediaPartner = () => {
    return (
        <>
            <Head>
                <title>Media Partner | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='Media Partner with PhysioTrends, Physiotherapy, Advertise of PhysioTrends, PhysioTrends Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiotrendsmagazine@gmail.com or +91 7984377793." />
                <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="Promote your brand to targeted physio audiences - Advertise with Physiotrends." />
                <meta property="og:url" content="https://physiotrends.vercel.app/mediaPartner" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Media Partner'} />
            <section className={`${styles?.joinAsInstructor}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading='Collaborate with Us:'>Conferences, Workshops & More</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            Are you organizing a conference, workshop, webinar, physiotherapy course, book launch, or sports event? Partner with Physiotrends and amplify your reach through our established platform dedicated to the world of physiotherapy and wellness.
                        </p>

                        <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Why Partner with PhysioTrends?</h1>
                        <div className={`${styles?.line}`}></div>

                        <ul className='mt-3'>
                            <li>
                                <span>Targeted Audience: Reach a niche audience of physiotherapists, healthcare professionals, and wellness enthusiasts.</span>
                            </li>
                            <li>
                                <span>Extensive Reach: Leverage our growing online presence and audience engagement.</span>
                            </li>
                            <li>
                                <span>Credible Platform: Collaborate with a trusted name in the physiotherapy community.</span>
                            </li>
                            <li>
                                <span>Custom Promotion: Tailored marketing strategies to suit your event or offering.</span>
                            </li>
                        </ul>

                        <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>What We Offer as Media Partners:</h1>
                        <div className={`${styles?.line}`}></div>

                        <ul className='mt-3'>
                            <li>
                                <span>Weekly Promotion on Social Media: We will promote the event details twice every week across our social media platforms, including WhatsApp, Instagram, and LinkedIn.</span>
                            </li>
                            <li>
                                <span>Magazine Advertisement: Event details will be highlighted in the upcoming edition of the Magazine</span>
                            </li>
                            <li>
                                <span>Website Promotion: A direct registration link for the event will be added to our website to enhance traffic and increase registrations.</span>
                            </li>
                            <li>
                                <span>Interview Reels & Pre-Event Highlights: We can create and share short interview reels of speakers and sponsors, along with pre-event highlight videos, to build excitement and engagement for the event.</span>
                            </li>
                        </ul>

                        <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Our Expectations from the Organizing Committee:</h1>
                        <div className={`${styles?.line}`}></div>

                        <ul className='mt-3'>
                            <li>
                                <span>PhysioTrends Logo on Marketing Materials: Kindly include our logo as the media partner on all banners, flyers, pamphlets, and promotional materials for the event.</span>
                            </li>
                            <li>
                                <span>Visibility in Event Advertisements: Acknowledge our partnership in all event related advertisements, both digital and print.</span>
                            </li>
                            <li>
                                <span>Timely Provision of Event Details and Flyers: We request event details and promotional flyers that include the PhysioTrends logo as the media sponsor. These materials should be shared at least one or two days in advance of our scheduled promotions.</span>
                            </li>
                            <li>
                                <span>Advertisement in the Souvenir: Kindly allocate space for a PhysioTrends advertisement in the event souvenir to further enhance visibility.</span>
                            </li>
                        </ul>

                        <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Who Can Collaborate?</h1>
                        <div className={`${styles?.line}`}></div>

                        <ul className='mt-3'>
                            <li>
                                <span>International and National Conferences</span>
                            </li>
                            <li>
                                <span>Workshop and Webinar Host</span>
                            </li>
                            <li>
                                <span>Physiotherapy Course Providers</span>
                            </li>
                            <li>
                                <span>Medical and Physiotherapy Book Publishers</span>
                            </li>
                            <li>
                                <span>Sports Event</span>
                            </li>
                            <li>
                                <span>Educational Institutions</span>
                            </li>
                        </ul>

                        <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>How to Collaborate?</h1>
                        <div className={`${styles?.line}`}></div>

                        <p className='mt-3'>
                            Getting started is simple! Share your event details with us at <span style={{ color: 'var(--primary-color)' }}>physiotrendsmagazine@gmail.com</span> or contact us on <span style={{ color: 'var(--primary-color)' }}>+91 7984377793</span>.
                        </p>
                        <p>Let's join hands to create meaningful impact and promote excellence in the field of physiotherapy and wellness.</p>

                        <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading=''>Highlights of Event Collaborated</h1>
                        <div className={`${styles?.line}`}></div>

                        <div className={`${styles?.mediaHighlights}`}>
                            <Image src={mediaPartnerOne} alt='' quality={100} />
                            <Image src={mediaPartnerThree} alt='' quality={100} />
                            <Image src={mediaPartnerFive} alt='' quality={100} />
                            <Image src={mediaPartnerTwo} alt='' quality={100} />
                            <Image src={mediaPartnerFour} alt='' quality={100} />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default MediaPartner
