import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/Magazine.module.scss'
import { Ubuntu } from 'next/font/google'
import { allMagazine } from '@/data/magazine'
import Image from 'next/image'
import { Button, Col, Row } from 'react-bootstrap'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { saveAs } from 'file-saver'
import useMediaQuery from '@/hooks/useMediaQuery'
import { FaChevronDown, FaDownload } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const Magazines = () => {
    const router = useRouter()
    const [latestMagazine, setLatestMagazine] = useState([])
    const [dropdownOpen, setDropDownOpen] = useState({
        author: false,
        joinTeam: false,
        services: false,
        policies: false,
    })
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const width = useMediaQuery('(max-width: 576px)')

    useLayoutEffect(() => {
        const currentYear = new Date().getFullYear()

        for (let [key, value] of Object.entries(allMagazine)) {
            if (Number(key) === currentYear) {
                setLatestMagazine(value?.slice(1))
            }
        }
    }, [])

    const handleClick = (e, path) => {
        e?.preventDefault()

        setIsNavExpanded(false)
        router?.push(path)
    }

    useEffect(() => {
        if (width) {
            // if user scrolls 100px down, close the nav menu
            const handleScroll = () => {
                if (window.scrollY > 1) {
                    setDropDownOpen({
                        author: false,
                        joinTeam: false,
                        services: false,
                        policies: false,
                    })
                    setIsNavExpanded(false)
                }
            }
            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [width])

    const allServiceRoutes = router?.route?.includes('/interview') || router?.route?.includes('/advertise') || router?.route?.includes('/academicPartner') || router?.route?.includes('/be-featured') || router?.route?.includes('/academicPartner') || router?.route?.includes('/call-for-interview') || router?.route?.includes('/academicPartner') || router?.route?.includes('/guidelines') || router?.route?.includes('/submissionForm') || router?.route?.includes('/processing-charge') || router?.route?.includes('/eventPartner') || router?.route?.includes('/joinAsEditor')
    return (
        <>
            <Head>
                <title>Magazines | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Magazine of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="India's leading digital magazine for Physiotherapy." />
                <meta property="og:title" content="Magazines | PhysioZine" />
                <meta property="og:description" content="India's leading digital magazine for Physiotherapy." />
                <meta property="og:url" content="https://physiozine.co.in/magazines" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            {/* <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Magazines'} /> */}
            <section className={`${styles?.magazineSection}`}>
                <div className={styles.magazineNav}>
                    <nav className={isNavExpanded ? `${styles.nav_menu} ${styles.expanded} d-lg-block` : `${styles.nav_menu} d-lg-block`}
                    >
                        <ul>
                            <li className={styles?.aboutUs}>
                                <span title='Services | PhysioZine' className={`${allServiceRoutes && styles?.active} ${ubuntu.className}`}
                                    onClick={() => width ? setDropDownOpen({
                                        author: !dropdownOpen.author,
                                        joinTeam: false,
                                        services: false,
                                        policies: false,
                                    }) : ''}
                                >Authors Tool <FaChevronDown /></span>
                                <div className={styles?.aboutUsContent} style={width ? (dropdownOpen?.author ? { display: 'block' } : { display: 'none' }) : undefined}>
                                    <Row>
                                        <Col lg={3} md={4} sm={12}>
                                            {/* <p>Authors Tool</p> */}
                                            <ul className={styles?.dropdownMenu}>
                                                <li>
                                                    <Link href='/guidelines' title='Guidelines | PhysioZine' className={`${router?.route?.includes('/guidelines') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/guidelines')}>Guidelines </Link>
                                                </li>
                                                <li>
                                                    <Link href={'/submissionForm'} title='Submit Article | PhysioZine' className={`${router?.route?.includes('/submissionForm') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/submissionForm')}>Submit Article</Link>
                                                </li>
                                                <li>
                                                    <Link href={'/processing-charge'} title='Processing Charge | PhysioZine' className={`${router?.route?.includes('/processing-charge') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/processing-charge')}>Processing Charge</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </li>
                            <li className={styles?.aboutUs}>
                                <span title='Services | PhysioZine' className={`${allServiceRoutes && styles?.active} ${ubuntu.className}`}
                                    onClick={() => width ? setDropDownOpen({
                                        author: false,
                                        joinTeam: !dropdownOpen.joinTeam,
                                        policies: false,
                                        services: false
                                    }) : ''}
                                >Join Our Team <FaChevronDown /></span>
                                <div className={styles?.aboutUsContent} style={width ? (dropdownOpen?.joinTeam ? { display: 'block' } : { display: 'none' }) : undefined}>
                                    <Row>
                                        <Col lg={3} md={4} sm={12}>
                                            {/* <p>Join Our Team</p> */}
                                            <ul className={styles?.dropdownMenu}>
                                                <li>
                                                    <Link href='/eventPartner' title='Event Partner | PhysioZine' className={`${router?.route?.includes('/eventPartner') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/eventPartner')}>Event Partner </Link>
                                                </li>
                                                <li>
                                                    <Link href={'/joinAsEditor'} title='Join as Editor | PhysioZine' className={`${router?.route?.includes('/joinAsEditor') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/joinAsEditor')}>Join as Editor</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </li>
                            <li>
                                <Link href={'/editorialMember'} title='Editorial Members | PhysioZine' className={`${router?.route?.includes('/editorialMember') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/editorialMember')}>Editorial Members</Link>
                            </li>
                            <li className={styles?.aboutUs}>
                                <span title='Services | PhysioZine' className={`${allServiceRoutes && styles?.active} ${ubuntu.className}`}
                                    onClick={() => width ? setDropDownOpen({
                                        author: false,
                                        joinTeam: false,
                                        policies: false,
                                        services: !dropdownOpen.services,
                                    }) : ''}
                                >Our Services <FaChevronDown /></span>
                                <div className={styles?.aboutUsContent} style={width ? (dropdownOpen?.services ? { display: 'block' } : { display: 'none' }) : undefined}>
                                    <Row>
                                        <Col lg={3} md={4} sm={12}>
                                            {/* <p>Our Services</p> */}
                                            <ul className={styles?.dropdownMenu}>
                                                <li>
                                                    <Link href='/interview' title='Interview | PhysioZine' className={`${router?.route?.includes('/interview') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/interview')}>Interview</Link>
                                                </li>
                                                <li>
                                                    <Link href='/advertise' title='Advertise | PhysioZine' className={`${router?.route?.includes('/advertise') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/advertise')}>Advertise </Link>
                                                </li>
                                                <li>
                                                    <Link href={'/be-featured'} title='Be Featured | PhysioZine' className={`${router?.route?.includes('/be-featured') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/be-featured')}>Be Featured</Link>
                                                </li>
                                                <li>
                                                    <Link href={'/call-for-interview'} title='Call for Interview | PhysioZine' className={`${router?.route?.includes('/call-for-interview') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/call-for-interview')}>Call for Interview</Link>
                                                </li>
                                                <li>
                                                    <Link href={'/academicPartner'} title='Academic Partner | PhysioZine' className={`${router?.route?.includes('/academicPartner') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/academicPartner')}>Academic Partner</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </li>
                            <li className={styles?.aboutUs}>
                                <span title='Services | PhysioZine' className={`${allServiceRoutes && styles?.active} ${ubuntu.className}`}
                                    onClick={() => width ? setDropDownOpen({
                                        policies: !dropdownOpen.policies,
                                        author: false,
                                        joinTeam: false,
                                        services: false,
                                    }) : ''}
                                >Policies <FaChevronDown /></span>
                                <div className={styles?.aboutUsContent} style={width ? (dropdownOpen.policies ? { display: 'block' } : { display: 'none' }) : undefined}>
                                    <Row>
                                        <Col lg={3} md={4} sm={12}>
                                            {/* <p>Policies</p> */}
                                            <ul className={styles?.dropdownMenu}>
                                                <li>
                                                    <Link href={'/terms-and-conditions'} title='Terms & Conditions | PhysioZine' className={`${router?.route?.includes('/terms-and-conditions') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/terms-and-conditions')}>Terms & Conditions</Link>
                                                </li>
                                                <li>
                                                    <Link href={'/policy/disclaimerPolicy'} title='Disclaimer Policy | PhysioZine' className={`${router?.route?.includes('/policy/disclaimerPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/disclaimerPolicy')}>Disclaimer Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href={'/policy/privacyPolicy'} title='Privacy Policy | PhysioZine' className={`${router?.route?.includes('/policy/privacyPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/privacyPolicy')}>Privacy Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href={'/policy/referPolicy'} title='Refer & Earn Policy | PhysioZine' className={`${router?.route?.includes('/policy/referPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/referPolicy')}>Refer & Earn Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href={'/policy/refundPolicy'} title='Refund Policy | PhysioZine' className={`${router?.route?.includes('/policy/refundPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/refundPolicy')}>Refund Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href={'/policy/plagiarismPolicy'} title='Plagiarism Policy | PhysioZine' className={`${router?.route?.includes('/policy/plagiarismPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/plagiarismPolicy')}>Plagiarism Policy</Link>
                                                </li>
                                                <li><Link href={'/policy/editorialPolicy'} title='Editorial Policy | PhysioZine' className={`${router?.route?.includes('/policy/editorialPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/editorialPolicy')}>Editorial Policy</Link></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={`${styles?.innerContent} container`}>
                    {/* <div className={styles?.magazineTitle}>
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
                                            <h1 className={ubuntu?.className}>{article?.title}</h1>
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
                    </div> */}

                    {Object.keys(allMagazine)
                        .sort((a, b) => b - a) // Sort years in descending order
                        .map((year) => (
                            <div key={year}>
                                <div className={styles?.magazineTitle}>
                                    <p>{year}</p>
                                </div>
                                <div className={styles?.latestMagazine}>
                                    {allMagazine[year]?.sort((a, b) => b._id - a._id)?.map((article) => (
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