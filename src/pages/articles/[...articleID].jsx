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
import { Abril_Fatface, Comfortaa, Ubuntu } from 'next/font/google'
import { GrFormPrevious, GrPrevious, GrTextAlignFull } from "react-icons/gr"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import msmeLogo from '../../../public/assets/img/License/MSME-Logo.png'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const abrilFatface = Abril_Fatface({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

function ArticleID ({ data }) {
    const router = useRouter()

    const pdfViewRef = useRef(null)

    const { articleID, sArticle, issueId, sIssueName, publishedDate, id } = router.query
    const [articleData, setArticleData] = useState({})

    function goToZenodo (data) {
        let articleCode = data?.split('zenodo.')?.[1]

        window.location.href = `https://zenodo.org/records/${articleCode}`
    }

    useEffect(() => {
        const data = articleID?.length === 2 ? articles?.find(item => item?.title?.includes(articleID?.join(', '))) : articleID?.length === 3 && (articles?.find(item => item?.title?.includes(articleID?.slice(0, 2)?.join(', ')))?.aMagazines?.find(magazine => magazine?._id === id))

        setArticleData(data)
    }, [articleID])

    return (
        <>
            <Head>
                <title>Articles - {sArticle} | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content={`PhysioTrends, Physiotrends, Physio trends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, ${sArticle} of PhysioTrends, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine`} />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiotrendsmagazine@gmail.com or +91 7984377793." />
                <meta property="og:title" content="PhysioTrends: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="PhysioTrends: Explore all the expert articles and latest research on Physiotherapy here." />
                <meta property="og:url" content="https://physiotrends.vercel.app/articles" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="article" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            {/* <BreadCrumb title={'Articles | PhysioTrends'} link={'Home'} current={`Articles - ${sArticle}`} /> */}
            <section className={`${styles?.articles} ${styles?.readArticlePage} container`} style={{ marginTop: '6rem' }}>
                {Object?.keys(articleData)?.length === 0 ? <>
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
                    <div className={`${styles?.articlesContent}`}>
                        {articleID?.length === 2 &&
                            (<>
                                <h1 className={`sectionTitle ${styles?.magazineTitle} ${ubuntu?.className}`}>{articleID?.map(item => item).join(', ')}</h1>
                                <div className={`${styles?.line} mb-3`}></div>

                                <div className='d-flex justify-content-between flex-wrap'>
                                    <div className={styles?.issueList}>
                                        {articleData?.aMagazines?.map(item => {
                                            return (
                                                <div key={item?._id} className={`${styles?.issueDetails}`}>
                                                    <div>
                                                        <span className={`${styles?.articleTag}`}>{item?.eTag}</span> <span>|</span> <span className={`${styles?.date}`}>Published on {publishedDate}</span>
                                                    </div>
                                                    <h1 className={ubuntu?.className}>{item?.sName}</h1>
                                                    <p className={`${styles?.authorName} ${comfortaa?.className}`}> {item?.sAuthor} </p>
                                                    {item?.sDOINo === '-' ? '' : <p className={`${styles?.doiNumber}`}>DOI: <span style={{ cursor: 'pointer' }} onClick={() => goToZenodo(item?.sDOINo)}>{item?.sDOINo}</span></p>}
                                                    <div className={styles?.actionBar}>
                                                        {item?.sPageNo === '-' ? '' : <><span>Page No.: {item?.sPageNo}</span><span className={styles?.pipeSymbol}>|</span></>} <span className={`${styles?.downLoadBtn}`} onClick={() => router.push({
                                                            pathname: `/articles/${articleID?.[0]}/${articleID?.[1]}/${item?.sName}`,
                                                            query: { id: item?._id }
                                                        })}><GrTextAlignFull /> Full Text</span> {item?.sDownLoadUrl === '-' ? '' : <><span className={styles?.pipeSymbol}>|</span> <span className={`${styles?.downLoadBtn}`} onClick={() => saveAs(`${item?.sDownLoadUrl}`, `${item?.sName}`)}><FontAwesomeIcon icon={faFilePdf} /> PDF</span></>}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className={`${styles?.otherIndexing}`}>
                                        <h1 className={ubuntu?.className}>Quick Links</h1>
                                        <div className={`${styles?.line} mb-3`}></div>

                                        <div>
                                            <ul>
                                                <li>
                                                    <Link href='/articles'>All Articles</Link>
                                                </li>
                                                <li>
                                                    <Link href='/submissionForm'>Submit Article</Link>
                                                </li>
                                                <li>
                                                    <Link href='/guidelines'>Author Guidelines</Link>
                                                </li>
                                                <li>
                                                    <Link href='/policy/plagiarismPolicy'>Plagiarism Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href='/policy/editorialPolicy'>Editorial Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href='/policy/referPolicy'>Refer & Earn Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href='/contact'>Contact Us</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }

                        {articleID?.length === 3 &&
                            (<>
                                <h1 className={`sectionTitle ${styles?.magazineTitle} ${ubuntu?.className}`} data-heading='Article'>{articleID?.[2]}</h1>
                                {/* <div className={`${styles?.line} mb-3`}></div> */}

                                <div className={`${styles?.actions} ${ubuntu?.className}`}>
                                    <span><strong>{articleData?.sAuthor}</strong></span>
                                    {articleData?.sDOINo === '-' ? "" : <span>DOI: <span style={{ color: 'var(--primary-color)', marginLeft: '5px', cursor: 'auto' }}>{articleData?.sDOINo}</span></span>}

                                    {articleData?.sDownLoadUrl === '-' ? '' : <span variant='dark' size='sm' onClick={() => saveAs(`${articleData?.sDownLoadUrl}`, `${articleData?.sName}`)}>
                                        <span className={`${styles?.logo}`}><FaDownload /></span> <span>Download PDF</span>
                                    </span>}

                                    <span>{articleID?.slice(0, 2)?.join(', ')}</span>
                                    {articleData?.sPageNo === '-' ? '' : <span>Page No.: {articleData?.sPageNo}</span>}
                                </div>

                                <article>
                                    <div dangerouslySetInnerHTML={{ __html: articleData?.sContent }} className={`mt-4 ${styles.magazineHTML}`} />
                                </article>

                                <div className={`${styles.goBackBtn}`}>
                                    <Button variant='link' className={`${ubuntu?.className}`} onClick={() => router.push({
                                        pathname: `/articles/${articleID?.[0]}/${articleID?.[1]}`,
                                        query: { publishedDate }
                                    })}>
                                        <span>&lt;&lt;</span> <span>Previous Page</span>
                                    </Button>
                                </div>
                            </>)
                        }
                    </div>}

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
