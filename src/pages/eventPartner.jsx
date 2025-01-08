import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/JoinAsEditor.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const EventPartner = () => {
    return (<>
        <Head>
            <title>Event Partner | PhysioZine</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='PhysioZine, Physiotherapy, Advertise of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
            <meta name="description" content="PHYSIOZINE is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiozinemagazine@gmail.com or +91 7984377793." />
            <meta property="og:title" content="PhysioZine: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
            <meta property="og:description" content="Promote your brand to targeted physio audiences - Advertise with PhysioZine." />
            <meta property="og:url" content="https://physiozine.vercel.app/advertise" />
            <meta property="og:image" content="assets/img/favicon.jpg" />
            <meta property="og:type" content="website" />
            <link rel="icon" href="assets/img/favicon.png" />
            <link rel="manifest" href="/manifest.json" />
        </Head>

        <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Event Partner'} />
        <section className={`${styles?.joinAsEditor}`}>
            <div className={`${styles?.innerContent} container`}>
                <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Partner With Us</h1>
                <div className={`${styles?.line}`}></div>

                <p className='mt-3'>
                    Are you a physiotherapy organization, clinic, or educational institution looking to expand your reach and impact? Partner with PhysioZine to co-host engaging events that elevate the physiotherapy profession and provide valuable learning opportunities for our community.
                </p>
                <p>As an event partner, you'll have the chance to:</p>
                <ul>
                    <li>
                        <span>Organize interactive workshops, webinars, and training sessions on the latest physiotherapy techniques, research, and best practices.</span>
                    </li>
                    <li>
                        <span>Reach a wide audience of physiotherapists, students, and healthcare professionals who are eager to learn and grow.</span>
                    </li>
                    <li>
                        <span>Showcase your expertise and thought leadership in the field of physiotherapy.</span>
                    </li>
                    <li>
                        <span>Collaborate with our experienced team to ensure the success of the event.</span>
                    </li>
                    <li>
                        <span>Leverage our established platform and marketing channels to promote the event and maximize participation.</span>
                    </li>
                </ul>

                <p>
                    By joining forces with PhysioZine, you'll not only enhance your organization's visibility but also contribute to the advancement of the physiotherapy profession as a whole. If you're interested in becoming an event partner, we'd love to hear from you. Let's work together to inspire and empower the next generation of physiotherapists!
                </p>
                <p className="text-info">
                    Feel Free to Mail us on physiozinemagazine@gmail.com
                </p>
            </div>
        </section>
    </>)
}

export default EventPartner