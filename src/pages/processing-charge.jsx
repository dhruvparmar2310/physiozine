import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Policy.module.scss'
import { Ubuntu } from 'next/font/google'
import { Table } from 'react-bootstrap'
import Link from 'next/link'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const ProcessingCharge = () => {
    const columns = ["Article Type", "Processing Charge for Indian Authors", "Processing Charge for International Authors"]
    const data = [
        { _id: 0, sTitle: 'Research Article', sCharge: '₹ 500', sInternationalCharge: '$ 50' },
        { _id: 1, sTitle: 'Case Report', sCharge: '₹ 500', sInternationalCharge: '$ 50' },
        { _id: 2, sTitle: 'Case Series', sCharge: '₹ 500', sInternationalCharge: '$ 50' },
        { _id: 3, sTitle: 'Blogs', sCharge: '₹ 500', sInternationalCharge: '$ 50' }
    ]
    return (
        <>
            <Head>
                <title>Article Processing Charge (APC) | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Article Processing Charge of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, APC of Physiozine' />
                <meta name="description" content=" At Physiozine Magazine, we strive to ensure that authors from all over the world have the opportunity to showcase their research, ideas, and contributions to the physiotherapy community. Below are the details regarding the Article Processing Charge (APC) for Indian and International authors, as well as the procedure for obtaining a hard copy certificate." />
                <meta property="og:title" content="Article Processing Charge (APC) | PhysioZine" />
                <meta property="og:description" content=" At Physiozine Magazine, we strive to ensure that authors from all over the world have the opportunity to showcase their research, ideas, and contributions to the physiotherapy community. Below are the details regarding the Article Processing Charge (APC) for Indian and International authors, as well as the procedure for obtaining a hard copy certificate." />
                <meta property="og:url" content="https://physiozine.vercel.app/policy/processing-charge" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Article Processing Charge'} />
            <section className={`${styles?.policy}`}>
                <div className={`${styles?.policyContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Article Processing Charge (APC) and Hard Copy Certificate</h1>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        At Physiozine Magazine, we strive to ensure that authors from all over the world have the opportunity to showcase their research, ideas, and contributions to the physiotherapy community. Below are the details regarding the Article Processing Charge (APC) for Indian and International authors, as well as the procedure for obtaining a hard copy certificate.
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Article Processing Charge (APC)</h3>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        To maintain the quality and integrity of our publication, we charge an Article Processing Fee (APC) for the publication of articles. This fee helps us cover the editorial and publication costs, including peer-reviewing, formatting, and promotion.
                    </p>

                    <Table responsive bordered striped>
                        <thead>
                            <tr>
                                {columns?.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <td>{item}</td>
                                        </React.Fragment>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(item => {
                                return (
                                    <tr key={item?._id}>
                                        <td>{item?.sTitle}</td>
                                        <td className='text-center'>{item?.sCharge}</td>
                                        <td className='text-center'>{item?.sInternationalCharge}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <caption className='text-danger text-end'>Publication charges are effective from 13/10/2024.</caption>
                    </Table>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Hard Copy Certificate</h3>
                    <div className={`${styles?.line}`}></div>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        We offer a Hard Copy Certificate of publication for all Indian authors whose articles are successfully published in Physiozine Magazine. This certificate will serve as a formal acknowledgment of your contribution to the field of physiotherapy.

                        <ul className='mt-2'>
                            <li>The certificate will be mailed to the provided address after the article is published.</li>
                            <li>The fee for the hard copy certificate is ₹200/- for Indian authors.</li>
                        </ul>

                        Email your submission to: <span className='text-info'>physiozinemagazine@gmail.com</span>
                    </p>
                    <p className={`${styles.note} ${ubuntu?.className} text-danger mt-3`}>
                        Note: Author needs to share the Screenshot and Transaction ID after successful payment to our Email ID along with Title of Article
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Payment Details</h3>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        The author is required to pay the specified Article Processing Charge (APC) to the following payment details in order to process the article for review and acceptance.
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        <strong>Payment Option-1</strong>: Payment RTGS/NEFT/Online. <br />Name: Mr. DARSHAN PRAKASHBHAI PARAMR<br />Account No.: 39693011050<br />IFSC Code: SBIN0031882<br />Branch: P.D. Malaviya Fatak, Rajkot
                    </p>
                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        <strong>Payment Option-2</strong>: GPay/PayTM/PhonePe/UPI Payment. <br />UPI ID: 7984377793@ptyes
                    </p>
                    <p className={`${styles.note} ${ubuntu?.className} text-danger mt-3`}>
                        Note: Author needs to share the Screenshot and Transaction ID after successful payment to our Email ID along with Title of Article
                    </p>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>Why Choose PhysioZine?</h3>
                    <div className={`${styles?.line}`}></div>
                    <ol className='mt-2'>
                        <li><strong>Global Exposure</strong>: Your research and ideas will reach physiotherapy professionals, students, and institutions worldwide.</li>
                        <li><strong>Peer-Reviewed Publication</strong>: Every article goes through a rigorous peer-review process to ensure high-quality content.</li>
                        <li><strong>Recognition</strong>: The hard copy certificate serves as an official recognition of your contribution to the physiotherapy community.</li>
                    </ol>

                    <h3 className={`${styles.subTitle} ${ubuntu?.className}`}>How to Apply?</h3>
                    <div className={`${styles?.line}`}></div>

                    <p className={`${styles.policyDetails} ${ubuntu?.className} mt-3`}>
                        Submit your article for publication by following the <Link href='/guidelines'>Submission Guidelines</Link> on our website. For more details or inquiries, feel free to reach out to us at: <span className='text-info'>physiozinemagazine@gmail.com</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default ProcessingCharge