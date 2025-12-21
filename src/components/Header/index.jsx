import React, { useEffect, useState } from 'react'
import styles from '../../styles/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import TextLogo from '../../../public/assets/img/logo-1.png'
import MainLogo from '../../../public/assets/img/main-logo.png'
import WebinarLogo from '../../../public/assets/img/webinar-logo.png'
import { Bebas_Neue, Teko, Ubuntu } from 'next/font/google'
import { useRouter } from 'next/router'
import { RiMenu3Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa"
import { useScroll } from 'framer-motion'
import { IoMdHome } from "react-icons/io"
import { Col, Row } from 'react-bootstrap'
import useMediaQuery from '@/hooks/useMediaQuery'
import InstallPWA from '../InstallPWA'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

function Header () {
  const router = useRouter()
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [dropdownOpen, setDropDownOpen] = useState(false)
  const { scrollY } = useScroll();
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const width = useMediaQuery('(max-width: 576px)')

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      // Change this value to the number of pixels you want to scroll before showing the shadow
      if (latest > 100 && !shouldShowShadow) {
        setShouldShowShadow(true);
      } else if (latest <= 100 && shouldShowShadow) {
        setShouldShowShadow(false);
      }
    });

    return () => unsubscribe();
  }, [scrollY, shouldShowShadow]);

  const handleClick = (e, path) => {
    e?.preventDefault()

    setIsNavExpanded(false)
    router?.push(path)
  }

  const allServiceRoutes = router?.route?.includes('/interview') || router?.route?.includes('/advertise') || router?.route?.includes('/academicPartner') || router?.route?.includes('/be-featured') || router?.route?.includes('/academicPartner') || router?.route?.includes('/call-for-interview') || router?.route?.includes('/academicPartner') || router?.route?.includes('/guidelines') || router?.route?.includes('/submissionForm') || router?.route?.includes('/processing-charge') || router?.route?.includes('/eventPartner') || router?.route?.includes('/joinAsEditor')
  return (
    <>
      <header id='header' className={`fixed-top bg-white ${styles.header} ${shouldShowShadow ? styles.headerScrolled : ''}`}
        animate={{
          boxShadow: shouldShowShadow
            ? '0px 2px 15px rgba(0, 0, 0, 0.187)'
            : "none"
        }}
        transition={{ duration: 0.5 }}
      >
        <div className={`d-flex align-items-center ${styles.home}`}>
          <div className={isNavExpanded ? `${styles.top_header}` : `${styles.top_headerWeb}`}>
            <h1 className={`${styles.logo} mr-auto`} title='PhysioZine'>
              <Link href='/' style={{ fontWeight: '500' }} passHref>
                <Image
                  src={router.route.includes('webinar') ?
                    WebinarLogo : router.route === '/' || router.route === '/conferences' || router.route === '/contact' || router.route === '/aboutUs' || router.route === '/subscribe'
                      ? MainLogo :
                      TextLogo
                  }
                  alt=''
                  quality={100}
                  width={250}
                  height={100}
                  priority
                />
              </Link>
            </h1>
            <button className={`${styles.menu}`}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <RiMenu3Fill />
            </button>
          </div>
          <nav className={isNavExpanded ? `${styles.nav_menu} ${styles.expanded} d-lg-block` : `${styles.nav_menu} d-lg-block`}
          >
            <ul>
              <li>
                <Link href={`/aboutUs`} title='About Us | PhysioZine' className={`${router?.route?.includes('/aboutUs') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/aboutUs')}>About Us</Link>
              </li>
              <li>
                <Link href={`/magazines`} title='Magazines | PhysioZine' className={`${router?.route?.includes('/magazines') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/magazines')}>Magazines</Link>
              </li>

              <li className="active">
                <Link href='/webinar' title='Webinar | PhysioZine' className={`${router?.route === '/webinar' && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/webinar')}>Webinar</Link>
              </li>
              {/* <li className={styles?.aboutUs}>
                <span title='Services | PhysioZine' className={`${allServiceRoutes && styles?.active} ${ubuntu.className}`}
                  onClick={() => width ? setDropDownOpen(!dropdownOpen) : ''}
                >Our Services <FaChevronDown /></span>
                <div className={styles?.aboutUsContent} style={width ? (dropdownOpen ? { display: 'block' } : { display: 'none' }) : undefined}>
                  <Row>
                    <Col lg={3} md={4} sm={12}>
                      <p>Our Services</p>
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
                    <Col lg={3} md={4} sm={12}>
                      <p>Authors Tool</p>
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
                    <Col lg={3} md={4} sm={12}>
                      <p>Join Our Team</p>
                      <ul className={styles?.dropdownMenu}>
                        <li>
                          <Link href='/eventPartner' title='Event Partner | PhysioZine' className={`${router?.route?.includes('/eventPartner') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/eventPartner')}>Event Partner </Link>
                        </li>
                        <li>
                          <Link href={'/joinAsEditor'} title='Join as Editor | PhysioZine' className={`${router?.route?.includes('/joinAsEditor') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/joinAsEditor')}>Join as Editor</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                      <p>Policies</p>
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
              </li> */}
              {/* <li>
                <Link href={'/editorialMember'} title='Editorial Members | PhysioZine' className={`${router?.route?.includes('/editorialMember') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/editorialMember')}>Editorial Members</Link>
              </li> */}
              <li>
                <Link href={'/conferences'} title='Conferences | PhysioZine' className={`${router?.route?.includes('/conferences') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/conferences')}>Conferences</Link>
              </li>
              <li>
                <Link href='https://ijopt.co.in' title='PhysioZine Journal' className={`${ubuntu.className}`} onClick={(e) => handleClick(e, 'https://ijopt.co.in')}>Journal</Link>
              </li>
              <li>
                <Link href={'/subscribe'} title='Subscribe | PhysioZine' className={`${router?.route?.includes('/subscribe') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/subscribe')}>Subscribe</Link>
              </li>
              <li>
                <Link href={'/contact'} className={`${router?.route?.includes('/contact') && styles?.active} ${ubuntu.className}`} title='Contact | PhysioZine' onClick={(e) => handleClick(e, '/contact')}>
                  Contact
                </Link>
              </li>
              <li>
                <InstallPWA />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header 