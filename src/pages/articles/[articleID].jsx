import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import { useRouter, withRouter } from 'next/router'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import styles from '../../styles/Articles.module.scss'
import { Button, Table } from 'react-bootstrap'
import { saveAs } from 'file-saver'
import { FaUserCircle, FaEye } from "react-icons/fa"
import { FaDownload } from "react-icons/fa6"
import { articles } from '@/data/articles'
import { Ubuntu } from 'next/font/google'
import { GrFormPrevious, GrPrevious } from "react-icons/gr"

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
function ArticleID ({ data }) {
    const router = useRouter()
    const pdfViewRef = useRef(null)

    const { articleID, sArticle, issueId, sIssueName } = router.query
    const [articleData, setArticleData] = useState([])

    useEffect(() => {
        const data = articles?.find(item => item?._id === issueId)?.aMagazines?.find(magazine => magazine?._id === articleID)
        setArticleData(data)
    }, [articleID])

    return (
        <>
            <Head>
                <title>Articles - {sArticle} | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content={`PhysioTrends, Physiotrends, Physio trends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, ${sArticle} of PhysioTrends, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine`} />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing ISSN Certified E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="PhysioTrends: Explore all the expert articles and latest research on Physiotherapy here." />
                <meta property="og:url" content="https://physiotrends.vercel.app/articles" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="article" />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            {/* <BreadCrumb title={'Articles | PhysioTrends'} link={'Home'} current={`Articles - ${sArticle}`} /> */}
            <section className={`${styles?.articles} ${styles?.readArticlePage} container`} style={{ marginTop: '6rem' }}>
                <div className={`${styles?.articlesContent}`}>
                    <h1 className={`sectionTitle ${styles?.magazineTitle} ${ubuntu?.className}`} data-heading='Article'>{sArticle}:</h1>
                    {/* <div className={`${styles?.line} mb-3`}></div> */}

                    <div className={`${styles?.actions} ${ubuntu?.className}`}>
                        <span><strong>{articleData?.sAuthor}</strong></span>
                        <span>DOI: <span style={{ color: 'var(--primary-color)', marginLeft: '5px', cursor: 'auto' }}>{articleData?.sDOINo}</span></span>
                        <span variant='dark' size='sm' onClick={() => saveAs(`${articleData?.sDownLoadUrl}`, `${articleData?.sName}`)}>
                            <span className={`${styles?.logo}`}><FaDownload /></span> <span>Download PDF</span>
                        </span>
                        <span>{sIssueName}</span>
                        <span>Page No.: {articleData?.sPageNo}</span>
                        {/* <span>Share</span> */}
                    </div>

                    <article>
                        <div dangerouslySetInnerHTML={{ __html: articleData?.sContent }} className={`${ubuntu?.className} mt-4 ${styles.magazineHTML}`} />
                    </article>

                    <div className={`${styles.goBackBtn}`}>
                        <Button variant='link' className={`${ubuntu?.className}`} onClick={() => router.push('/articles')}>
                            <span>&lt;&lt;</span> <span>Previous Page</span>
                        </Button>
                    </div>
                </div>
            </section >
        </>
    )
}

export default withRouter(ArticleID)

// export const getServerSideProps = async ({ params }) => {
//     console.log('articleID :>> ', params);
//     // const articleID = parseInt(params.articleID)
//     // const res = await fetch(`${process.env.LOCALHOST}/api/articles/${articleID}`)
//     // const data = await res.json()
//     const data = { name: 'a' }
//     return { props: { data } }
// }
