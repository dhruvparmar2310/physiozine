import React, { useEffect, useState } from 'react'
import styles from '../../styles/Footer.module.scss'
import Link from 'next/link'
import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaBookReader, FaYoutube } from "react-icons/fa"
import { Form } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import logo from '../../../public/assets/img/footer-logo.png'
import Image from 'next/image'
import { Ubuntu } from 'next/font/google'
import grBtn from '../../../public/assets/img/google-review-button.png'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const Footer = () => {
    const { control, watch, handleSubmit, reset } = useForm({ mode: 'all' })
    const [userEmail, setUserEmail] = useState('');
    const [isSmallDevice, setIsSmallDevice] = useState(false);
    const [copyRightYear, setCopyRightYear] = useState(new Date()?.getFullYear())

    const onSubscribe = () => {
        const subject = encodeURIComponent('Subscription to PhysioZine eMagazine');
        const body = encodeURIComponent(`Dear PhysioZine Team,\n\nI would like to subscribe to your PhysioZine eMagazine. I am interested in staying up-to-date with the latest news, insights, and developments in the field of physiotherapy.\n\nPlease add me to your mailing list to receive future issues of the eMagazine.\n\nThank you for your assistance.\n\nBest regards,\n${userEmail}`);
        const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=physiozinemagazine@gmail.com&su=${subject}&body=${body}`;

        // Check if the user is logged in to Gmail
        const isLoggedIn = checkGmailLogin(userEmail);

        if (isSmallDevice) {
            window.open(gmailLink, '_blank');
        } else {
            if (isLoggedIn) {
                // Open the Gmail compose window
                reset()
                const gmailPopup = window.open(gmailLink, '_blank', 'width=800,height=600');
                setGmailWindow(gmailPopup);
            } else {
                // Navigate to the Gmail login screen
                const loginLink = `https://accounts.google.com/AccountChooser?Email=${userEmail}&continue=${encodeURIComponent(gmailLink)}`;

                reset()
                window.open(loginLink, '_blank');
            }

        }
    };

    const checkGmailLogin = (email) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://mail.google.com/mail/u/0/feed/atom`, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 304) {
                    // User is logged in
                    return true;
                } else if (xhr.status === 401) {
                    // User is not logged in
                    return false;
                }
            }
            return false;
        };
        xhr.send();
    };

    useEffect(() => {
        const isSmallDevice = window.innerWidth <= 768; // Adjust the breakpoint as needed
        setIsSmallDevice(isSmallDevice);

        const handleResize = () => {
            const isSmallDevice = window.innerWidth <= 768;
            setIsSmallDevice(isSmallDevice);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        reset({
            emailAddress: ''
        })
    }, [])
    return (
        <>
            <footer id="footer" className={`${styles.footer}`}>

                <div className={`${styles.footer_top}`}>
                    <div className={`${styles?.footerContent}`}>
                        <div className={`${styles.footer_contact}`} style={{ width: '20rem' }}>
                            <h3 title='PhysioZine'>
                                <Link href="/">
                                    {/* PHYSIO<span>ZINE</span> */}
                                    <Image
                                        src={logo}
                                        quality={100}
                                        priority
                                    />
                                </Link>
                            </h3>

                            <div className={`${styles.line}`}></div>

                            <p className={ubuntu?.className}>
                                Advancing Physiotherapy through Knowledge & Innovation
                            </p>

                            <div className={`${styles?.googleReviewBtn}`}>
                                <Image src={grBtn} quality={100} alt='Google Review Button' onClick={() => window.open('https://g.page/r/CRcCHyCfyySeEBE/review', '_blank')} />
                            </div>
                        </div>

                        <div className={`${styles?.linkContent}`}>
                            <div className={`${styles?.footerLinksContent} mt-lg-4`}>
                                <div className={`${styles.footer_links}`}>
                                    <h4 className={ubuntu?.className}>Useful Links</h4>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/" title='Home | PhysioZine' className={ubuntu?.className}>Home</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/aboutUs" title='About Us | PhysioZine' className={ubuntu?.className}>About us</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/magazines" title='Our Latest Articles | PhysioZine' className={ubuntu?.className}>Latest Magazine</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/contact" title='Contact Us | PhysioZine' className={ubuntu?.className}>Contact</Link></li>
                                    </ul>
                                </div>

                                <div className={`${styles.footer_links}`}>
                                    <h4 className={ubuntu?.className}>Quick Links</h4>
                                    <ul>
                                        <li>
                                            <i className="ri-arrow-right-s-line"></i> <Link href="/magazines" title='All Articles | PhysioZine' className={ubuntu?.className}>All Articles</Link>
                                        </li>
                                        <li>
                                            <i className="ri-arrow-right-s-line"></i> <Link href="/supportUs" title='Support Us | PhysioZine' className={ubuntu?.className}>Support Us</Link>
                                        </li>
                                        <li>
                                            <i className="ri-arrow-right-s-line"></i> <Link href="/joinAsEditor" title='Join as Editor | PhysioZine' className={ubuntu?.className}>Join as Editor</Link>
                                        </li>
                                        <li>
                                            <i className="ri-arrow-right-s-line"></i> <Link href="/eventPartner" title='Event Partner | PhysioZine' className={ubuntu?.className}>Event Partner</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className={`${styles.footer_links}`}>
                                    <h4 className={ubuntu?.className}>Additional Links</h4>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/submissionForm" title='Submit Article | PhysioZine' className={ubuntu?.className}>Submit Article</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/terms-and-conditions" title='Our Terms & Conditions | PhysioZine' className={ubuntu?.className}>Terms & Conditions</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/policy/privacyPolicy" title='Privacy Policy | PhysioZine' className={ubuntu?.className}>Privacy Policy</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/policy/editorialPolicy" title='Editorial Policy | PhysioZine' className={ubuntu?.className}>Editorial Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className={`${styles.line}`}></div> */}
                            {/* <div className={`${styles?.contactDetails}`}>
                                <p style={{ fontSize: '16px' }} className='mt-2'>
                                    <span className=''>Phone:<Link href="tel:7984377793"> +91 7984-377-793</Link></span><br />
                                    <span>Email:<Link href="mailto:physiozinemagazine@gmail.com" title='physiozinemagazine@gmail.com'> physiozinemagazine@gmail.com</Link></span><br />
                                </p>
                            </div> */}
                        </div>

                    </div>
                </div >

                <div className={`row ${styles?.footerCopyRight}`} style={{ display: 'flex !important', alignItems: 'center', justifyContent: 'center', alignContent: 'center', padding: '20px', margin: '0 auto' }}>

                    <div className="col-lg-8 p-0">
                        <div className={`${styles.copyright} ${ubuntu?.className}`}>
                            Copyright &copy; <span style={{ fontSize: '13px' }}>{copyRightYear || '2024'}</span>, <strong style={{ color: 'var(--primary-color)' }}>PHYSIO<span style={{ color: '#ddd' }}>ZINE</span></strong>. All Rights Reserved, Subject to Judiciary of Ahmedabad.
                        </div>
                        <div className={`${styles.credits} ${ubuntu?.className}`}>
                            Developed by <Link href="https://dhanparmar.netlify.app" target="_blank" title='Dhruv Parmar'>Dhruv Parmar</Link>
                        </div>
                    </div>
                    <div className={`col-lg-4 p-0 ${styles.social_links}`} style={{ textAlign: 'end' }}>
                        {/* <Link href="https://www.magzter.com/magazines/listAllIssues/30405" target="_blank" className={styles.linkedin} title='Magzter | PhysioZine'>
                            <FaBookReader />
                        </Link> */}
                        <Link href="https://www.linkedin.com/company/physiozine/" target="_blank" className={styles.linkedin} title='LinkedIn | PhysioZine'>
                            <FaLinkedinIn />
                        </Link>
                        <Link href="https://chat.whatsapp.com/JDCR6lerXr95qfKZKzexoV" target="_blank" className={styles.whatsapp} title='Whatsapp | PhysioZine'>
                            <FaWhatsapp />
                        </Link>
                        <Link href="https://www.instagram.com/physiozineofficial/" target="_blank" className={styles.instagram} title='Instagram | PhysioZine'>
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.youtube.com/@physiozine" target="_blank" className={styles.youtube} title='Youtube Channel | PhysioZine'>
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer
