import React, { useEffect, useState } from 'react'
import styles from '../../styles/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import TextLogo from '../../../public/assets/img/main-logo.png'
import { Bebas_Neue, Teko, Ubuntu } from 'next/font/google'
import { useRouter } from 'next/router'
import { RiMenu3Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa"
import { useScroll } from 'framer-motion'
import { IoMdHome } from "react-icons/io"

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

function Header () {
  const router = useRouter()
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [dropdownOpen, setDropDownOpen] = useState(false)
  const { scrollY } = useScroll();
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

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
            <h1 className={`${styles.logo} mr-auto`} title={`PhysioTrends`}>
              <Link href='/' style={{ fontWeight: '500' }} passHref>
                <Image src={TextLogo} alt='' quality={100} width={250} height={100} priority />
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
              <li className="active">
                <Link href='/' title='Home | PhysioTrends' className={`${router?.route === '/' && styles?.active} ${ubuntu.className} ${styles?.homeSvg}`} onClick={(e) => handleClick(e, '/')}>{isNavExpanded ? 'Home' : <IoMdHome />}</Link>
              </li>
              <li>
                <Link href={`/articles`} title='Archives | PhysioTrends' className={`${router?.route?.includes('/articles') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/articles')}>Articles</Link>
              </li>
              <li>
                <Link href='/advertise' title='Advertise | PhysioTrends' className={`${router?.route?.includes('/advertise') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/advertise')}>Advertise </Link>
              </li>
              <li>
                <Link href={'/editorialMember'} title='Editorial Members | PhysioTrends' className={`${router?.route?.includes('/editorialMember') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/editorialMember')}>Editorial Members</Link>
              </li>

              <li>
                <Link href={'/academicPartner'} title='Academic Partner | PhysioTrends' className={`${router?.route?.includes('/academicPartner') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/academicPartner')}>Academic Partner</Link>
              </li>

              <li className={`${styles.drop_down}`}>
                <span className={`${styles?.dropDownButton} ${ubuntu.className}`} title='Policies | PhysioTrends' onClick={() => setDropDownOpen(!dropdownOpen)}>Policies <FaChevronDown /></span>
                <ul style={dropdownOpen ? { display: 'block' } : { display: 'none' }}>
                  <li>
                    <Link href={'/terms-and-conditions'} title='Terms & Conditions | PhysioTrends' className={`${router?.route?.includes('/terms-and-conditions') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/terms-and-conditions')}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href={'/policy/disclaimerPolicy'} title='Disclaimer Policy | PhysioTrends' className={`${router?.route?.includes('/policy/disclaimerPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/disclaimerPolicy')}>Disclaimer Policy</Link>
                  </li>
                  <li>
                    <Link href={'/policy/privacyPolicy'} title='Privacy Policy | PhysioTrends' className={`${router?.route?.includes('/policy/privacyPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/privacyPolicy')}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href={'/policy/refundPolicy'} title='Refund Policy | PhysioTrends' className={`${router?.route?.includes('/policy/refundPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/refundPolicy')}>Refund Policy</Link>
                  </li>
                  <li>
                    <Link href={'/policy/plagiarismPolicy'} title='Plagiarism Policy | PhysioTrends' className={`${router?.route?.includes('/policy/plagiarismPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/plagiarismPolicy')}>Plagiarism Policy</Link>
                  </li>
                  <li><Link href={'/policy/editorialPolicy'} title='Editorial Policy | PhysioTrends' className={`${router?.route?.includes('/policy/editorialPolicy') && styles?.active} ${ubuntu.className}`} onClick={(e) => handleClick(e, '/policy/editorialPolicy')}>Editorial Policy</Link></li>
                </ul>
              </li>

              <li>
                <Link href={'/contact'} className={`${router?.route?.includes('/contact') && styles?.active} ${ubuntu.className}`} title='Contact | PhysioTrends' onClick={(e) => handleClick(e, '/contact')}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header 