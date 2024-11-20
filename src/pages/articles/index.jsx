import React, { Fragment, Suspense, useState } from 'react'
import styles from '../../styles/Articles.module.scss'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import { Button, OverlayTrigger, Row, Spinner, Table, Tooltip } from 'react-bootstrap'
import { withRouter } from 'next/router'
// import { articles } from '@/data/articles'
import { MdContentCopy } from "react-icons/md"
import copy from 'clipboard-copy'
import { Bounce, toast } from 'react-toastify'
import { FaDownload } from 'react-icons/fa6'
import { saveAs } from 'file-saver'
import { articles } from '@/data/articles'
import { FaEye, FaUserCircle } from 'react-icons/fa'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['500'], style: ['normal'] })

function Articles ({ data, router }) {
  const [isCopied, setIsCopied] = useState(false)
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);

  const handleCopyLink = async (link) => {
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

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex(index === openAccordionIndex ? -1 : index);
  };
  return (
    <>
      <Head>
        <title>Articles | PhysioTrends</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
        <meta name="description" content="PHYSIOTRENDS is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiotrendsmagazine@gmail.com or +91 7984377793." />
        <meta property="og:title" content="Articles of PhysioTrends | Magazine" />
        <meta property="og:description" content="PhysioTrends: Explore all the expert articles and latest research on Physiotherapy here." />
        <meta property="og:url" content="https://physiotrends.vercel.app/articles" />
        <meta property="og:image" content="assets/img/favicon.jpg" />
        <meta property="og:type" content="article" />
        <link rel="icon" href="assets/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Suspense fallback={<Spinner animation='border' size='md' variant='primary' />}>
        <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Articles'} />
        <section className={`${styles?.articles} container`}>
          <div className={`${styles?.articlesContent}`}>
            <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading='Read'>Our Articles</h1>
            <div className={`${styles?.line}`}></div>

            <div className={`${styles?.contentBody}`}>
              {data?.articles?.map((article, index) => {
                return (
                  <React.Fragment key={article?._id}>
                    <div className={`${styles?.accordion} accordion accordion-flush mt-2`} id='main-accordion'>
                      <article>
                        <div className={`accordion-item`}>
                          <h2 className={`accordion-header`} id={`flush-heading-${index}`} title='Founders of PhysioTrends | PhysioTrends'>
                            <button
                              className={`accordion-button collapsed ${styles.accordionBtn} ${ubuntu?.className}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse-${index}`}
                              aria-expanded={index === openAccordionIndex ? "true" : "false"}
                              aria-controls={`flush-collapse-${index}`}
                              onClick={() => handleAccordionClick(index)}
                            >
                              <div className={`${styles?.bodyHeader}`}>
                                <div><span>{(article?._id) + '.'}</span></div>
                                <div style={{ textAlign: 'left !important' }}><span>{article?.title}</span></div>
                                <div><span>{article?.nMonth}</span></div>
                                <div className='me-2'>
                                  {article?.nMonth === 'Coming Soon...' ? '---' :
                                    <>
                                      <Button
                                        variant='info'
                                        size='sm'
                                        title={`${article?.title} | PhysioTrends`}
                                        style={{ marginLeft: '5px' }}
                                        onClick={() => handleCopyLink(`${process.env.DEPLOY}/articles/${article?._id}?sArticle=${article?.title}`)}
                                      >
                                        <MdContentCopy />
                                      </Button>

                                      <Button
                                        variant='warning'
                                        size='sm'
                                        title={`Download ${article?.title} | PhysioTrends`}
                                        style={{ marginLeft: '5px' }}
                                        onClick={() => saveAs(`${article?.eBook}`, `PhysioTrends_Vol-1_Issue-1`)}
                                      >
                                        <FaDownload />
                                      </Button>
                                    </>
                                  }
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div id={`flush-collapse-${index}`} className={`accordion-collapse collapse ${index === openAccordionIndex ? 'show' : ''}`} data-bs-parent="#main-accordion">
                            <div className={`accordion-body ${styles.accordionBody}`}>
                              <Row className={`${styles?.memberContent}`}>
                                {article?.aMagazines?.length >= 1 ? article?.aMagazines?.map((magazine, index) => {
                                  return (
                                    <Fragment key={index}>
                                      <div className={`${styles?.magazineCard}`}>
                                        <div className={`${styles?.magazineCardHeader}`}>
                                          <span title={`${magazine?.sName} | PhysioTrends`} className={`${styles?.magazineCardTitle} {ubuntu?.className}`}>{magazine?.sName}</span>
                                        </div>
                                        <div className={`${styles?.authorContent}`}>
                                          <span className={`${styles?.author} {ubuntu?.className}`} title={`${magazine?.sAuthor} | PhysioTrends`}><FaUserCircle /> {magazine?.sAuthor}</span>
                                          <span className={`${styles?.pageNumber} {ubuntu?.className}`}>Page No.: {magazine?.sPageNo}</span>
                                        </div>
                                        <p className={`${styles?.number} {ubuntu?.className}`}>DOI: {magazine?.sDOINo}</p>
                                        <div className={`${styles?.functionality}`}>
                                          <Button
                                            variant='warning'
                                            size='sm'
                                            className='me-2'
                                            onClick={(e) => router.push({
                                              pathname: `/articles/${magazine._id}`,
                                              query: { sArticle: magazine.sName, issueId: article._id, sIssueName: article?.title }
                                            })}
                                          >
                                            <FaEye /> Read
                                          </Button>
                                          <Button variant='dark' size='sm' onClick={() => saveAs(`${magazine?.sDownLoadUrl}`, `${magazine?.sName}`)}><FaDownload /> Download</Button>
                                        </div>
                                      </div>
                                    </Fragment>
                                  )
                                }) : <span className={`text-center ${ubuntu?.className}`}>Coming Soon</span>}
                              </Row>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </React.Fragment>
                );
              })}

            </div>

            {/* <span className={`${styles?.notes} {ubuntu?.className} mt-2`}>Note: Publish your Article in upcoming Issue.</span> */}
          </div>
        </section >
      </Suspense >
    </>
  )
}

export default withRouter(Articles)

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.DEPLOY}/api/articles`)
  const data = await res.json()
  return { props: { data } }
}