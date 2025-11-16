import React from 'react'
import styles from '../styles/EditorialMember.module.scss'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import Image from 'next/image'
import { Accordion, Card, Col, Row } from 'react-bootstrap'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const EditorialMember = ({ data }) => {
    const founders = data?.members?.filter(item => item?.type === 'Founder')
    const chiefEditor = data?.members?.find(item => item?.type === 'ChiefEditor')
    const associateEditors = data?.members?.filter(item => item?.type === 'AssociateEditors')
    const advisoryMembers = data?.members?.filter(item => item?.type === 'AdvisoryMembers')
    const editors = data?.members?.filter(item => item?.type === 'Editors')
    const reviewers = data?.members?.filter(item => item?.type === 'Reviewers')
    return (
        <>
            <Head>
                <title>Editorial Members | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Editorial Members of PhysioZine, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOZINE is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiozinemagazine@gmail.com or +91 7984377793." />
                <meta property="og:title" content="PhysioZine: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="All Editorial Members of PhysioZine" />
                <meta property="og:url" content="https://physiozine.vercel.app/editorialMember" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'magazines'} current={'Editorial Members'} />
            <section className={`${styles?.editorialMember} container`}>
                <div className={`accordion accordion-flush mt-3`} id='main-accordion'>
                    <div className={`accordion-item`}>
                        <h2 className={`accordion-header ${ubuntu?.className}`} id={`flush-heading-1`} title='Founders of PhysioZine | PhysioZine'>
                            <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-1`} aria-expanded="true" aria-controls={`flush-collapse-1`}>
                                Founders / Patron
                            </button>
                        </h2>
                        <div id={`flush-collapse-1`} className={`accordion-collapse collapse show`} data-bs-parent="#main-accordion">
                            <div className={`accordion-body ${styles.accordionBody}`}>
                                <Row className={`${styles?.memberContent}`}>
                                    {founders?.map(founder => {
                                        return (
                                            <React.Fragment key={founder?._id}>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className={`${styles?.memberCard}`}>
                                                        <div className={`${styles?.memberProfile}`}>
                                                            <Image src={founder?.profile} alt={founder?.name + 'profile'} quality={100} width={100} height={100} priority />
                                                        </div>
                                                        <div className={`${styles?.memberCardBody}`}>
                                                            <h3 className={`${styles?.doctorName} ${ubuntu?.className}`}>{founder?.name}</h3>
                                                            <span className={`${styles?.occupation} ${ubuntu?.className}`}>{founder?.occupation || ''}</span>
                                                            <ul>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{founder?.education}</li>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{founder?.designation}</li>
                                                                <li className={`${styles?.details}`}>
                                                                    {typeof founder?.role === 'string' ? '' : founder?.role?.map((item, i) => {
                                                                        return (
                                                                            <React.Fragment key={i}>
                                                                                <p className={`mb-1 ${ubuntu?.className}`}>{item}</p>
                                                                            </React.Fragment >
                                                                        )
                                                                    })}
                                                                </li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Address: {founder?.address}</li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Email Address: {founder?.emailAddress}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </React.Fragment >
                                        )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className={`accordion-item mt-2`}>
                        <h2 className={`accordion-header ${ubuntu?.className}`} id={`flush-heading-2`} title='Chief Editor of PhysioZine | PhysioZine'>
                            <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-2`} aria-expanded="false" aria-controls={`flush-collapse-2`}>
                                Chief Editor
                            </button>
                        </h2>
                        <div id={`flush-collapse-2`} className={`accordion-collapse collapse `} data-bs-parent="#main-accordion">
                            <div className={`accordion-body ${styles.accordionBody}`}>
                                <Row className={`${styles?.memberContent}`}>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className={`${styles?.memberCard}`}>
                                            <div className={`${styles?.memberProfile}`}>
                                                <Image src={chiefEditor?.profile} alt={chiefEditor?.name + 'profile'} quality={100} width={100} height={100} priority />
                                            </div>
                                            <div className={`${styles?.memberCardBody}`}>
                                                <h3 className={`${styles?.doctorName} ${ubuntu?.className}`}>{chiefEditor?.name}</h3>
                                                <span className={`${styles?.occupation} ${ubuntu?.className}`}>{chiefEditor?.occupation || ''}</span>
                                                <ul>
                                                    <li className={`${styles?.details} ${ubuntu?.className}`}>{chiefEditor?.education}</li>
                                                    <li className={`${styles?.details} ${ubuntu?.className}`}>{chiefEditor?.designation}</li>
                                                    <li className={`${styles?.details}`}>
                                                        {typeof chiefEditor?.role === 'string' ? '' : chiefEditor?.role?.map((item, i) => {
                                                            return (
                                                                <React.Fragment key={i}>
                                                                    <p className={`mb-1 ${ubuntu?.className}`}>{item}</p>
                                                                </React.Fragment >
                                                            )
                                                        })}
                                                    </li>
                                                    <li className={`${styles?.details} ${styles?.contact}`}>Address: {chiefEditor?.address}</li>
                                                    <li className={`${styles?.details} ${styles?.contact}`}>Email Address: {chiefEditor?.emailAddress}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className={`accordion-item mt-2`}>
                        <h2 className={`accordion-header ${ubuntu?.className}`} id={`flush-heading-3`} title='Associate Editors of PhysioZine | PhysioZine'>
                            <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-3`} aria-expanded="false" aria-controls={`flush-collapse-3`}>
                                Associate Editors
                            </button>
                        </h2>
                        <div id={`flush-collapse-3`} className={`accordion-collapse collapse `} data-bs-parent="#main-accordion">
                            <div className={`accordion-body ${styles.accordionBody}`}>
                                <Row className={`${styles?.memberContent}`}>
                                    {associateEditors?.map(editors => {
                                        return (
                                            <React.Fragment key={editors?._id}>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className={`${styles?.memberCard}`}>
                                                        <div className={`${styles?.memberProfile}`}>
                                                            <Image src={editors?.profile} alt={editors?.name + 'profile'} quality={100} width={100} height={100} priority />
                                                        </div>
                                                        <div className={`${styles?.memberCardBody}`}>
                                                            <h3 className={`${styles?.doctorName} ${ubuntu?.className}`}>{editors?.name}</h3>
                                                            <span className={`${styles?.occupation} ${ubuntu?.className}`}>{editors?.occupation || ''}</span>
                                                            <ul>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{editors?.education}</li>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{editors?.designation}</li>
                                                                <li className={`${styles?.details}`}>
                                                                    {typeof editors?.role === 'string' ? '' : editors?.role?.map((item, i) => {
                                                                        return (
                                                                            <React.Fragment key={i}>
                                                                                <p className={`mb-1 ${ubuntu?.className}`}>{item}</p>
                                                                            </React.Fragment >
                                                                        )
                                                                    })}
                                                                </li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Address: {editors?.address}</li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Email Address: {editors?.emailAddress}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </React.Fragment >
                                        )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className={`accordion-item mt-2`}>
                        <h2 className={`accordion-header ${ubuntu?.className}`} id={`flush-heading-4`} title='Advisory Members of PhysioZine | PhysioZine'>
                            <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-4`} aria-expanded="false" aria-controls={`flush-collapse-4`}>
                                Advisory Members
                            </button>
                        </h2>
                        <div id={`flush-collapse-4`} className={`accordion-collapse collapse `} data-bs-parent="#main-accordion">
                            <div className={`accordion-body ${styles.accordionBody}`}>
                                <Row className={`${styles?.memberContent}`}>
                                    {advisoryMembers?.map(members => {
                                        return (
                                            <React.Fragment key={members?._id}>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className={`${styles?.memberCard}`}>
                                                        <div className={`${styles?.memberProfile}`}>
                                                            <Image src={members?.profile} alt={members?.name + 'profile'} quality={100} width={100} height={100} priority />
                                                        </div>
                                                        <div className={`${styles?.memberCardBody}`}>
                                                            <h3 className={`${styles?.doctorName} ${ubuntu?.className}`}>{members?.name}</h3>
                                                            <span className={`${styles?.occupation} ${ubuntu?.className}`}>{members?.occupation || ''}</span>
                                                            <ul>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{members?.education}</li>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{members?.designation}</li>
                                                                <li className={`${styles?.details}`}>
                                                                    {typeof members?.role === 'string' ? '' : members?.role?.map((item, i) => {
                                                                        return (
                                                                            <React.Fragment key={i}>
                                                                                <p className={`mb-1 ${ubuntu?.className}`}>{item}</p>
                                                                            </React.Fragment >
                                                                        )
                                                                    })}
                                                                </li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Address: {members?.address}</li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Email Address: {members?.emailAddress}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </React.Fragment >
                                        )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className={`accordion-item mt-2`}>
                        <h2 className={`accordion-header ${ubuntu?.className}`} id={`flush-heading-5`} title='Editors of PhysioZine | PhysioZine'>
                            <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-5`} aria-expanded="false" aria-controls={`flush-collapse-5`}>
                                Editors
                            </button>
                        </h2>
                        <div id={`flush-collapse-5`} className={`accordion-collapse collapse `} data-bs-parent="#main-accordion">
                            <div className={`accordion-body ${styles.accordionBody}`}>
                                <Row className={`${styles?.memberContent}`}>
                                    {editors?.map(editors => {
                                        return (
                                            <React.Fragment key={editors?._id}>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className={`${styles?.memberCard}`}>
                                                        <div className={`${styles?.memberProfile}`}>
                                                            <Image src={editors?.profile} alt={editors?.name + 'profile'} quality={100} width={100} height={100} priority />
                                                        </div>
                                                        <div className={`${styles?.memberCardBody}`}>
                                                            <h3 className={`${styles?.doctorName} ${ubuntu?.className}`}>{editors?.name}</h3>
                                                            <span className={`${styles?.occupation} ${ubuntu?.className}`}>{editors?.occupation || ''}</span>
                                                            <ul>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{editors?.education}</li>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{editors?.designation}</li>
                                                                <li className={`${styles?.details}`}>
                                                                    {typeof editors?.role === 'string' ? '' : editors?.role?.map((item, i) => {
                                                                        return (
                                                                            <React.Fragment key={i}>
                                                                                <p className={`mb-1 ${ubuntu?.className}`}>{item}</p>
                                                                            </React.Fragment >
                                                                        )
                                                                    })}
                                                                </li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Address: {editors?.address}</li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Email Address: {editors?.emailAddress}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </React.Fragment >
                                        )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className={`accordion-item mt-2`}>
                        <h2 className={`accordion-header ${ubuntu?.className}`} id={`flush-heading-6`} title='Reviewers of PhysioZine | PhysioZine'>
                            <button className={`accordion-button collapsed ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-6`} aria-expanded="false" aria-controls={`flush-collapse-6`}>
                                Reviewers
                            </button>
                        </h2>
                        <div id={`flush-collapse-6`} className={`accordion-collapse collapse `} data-bs-parent="#main-accordion">
                            <div className={`accordion-body ${styles.accordionBody}`}>
                                <Row className={`${styles?.memberContent}`}>
                                    {reviewers?.map(reviewers => {
                                        return (
                                            <React.Fragment key={reviewers?._id}>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className={`${styles?.memberCard}`}>
                                                        <div className={`${styles?.memberProfile}`}>
                                                            <Image src={reviewers?.profile} alt={reviewers?.name + 'profile'} quality={100} width={100} height={100} priority />
                                                        </div>
                                                        <div className={`${styles?.memberCardBody}`}>
                                                            <h3 className={`${styles?.doctorName} ${ubuntu?.className}`}>{reviewers?.name}</h3>
                                                            <span className={`${styles?.occupation} ${ubuntu?.className}`}>{reviewers?.occupation || ''}</span>
                                                            <ul>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{reviewers?.education}</li>
                                                                <li className={`${styles?.details} ${ubuntu?.className}`}>{reviewers?.designation}</li>
                                                                <li className={`${styles?.details}`}>
                                                                    {typeof reviewers?.role === 'string' ? '' : reviewers?.role?.map((item, i) => {
                                                                        return (
                                                                            <React.Fragment key={i}>
                                                                                <p className={`mb-1 ${ubuntu?.className}`}>{item}</p>
                                                                            </React.Fragment >
                                                                        )
                                                                    })}
                                                                </li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Address: {reviewers?.address}</li>
                                                                <li className={`${styles?.details} ${styles?.contact}`}>Email Address: {reviewers?.emailAddress}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </React.Fragment >
                                        )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default EditorialMember

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.DEPLOY}/api/editorialMembers`)
    const data = await res.json()
    return { props: { data } }
}
