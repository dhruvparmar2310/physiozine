import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Webinar.module.scss'
import webinarOne from '../../public/assets/img/webinar/23-08-25.png'
import Image from 'next/image'
import { Ubuntu } from 'next/font/google'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const Webinar = ({ webinars }) => {
    const [modal, setModal] = useState(false)
    const handleClick = (data) => {
        if (data?.sLink) {
            window.open(data?.sLink, '_blank')
        } else {
            setModal(true);
        }
    }

    const handleClose = () => {
        setModal(false)
    }
    return (
        <>
            <Head>
                <title>Webinar | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Magazine of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, PhysioZine Webinar, physiozine webinar, physiotherapy webinar, Physiotherapy Webinar, PhysioZine Webinar Series' />
                <meta name="description" content="India's leading digital magazine for Physiotherapy." />
                <meta property="og:title" content="Webinar | PhysioZine" />
                <meta property="og:description" content="India's leading digital magazine for Physiotherapy." />
                <meta property="og:url" content="https://physiozine.co.in/webinar" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            {/* <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Magazines'} /> */}
            <section className={`${styles?.magazineSection}`}>
                <div className={`${styles?.innerContent} container`}>
                    <div className={styles?.magazineTitle}>
                        <p>Webinar Series</p>
                    </div>

                    <div className={`${styles?.webinarContainer}`}>
                        <Row>
                            {webinars ?
                                webinars?.sort((a, b) => b._id - a._id)?.map(webinar => (
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12} key={webinar._id}>
                                        <div className={`${styles?.webinarCard}`} onClick={() => handleClick(webinar)}>
                                            <div className={`${styles?.topContent}`}>
                                                <Image
                                                    src={webinar?.sImage}
                                                    width={100}
                                                    height={100}
                                                    quality={100}
                                                    title={webinar?.sTitle + ' PhysioZine'}
                                                    alt={webinar?.sTitle}
                                                />
                                            </div>
                                            <div className={`${styles?.bottomContent}`}>
                                                <p>{webinar?.sTitle}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )) :
                                <>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                        <Skeleton count={1} width={360} height={200} borderRadius={10} />
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                        <Skeleton count={1} width={360} height={200} borderRadius={10} />
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                        <Skeleton count={1} width={360} height={200} borderRadius={10} />
                                    </Col>
                                </>
                            }
                        </Row>
                    </div>
                </div>
            </section>

            <Modal show={modal} onHide={handleClose} size='md'>
                <Modal.Header closeButton>
                    <Modal.Title>Webinar Series</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Webinar will be uploaded soon. Subscribe to <Link href='https://www.youtube.com/@physiozine' target='_blank'>PhysioZine Youtube Channel</Link> to stay updated.</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Webinar

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.DEPLOY}/api/webinar`)
    const webinars = await res?.json()
    return { props: { webinars: webinars?.data } }
}
