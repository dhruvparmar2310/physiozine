import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/TermsAndConditions.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const TermsAndConditions = () => {
    return (
        <>
            <Head>
                <title>Terms & Conditions | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Terms & Conditions'} />
            <section className={`${styles?.termsAndConditions}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading='Kindly Read Our'>Terms & Conditions</h1>
                    <div className={`${styles?.line}`}></div>

                    <marquee behavior="" direction="" className={`${styles?.headLines}`}>PhysioTrends E-Magazine Article Submission Terms and Conditions</marquee>

                    <h3 className={`${styles?.subHeading}`}>1. Submission Guidelines:</h3>
                    <ul>
                        <li><span>All submissions must be original works of the author.</span></li>
                        <li><span>Submitted articles should be related to the field of physiotherapy.</span></li>
                        <li><span>Authors must ensure that their submissions are accurate, well-researched, and free from plagiarism.</span></li>
                    </ul>

                    <h3 className={`${styles?.subHeading} mt-2`}>2. Copyright and Ownership:</h3>
                    <ul>
                        <li>
                            <span>By submitting an article to PhysioTrends E-Magazine, authors grant us the non-exclusive right to publish, reproduce, distribute, and display their work in any format or medium.</span>
                        </li>
                        <li>
                            <span>Authors retain the copyright to their articles and are free to republish or distribute them elsewhere after they have been published in PhysioTrends, provided proper acknowledgment is given to the magazine.</span>
                        </li>
                    </ul>

                    <h3 className={`${styles?.subHeading} mt-2`}>3. Editing:</h3>
                    <ul>
                        <li>
                            <span>PhysioTrends reserves the right to edit submissions for clarity, grammar, style, and length without altering the core content or meaning of the article.</span>
                        </li>
                        <li>
                            <span>Authors will be notified of any significant edits made to their submissions before publication.</span>
                        </li>
                    </ul>

                    <h3 className={`${styles?.subHeading} mt-2`}>4. Publication and Promotion:</h3>
                    <ul>
                        <li>
                            <span>Submission of an article does not guarantee publication. PhysioTrends reserves the right to reject any submission that does not meet our standards or align with our editorial focus.</span>
                        </li>
                        <li>
                            <span>PhysioTrends may promote published articles through various channels, including but not limited to social media, email newsletters, and third-party platforms.</span>
                        </li>
                    </ul>

                    <h3 className={`${styles?.subHeading} mt-2`}>5. Conflicts of Interest:</h3>
                    <ul>
                        <li>
                            <span>Authors must disclose any potential conflicts of interest, financial or otherwise, that could influence the content of their articles.</span>
                        </li>
                        <li>
                            <span>PhysioTrends reserves the right to reject or remove any article that is found to have undisclosed conflicts of interest.</span>
                        </li>
                    </ul>

                    <h3 className={`${styles?.subHeading} mt-2`}>6. Indemnity:</h3>
                    <ul>
                        <li>
                            <span>Authors are solely responsible for the content of their articles and any consequences that may arise from their publication.</span>
                        </li>
                        <li>
                            <span>Authors agree to indemnify and hold PhysioTrends harmless from any claims, liabilities, or damages resulting from their submissions.</span>
                        </li>
                    </ul>

                    <h3 className={`${styles?.subHeading} mt-2`}>7. Amendments:</h3>
                    <ul>
                        <li>
                            <span>PhysioTrends reserves the right to amend these terms and conditions at any time. Any changes will be communicated to authors in writing.</span>
                        </li>
                    </ul>

                    <p >By submitting an article to PhysioTrends E-Magazine, authors acknowledge that they have read, understood, and agree to abide by these terms and conditions.
                    </p>
                </div>
            </section>
        </>
    )
}

export default TermsAndConditions
