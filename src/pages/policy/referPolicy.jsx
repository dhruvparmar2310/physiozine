import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../../styles/Policy.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const ReferPolicy = () => {
    return (
        <>
            <Head>
                <title>Refer & Earn Policy | Policy | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Advertise of PhysioTrends, PhysioTrends Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, Refer & Earn Policy' />
                <meta name="description" content="Read the Refer & Earn Policy carefully." />
                <meta property="og:title" content="Refer & Earn Policy | Read the Refer & Earn Policy carefully." />
                <meta property="og:description" content="Read the Refer & Earn Policy carefully." />
                <meta property="og:url" content="https://physiotrends.vercel.app/policy/referPolicy" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Policy - Refer & Earn Policy'} />
            <section className={`${styles?.policy}`}>
                <div className={`${styles?.policyContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading='Kindly Read Our'>Refer & Earn Policy</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        We are excited to introduce our Refer & Earn program, designed to reward our valued contributors for spreading the word about PhysioTrends
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>How it Works ?</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        <strong>Refer Physiotrends:</strong>
                        <br />
                        - Share the opportunity to publish articles with your network. Encourage professionals, researchers, and academicians in the field of physiotherapy to submit their work to Physiotrends.
                    </p>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        <strong>Get Rewarded:</strong>
                        <br />
                        - When your referral successfully submits an article, they must send your name and contact details to our email address after successfully submitting their article.<br />
                        - If their article is selected and published in the upcoming edition of Physiotrends, you will be eligible for one free publication in the next edition.
                    </p>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        <strong>Benefits:</strong>
                        <br />
                        - No limit on the number of referrals. The more successful referrals you make, the more free publications you can earn!<br />
                        - Boost your visibility in the physiotherapy community by getting your research published in a reputed journal.
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Terms & Conditions</h3>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <ul>
                            <li>
                                The referrer must ensure that the referred author mentions their name and contact details at the time of submission to our Email Address.
                            </li>
                            <li>
                                The referral must be a new contributor who has not published in Physiotrends before.
                            </li>
                            <li>
                                The free publication reward is valid for one article only and must be redeemed within one year of the referral’s publication.
                            </li>
                            <li>
                                The article must adhere to the publication guidelines and meet the editorial standards of Physiotrends.
                            </li>
                            <li>
                                This policy is subject to change at the discretion of the Physiotrends editorial team.
                            </li>
                            <li>
                                The free publication reward is non-transferable and can only be redeemed by the referrer.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ReferPolicy
