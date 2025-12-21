import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/SupportUs.module.scss'
import { Ubuntu } from 'next/font/google'
import { Table } from 'react-bootstrap'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const Subscribe = () => {
    const columns = ["Sr. No.", "Reach", "Numbers"]
    const data = [
        { _id: 0, sReach: 'Instagram', sNumber: '1,30,048+ Reach in 30 days' },
        { _id: 1, sReach: 'WhatsApp Groups', sNumber: '15+ groups with 3500+ members' },
        { _id: 2, sReach: 'LinkedIn 3 pages', sNumber: '6629+ connections' },
        { _id: 3, sReach: 'City', sNumber: '101+ cities of India' },
        { _id: 4, sReach: 'Countries', sNumber: '14+ countries according to Google Analysis' },
        { _id: 5, sReach: 'Indian Journal of Physical Therapy website', sNumber: '16,534 website views in last 3 months' },
    ]

    const packageColumns = ["Package", "Cost", "Duration", "Key Inclusions"]
    const packageData = [
        {
            _id: 0,
            sPackage: 'Copper',
            sCost: '6000/-',
            sDuration: '3 months',
            sDesc: '<ul><li>One page magazine advertisement (1 Edition)</li><li>Social media Advertisement (1 post per month)</li></ul>'
        },
        {
            _id: 1,
            sPackage: 'Bronze',
            sCost: '15,000/-',
            sDuration: '6 months',
            sDesc: '<ul><li>One page magazine advertisement (2 Edition)</li><li>Social media Advertisement (1 post per month)</li><li>Your company logo in digital magazine as sponsor (2nd page)</li><li>One page advertisement in Hard copy of Indian Journal of Physical Therapy</li><li>Mentions in two live webinars as sponsors</li></ul>'
        },
        {
            _id: 2,
            sPackage: 'Silver',
            sCost: '20,000/-',
            sDuration: '6 months',
            sDesc: '<ul><li>One page magazine advertisement (4 Edition)</li><li>Social media Advertisement (1 post per month)</li><li>Your company logo in digital magazine as sponsor (2nd page and last page)</li><li>One page advertisement in Hard copy of Indian Journal of Physical Therapy</li><li>Mentions in all live webinars as sponsors till 6 months</li></ul>'
        },
        {
            _id: 3,
            sPackage: 'Gold',
            sCost: '30,000/-',
            sDuration: '1 year',
            sDesc: '<ul><li>One page magazine advertisement (6 Edition)</li><li>Social media Advertisement (2 post per month)</li><li>Your company logo in digital magazine as sponsor (2nd page and last page)</li><li>One page advertisement in Hard copy of Indian Journal of Physical Therapy</li><li>Mentions in all live webinars as sponsors till 6 months</li><li>Advertisement on Homepage of IJOPT website for 6 months</li></ul>'
        },
        {
            _id: 4,
            sPackage: 'Platinum',
            sCost: '50,000/-',
            sDuration: '1 year',
            sDesc: '<ul><li>One page magazine advertisement (6 Edition)</li><li>Social media Advertisement (2 post per month)</li><li>Magazine Cover feature (1 edition)</li><li>Sponsored articles in all 6 editions of magazine</li><li>Your company logo in digital magazine as sponsor (1st,2nd page and last page)</li><li>One page advertisement in Hard copy of Indian Journal of Physical Therapy</li><li>Mentions in all live webinars as sponsors till 1 year</li><li>Advertisement on Homepage of IJOPT website for 1 year</li></ul>'
        },
    ]
    return (
        <>
            <Head>
                <title>Subscribe | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Support PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, Subscribe Physiozine, Subscription Plans of PhysioZine' />
                <meta name="description" content="At PhysioZine, we are dedicated to empowering physiotherapists, healthcare professionals, and students with valuable resources, insights, and opportunities to advance the field of physiotherapy. As a non-profit organization, we rely on the generosity and support of our community to sustain and expand our initiatives." />
                <meta property="og:title" content="PhysioZine: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content=" At PhysioZine, we are dedicated to empowering physiotherapists, healthcare professionals, and students with valuable resources, insights, and opportunities to advance the field of physiotherapy. As a non-profit organization, we rely on the generosity and support of our community to sustain and expand our initiatives." />
                <meta property="og:url" content="https://physiozine.vercel.app/subscribe" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current='Subscribe' />
            <section className={`${styles?.supportUs}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Subscribe PhysioZine</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <Table responsive bordered striped className={`text-center ${styles?.packageTable}`}>
                            <thead>
                                <tr>
                                    {columns?.map((item, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <th>{item}</th>
                                            </React.Fragment>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map(item => {
                                    return (
                                        <tr key={item?._id}>
                                            <td>{item?._id + 1}</td>
                                            <td>{item?.sReach}</td>
                                            <td>{item?.sNumber}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>

                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Subscription Plan's</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <Table responsive bordered striped className={`text-center ${styles?.packageTable}`}>
                            <thead>
                                <tr>
                                    {packageColumns?.map((item, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <th className='text-center'>{item}</th>
                                            </React.Fragment>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {packageData?.map(item => {
                                    return (
                                        <tr key={item?._id}>
                                            <td>{item?.sPackage}</td>
                                            <td>{item?.sCost}</td>
                                            <td>{item?.sDuration}</td>
                                            <td><div dangerouslySetInnerHTML={{ __html: item?.sDesc }} /></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe
