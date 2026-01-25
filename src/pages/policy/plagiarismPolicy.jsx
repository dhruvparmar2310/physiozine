import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../../styles/Policy.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const PlagiarismPolicy = () => {
    return (
        <>
            <Head>
                <title>Plagiarism Policy | Policy | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Advertise of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, Plagiarism Policy of Physiozine' />
                <meta name="description" content="Read the Plagiarism Policy carefully." />
                <meta property="og:title" content="Plagiarism Policy | Read the Plagiarism Policy carefully." />
                <meta property="og:description" content="Read the Plagiarism Policy carefully." />
                <meta property="og:url" content="https://physiozine.co.in/policy/plagiarismPolicy" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Policy - Plagiarism Policy'} />
            <section className={`${styles?.policy} container`}>
                <div className={`${styles?.policyContent}`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Plagiarism Policy</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        PhysioZine is committed to upholding the highest standards of academic integrity and originality. Plagiarism, including the verbatim or near-verbatim copying of someone else's work without proper attribution, is strictly prohibited.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className}`}>
                        Authors submitting content to PhysioZine must ensure that their work is original and properly cited. Any instances of plagiarism will result in immediate rejection of the submission and may lead to further consequences, including suspension or permanent ban from contributing to PhysioZine.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className}`}>
                        PhysioZine employs plagiarism detection tools to screen submissions and identify potential instances of plagiarism. Authors found to have engaged in plagiarism will be notified, and appropriate action will be taken in accordance with our editorial policies.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className}`}>
                        By submitting content to PhysioZine, authors affirm that their work is original, properly cited, and does not infringe upon the intellectual property rights of others.
                    </p>

                    <p className={`${styles.note} ${ubuntu?.className}`}>
                        Note: This plagiarism policy emphasizes the importance of originality and proper citation while submitting content to PhysioZine and outlines the consequences of engaging in plagiarism.
                    </p>
                </div>
            </section>
        </>
    )
}

export default PlagiarismPolicy
