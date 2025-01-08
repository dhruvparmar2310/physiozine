import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../../styles/Policy.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const DisclaimerPolicy = () => {
    return (
        <>
            <Head>
                <title>Disclaimer Policy | Policy | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Advertise of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="Read the Disclaimer Policy, Terms & Conditions apply." />
                <meta property="og:title" content="Disclaimer Policy | Read the Disclaimer Policy, Terms & Conditions apply." />
                <meta property="og:description" content="Read the Disclaimer Policy, Terms & Conditions apply." />
                <meta property="og:url" content="https://physiozine.vercel.app/policy/disclaimerPolicy" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Policy - Disclaimer Policy'} />
            <section className={`${styles?.policy}`}>
                <div className={`${styles?.policyContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Disclaimer Policy</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        PhysioZine is an e-magazine dedicated to providing information and insights on the field of physiotherapy. We publish articles, reviews, and news related to physiotherapy practice, research, and education. Additionally, PhysioZine allows the advertisement of products and services relevant to the field of physiotherapy.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className}`}>
                        While we strive to ensure the accuracy and reliability of the content published on PhysioZine, the information provided is for informational purposes only. It should not be considered a substitute for professional advice, diagnosis, or treatment. Readers are encouraged to consult qualified healthcare professionals for personalized advice regarding their specific health conditions or treatment plans.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className}`}>
                        The views and opinions expressed in articles, advertisements, or other content published on PhysioZine are those of the respective authors or advertisers and do not necessarily reflect the views of PhysioZine or its editorial team.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className}`}>
                        PhysioZine may feature advertisements for products and services related to the field of physiotherapy. However, the inclusion of such advertisements does not constitute an endorsement or recommendation by PhysioZine. Readers are encouraged to conduct their own research and exercise caution when considering products or services advertised on PhysioZine.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className}`}>
                        PhysioZine makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, completeness, suitability, or availability of the information, products, services, or related graphics contained within its content or advertisements. Any reliance on such information is at the reader's own risk.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className}`}>
                        PhysioZine reserves the right to modify, update, or remove content or advertisements without prior notice. We strive to maintain the accuracy and relevance of our content but cannot guarantee its timeliness or continued availability.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className}`}>
                        By accessing and using PhysioZine, you agree to abide by the terms of this disclaimer policy.
                    </p>

                    <p className={`${styles.note} ${ubuntu?.className}`}>
                        Note: This disclaimer policy helps to clarify the nature of PhysioZine content, including articles and advertisements, and outlines the limitations of reliance on the information provided.
                    </p>
                </div>
            </section>
        </>
    )
}

export default DisclaimerPolicy
