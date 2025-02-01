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
                <title>Terms & Conditions | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, Terms & Conditions of Physiozine, Terms and Conditions of Physiozine' />
                <meta name="description" content="PHYSIOZINE is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <meta property="og:title" content="Terms & Conditions | PhysioZine" />
                <meta property="og:description" content=" At PhysioZine, we are dedicated to empowering physiotherapists, healthcare professionals, and students with valuable resources, insights, and opportunities to advance the field of physiotherapy. As a non-profit organization, we rely on the generosity and support of our community to sustain and expand our initiatives." />
                <meta property="og:url" content="https://physiozine.vercel.app/terms-and-conditions" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Terms & Conditions'} />
            <section className={`${styles?.termsAndConditions}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading=''>Terms & Conditions</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className={`accordion accordion-flush mt-3`} id='main-accordion'>
                        <div className={`accordion-item`}>
                            <h2 className={`accordion-header ${ubuntu?.className}`} id={`flush-heading-1`} title='Article Submission | PhysioZine'>
                                <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-1`} aria-expanded="true" aria-controls={`flush-collapse-1`}>
                                    Article Submission
                                </button>
                            </h2>
                            <div id={`flush-collapse-1`} className={`accordion-collapse collapse show`} data-bs-parent="#main-accordion">
                                <div className={`accordion-body ${styles.accordionBody}`}>
                                    <h3 className={`${styles?.subHeading}`}>1. Submission Guidelines:</h3>
                                    <ul>
                                        <li><span>All submissions must be original works of the author.</span></li>
                                        <li><span>Submitted articles should be related to the field of physiotherapy.</span></li>
                                        <li><span>Authors must ensure that their submissions are accurate, well-researched, and free from plagiarism.</span></li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>2. Copyright and Ownership:</h3>
                                    <ul>
                                        <li>
                                            <span>By submitting an article to PhysioZine E-Magazine, authors grant us the non-exclusive right to publish, reproduce, distribute, and display their work in any format or medium.</span>
                                        </li>
                                        <li>
                                            <span>Authors retain the copyright to their articles and are free to republish or distribute them elsewhere after they have been published in PhysioZine, provided proper acknowledgment is given to the magazine.</span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>3. Editing:</h3>
                                    <ul>
                                        <li>
                                            <span>PhysioZine reserves the right to edit submissions for clarity, grammar, style, and length without altering the core content or meaning of the article.</span>
                                        </li>
                                        <li>
                                            <span>Authors will be notified of any significant edits made to their submissions before publication.</span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>4. Publication and Promotion:</h3>
                                    <ul>
                                        <li>
                                            <span>Submission of an article does not guarantee publication. PhysioZine reserves the right to reject any submission that does not meet our standards or align with our editorial focus.</span>
                                        </li>
                                        <li>
                                            <span>PhysioZine may promote published articles through various channels, including but not limited to social media, email newsletters, and third-party platforms.</span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>5. Conflicts of Interest:</h3>
                                    <ul>
                                        <li>
                                            <span>Authors must disclose any potential conflicts of interest, financial or otherwise, that could influence the content of their articles.</span>
                                        </li>
                                        <li>
                                            <span>PhysioZine reserves the right to reject or remove any article that is found to have undisclosed conflicts of interest.</span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>6. Indemnity:</h3>
                                    <ul>
                                        <li>
                                            <span>Authors are solely responsible for the content of their articles and any consequences that may arise from their publication.</span>
                                        </li>
                                        <li>
                                            <span>Authors agree to indemnify and hold PhysioZine harmless from any claims, liabilities, or damages resulting from their submissions.</span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>7. Amendments:</h3>
                                    <ul>
                                        <li>
                                            <span>PhysioZine reserves the right to amend these terms and conditions at any time. Any changes will be communicated to authors in writing.</span>
                                        </li>
                                    </ul>

                                    <p >By submitting an article to PhysioZine E-Magazine, authors acknowledge that they have read, understood, and agree to abide by these terms and conditions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`accordion-item mt-2`}>
                            <h2 className={`accordion-header ${ubuntu?.className}`} id={`flush-heading-2`} title='Subscription Plan | PhysioZine'>
                                <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-2`} aria-expanded="false" aria-controls={`flush-collapse-2`}>
                                    Subscription Plan
                                </button>
                            </h2>
                            <div id={`flush-collapse-2`} className={`accordion-collapse collapse `} data-bs-parent="#main-accordion">
                                <div className={`accordion-body ${styles.accordionBody}`}>
                                    <p>
                                        By enrolling in the PhysioZine Digital Magazine Academic Partner Program, your institution agrees to the following terms and conditions. These terms are designed to ensure a smooth and efficient collaboration that highlights academic achievements and provides valuable opportunities for students.
                                    </p>

                                    <h3 className={`${styles?.subHeading} mt-2`}>1. Subscription Plans and Benefits</h3>
                                    <ul>
                                        <li>
                                            <span>Basic Plan: This plan includes one free publication in each magazine edition. No additional advertising or promotional benefits apply.</span>
                                        </li>
                                        <li>
                                            <span>Professional Plan: This plan includes unlimited free publications, fast-track publication, and advertisement of student and college achievements.</span>
                                        </li>
                                        <li>
                                            <span>
                                                Premium Plan: This plan includes unlimited free publications, fast-track publication, advertisement of student and college achievements, and eligibility for the Best College Award based on the number of publications contributed.
                                            </span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>2. Advertising Submission Requirements</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                For colleges enrolled in the Professional or Premium plans, advertisements promoting student or college achievements must be submitted 15 days prior to each magazine edition’s publication.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                The magazine is published in February, April, June, August, October, and December. To ensure inclusion, all advertising content must be submitted by the 15th day of the preceding month (e.g., by January 15 for the February edition).
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                PhysioZine Digital Magazine reserves the right to edit advertisement content to align with the magazine's layout and design standards. However, we will ensure that content integrity and key messaging remain intact.
                                            </span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>3. Logo Usage and Academic Partner Representation</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                By enrolling, the college grants PhysioZine Digital Magazine the right to display the college’s logo on the website, on an Academic Partner page, and in related promotional materials. This partnership recognition strengthens our collective reach and celebrates our commitment to academic excellence.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Logos should be provided by the college in a high-resolution format upon enrollment.
                                            </span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>4. Right to Publish and Advertise Submitted Content</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                The college grants PhysioZine Digital Magazine the right to publish any submitted articles, advertisements, or promotional content from enrolled students and faculty within the agreed terms of each subscription plan.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Content submitted by the college may also be used for promotional purposes across PhysioZine platforms, including social media and website features.
                                            </span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>5. Content Responsibility</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                The college is responsible for ensuring that all submitted content, including research articles and advertisements, is original, correctly attributed, and free from plagiarism.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                By submitting content, the college guarantees that all necessary permissions have been obtained for publication and that all content is appropriate for an academic audience.
                                            </span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>6. Subscription Fees and Renewals</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                Subscription fees are based on the selected plan and are due annually at the time of enrollment.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Renewal notifications will be sent to the college one month prior to the subscription expiration date, and payment must be completed within the renewal period to ensure uninterrupted access to plan benefits.
                                            </span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>7. Termination of Subscription</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                PhysioZine Digital Magazine reserves the right to terminate the subscription if the college violates any of these terms and conditions.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                The college may cancel its subscription at any time; however, refunds will not be provided for cancellations.
                                            </span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>8. Modifications to Terms</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                PhysioZine Digital Magazine reserves the right to modify these terms and conditions as necessary. Any changes will be communicated to enrolled colleges, and continued enrollment constitutes agreement to any revised terms.
                                            </span>
                                        </li>
                                    </ul>

                                    <h3 className={`${styles?.subHeading} mt-2`}>9. Academic Excellence Award Criteria</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                Eligibility for the Academic Excellence Award is available exclusively to colleges enrolled in the Premium Plan.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                The award will be based on the number of articles published in PhysioZine Digital Magazine by students or faculty from the enrolled college.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                The Academic Excellence Award will be presented annually and highlighted in a dedicated section of the magazine, along with a feature article celebrating the college’s achievements and contributions to the field.
                                            </span>
                                        </li>
                                    </ul>

                                    <p>
                                        By enrolling in the Academic Partner Program, your college acknowledges and agrees to the terms and conditions outlined above.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default TermsAndConditions
