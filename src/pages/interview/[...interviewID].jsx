import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import { useRouter, withRouter } from 'next/router'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import styles from '../../styles/Interview.module.scss'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { saveAs } from 'file-saver'
import { FaUserCircle, FaEye, FaLinkedinIn, FaInstagram, FaWikipediaW } from "react-icons/fa"
import { FaDownload } from "react-icons/fa6"
import { interviewCollection } from '@/data/interviewData'
import { Abril_Fatface, Comfortaa, Ubuntu } from 'next/font/google'
import { GrFormPrevious, GrPrevious, GrTextAlignFull } from "react-icons/gr"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import msmeLogo from '../../../public/assets/img/License/MSME-Logo.png'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import { LuLink } from 'react-icons/lu'
import { Bounce, toast } from 'react-toastify'
import copy from 'clipboard-copy'
import TextLogo from '../../../public/assets/img/logo-1.png'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const abrilFatface = Abril_Fatface({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

function InterviewID ({ data }) {
    const router = useRouter()

    const { interviewID } = router.query
    const [interviewDetails, setInterviewDetails] = useState({})
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
        if (interviewID !== undefined) {
            const data = interviewCollection?.find(item => item?.name === interviewID?.[0])
            setInterviewDetails(data)
        }
    }, [interviewID])
    console.log('interviewDetails :>> ', interviewDetails);

    const handleCopyLink = async (link) => {
        console.log('link :>> ', link);
        try {
            await copy(link)
            setIsCopied(true)
            toast.success('Copied to clipboard', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                toastId: 'copied'
            })
        } catch (err) {
            setIsCopied(false)
            toast.error('Failed to copy link', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                toastId: 'copied'
            })
        }
    }
    return (
        <>
            <Head>
                <title>Interview - {interviewID?.[0]} | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content={`PhysioZine, PhysioZine, Physio zine, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, ${interviewID?.[0]} of PhysioZine, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine`} />
                <meta name="description" content="PHYSIOZINE is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiozinemagazine@gmail.com or +91 7984377793." />
                <meta property="og:title" content="PhysioZine: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="PhysioZine: Explore all the expert articles and latest research on Physiotherapy here." />
                <meta property="og:url" content="https://physiozine.vercel.app/articles" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="article" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            {/* <BreadCrumb title={'Articles | PhysioZine'} link={'Home'} current={`Articles - ${sArticle}`} /> */}
            <section className={`${styles?.interview} container`} style={{ marginTop: '6rem' }}>
                {Object?.keys(interviewDetails)?.length === 0 ? <>
                    <div>
                        <Skeleton count={1} width={280} height={30} />
                        <Skeleton count={1} height={5} />

                        <Skeleton count={1} className='mt-4' width={260} height={20} />
                        <Skeleton count={1} className='mt-3' width={580} height={35} />
                        <Skeleton count={1} className='mt-1' width={200} height={35} />
                        <Skeleton count={1} className='mt-3' width={230} height={20} />
                        <Skeleton count={1} width={200} height={20} />

                        <div className='d-flex gap-3 mt-2 mb-4'>
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                        </div>

                        <Skeleton count={1} className='mt-4' width={260} height={20} />
                        <Skeleton count={1} className='mt-3' width={580} height={35} />
                        <Skeleton count={1} className='mt-1' width={200} height={35} />
                        <Skeleton count={1} className='mt-3' width={230} height={20} />
                        <Skeleton count={1} width={200} height={20} />

                        <div className='d-flex gap-3 mt-2 mb-4'>
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                        </div>

                        <Skeleton count={1} className='mt-4' width={260} height={20} />
                        <Skeleton count={1} className='mt-3' width={580} height={35} />
                        <Skeleton count={1} className='mt-1' width={200} height={35} />
                        <Skeleton count={1} className='mt-3' width={230} height={20} />
                        <Skeleton count={1} width={200} height={20} />

                        <div className='d-flex gap-3 mt-2'>
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                        </div>

                        <Skeleton count={1} className='mt-4' width={260} height={20} />
                        <Skeleton count={1} className='mt-3' width={580} height={35} />
                        <Skeleton count={1} className='mt-1' width={200} height={35} />
                        <Skeleton count={1} className='mt-3' width={230} height={20} />
                        <Skeleton count={1} width={200} height={20} />

                        <div className='d-flex gap-3 mt-2 mb-4'>
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                        </div>
                    </div>
                </> :
                    <div className={`${styles?.interviewContent}`}>
                        <div className={styles?.topBarDetails}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <div className={styles?.topLeftContent}>
                                        <Image src={interviewDetails?.img} alt={interviewDetails?.name} quality={100} className='img-fluid' width={100} height={100} />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <div className={styles?.topRightContent}>
                                        <div className={styles?.interviewerName}>{interviewDetails?.name}</div>
                                        <p className={styles?.designation}>{interviewDetails?.designation}</p>
                                        <p className={styles?.interviewTitle}><strong>Interview Topic:</strong> {interviewDetails?.sTitle}</p>

                                        <div className={styles?.socialLinks}>
                                            {interviewDetails?.aSocial?.wiki &&
                                                <span className={styles?.wikiBtn} onClick={() => window.open(interviewDetails?.aSocial?.wiki, '_blank')}><FaWikipediaW /> Wikipedia</span>
                                            }

                                            {interviewDetails?.aSocial?.linkedIn &&
                                                <span className={styles?.linkedInBtn} onClick={() => window.open(interviewDetails?.aSocial?.linkedIn, '_blank')}><FaLinkedinIn /> LinkedIn</span>
                                            }

                                            {interviewDetails?.aSocial?.instagram &&
                                                <span className={styles?.instagramBtn} onClick={() => window.open(interviewDetails?.aSocial?.instagram, '_blank')}><FaInstagram /> Instagram</span>
                                            }

                                            <span onClick={() => handleCopyLink(`${process.env.DEPLOY}interview/${interviewID}`)}><LuLink /> Copy</span>
                                        </div>

                                        <Image className={styles?.mainLogo} src={TextLogo} alt='PhysioZine | Magazine' quality={100} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <article>
                            <div dangerouslySetInnerHTML={{ __html: interviewDetails?.sContent }} className={`mt-4 ${styles.interviewHTML}`} />
                        </article>

                        {/* <div className={`${styles.goBackBtn}`}>
                                    <Button variant='link' className={`${ubuntu?.className}`} onClick={() => router.push({
                                        pathname: `/articles/${articleID?.[0]}/${articleID?.[1]}`,
                                        query: { publishedDate }
                                    })}>
                                        <span>&lt;&lt;</span> <span>Previous Page</span>
                                    </Button>
                                </div> */}
                    </div>}

            </section >
        </>
    )
}

export default withRouter(InterviewID)