import React, { Fragment, useLayoutEffect, useState } from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Magazine.module.scss'
import { Ubuntu } from 'next/font/google'
import { allMagazine } from '@/data/magazine'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { saveAs } from 'file-saver'
import useMediaQuery from '@/hooks/useMediaQuery'
import { FaDownload } from 'react-icons/fa'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const Magazines = () => {
    const [latestMagazine, setLatestMagazine] = useState([])
    const width = useMediaQuery('(max-width: 576px)')

    useLayoutEffect(() => {
        const currentYear = new Date().getFullYear()

        for (let [key, value] of Object.entries(allMagazine)) {
            if (Number(key) === currentYear) {
                setLatestMagazine(value?.slice(1))
            }
        }
    }, [])
    return (
        <>
            <Head>
                <title>Join As Editor | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Join As Editor of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="Are you a passionate physiotherapist or healthcare professional looking to share your expertise with the world? Join the PhysioZine editorial team and become a part of our mission to provide cutting-edge information and insights to our growing community." />
                <meta property="og:title" content="Join As Editor | PhysioZine" />
                <meta property="og:description" content="Are you a passionate physiotherapist or healthcare professional looking to share your expertise with the world? Join the PhysioZine editorial team and become a part of our mission to provide cutting-edge information and insights to our growing community." />
                <meta property="og:url" content="https://physiozine.vercel.app/joinAsEditor" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Magazines'} />
            <section className={`${styles?.magazineSection}`}>
                <div className={`${styles?.innerContent} container`}>
                    <div className={styles?.magazineTitle}>
                        <p>Latest Magazine</p>
                    </div>
                    <div className={styles?.latestMagazine}>
                        {latestMagazine?.map(article => {
                            return (
                                <tr key={article?._id}>
                                    <div className={`${styles?.articleCard}`}>
                                        <div className={`${styles?.cardImg}`} onClick={() => window.open(article?.eBook)}>
                                            <Image src={article?.sImage} className='img-fluid' priority quality={100} width={100} height={100} alt={article?.sMonth + ', ' + article?.sYear} />
                                        </div>
                                        <div className={`${styles?.cardBody}`}>
                                            {/* <h1 className={ubuntu?.className}>{article?.title}</h1> */}
                                            <p className={ubuntu?.className}>{article?.sMonth}, {article?.sYear}</p>

                                            <Button className={`${styles?.downloadBtn} ${ubuntu?.className}`} variant='info' onClick={() => saveAs(article?.eBook, article?.sMonth + ', ' + article?.sYear)}>
                                                {width ? <span><FaDownload /></span>
                                                    : <>Download <span><FaArrowUpRightFromSquare /></span></>
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </tr>
                            )
                        })}
                    </div>

                    {Object.keys(allMagazine)
                        .sort((a, b) => b - a) // Sort years in descending order
                        .map((year) => (
                            <div key={year}>
                                <div className={styles?.magazineTitle}>
                                    <p>{year}</p>
                                </div>
                                <div className={styles?.latestMagazine}>
                                    {allMagazine[year].map((article) => (
                                        <tr key={article?._id}>
                                            <div className={`${styles?.articleCard}`}>
                                                <div className={`${styles?.cardImg}`} onClick={() => window.open(article?.eBook)}>
                                                    <Image src={article?.sImage} className='img-fluid' priority quality={100} width={100} height={100} alt={article?.sMonth + ', ' + article?.sYear} />
                                                </div>
                                                <div className={`${styles?.cardBody}`}>
                                                    {/* <h1 className={ubuntu?.className}>{article?.title}</h1> */}
                                                    <p className={ubuntu?.className}>{article?.sMonth}, {article?.sYear}</p>

                                                    <Button className={`${styles?.downloadBtn} ${ubuntu?.className}`} variant='info' onClick={() => saveAs(article?.eBook, article?.sMonth + ', ' + article?.sYear)}>
                                                        {width ? <span><FaDownload /></span>
                                                            : <>Download <span><FaArrowUpRightFromSquare /></span></>
                                                        }
                                                    </Button>
                                                </div>
                                            </div>
                                        </tr>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    )
}

export default Magazines