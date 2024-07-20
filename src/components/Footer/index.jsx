import React, { useEffect, useState } from 'react'
import styles from '../../styles/Footer.module.scss'
import Link from 'next/link'
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa"
import { Form } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import logo from '../../../public/assets/img/footer-logo.png'
import Image from 'next/image'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const Footer = () => {
    const { control, watch, handleSubmit, reset } = useForm({ mode: 'all' })
    const [userEmail, setUserEmail] = useState('');
    const [isSmallDevice, setIsSmallDevice] = useState(false);

    const onSubscribe = () => {
        const subject = encodeURIComponent('Subscription to PhysioTrends eMagazine');
        const body = encodeURIComponent(`Dear PhysioTrends Team,\n\nI would like to subscribe to your PhysioTrends eMagazine. I am interested in staying up-to-date with the latest news, insights, and developments in the field of physiotherapy.\n\nPlease add me to your mailing list to receive future issues of the eMagazine.\n\nThank you for your assistance.\n\nBest regards,\n${userEmail}`);
        const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=physiotrendsmagazine@gmail.com&su=${subject}&body=${body}`;

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
                            <h3 title='PhysioTrends'>
                                <Link href="/">
                                    {/* PHYSIO<span>TRENDS</span> */}
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
                        </div>

                        <div className={`${styles?.linkContent}`}>
                            <div className={`${styles?.footerLinksContent} mt-lg-4`}>
                                <div className={`${styles.footer_links}`}>
                                    <h4 className={ubuntu?.className}>Useful Links</h4>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/" title='Home | PhysioTrends' className={ubuntu?.className}>Home</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/#about" title='About Us | PhysioTrends' className={ubuntu?.className}>About us</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/articles" title='Our Latest Articles | PhysioTrends' className={ubuntu?.className}>Latest Magazine</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/contact" title='Contact Us | PhysioTrends' className={ubuntu?.className}>Contact</Link></li>
                                    </ul>
                                </div>

                                <div className={`${styles.footer_links}`}>
                                    <h4 className={ubuntu?.className}>Quick Links</h4>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/articles" title='All Articles | PhysioTrends' className={ubuntu?.className}>All Articles</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/advertise" title='Advertise with Us | PhysioTrends' className={ubuntu?.className}>Advertisement</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/joinAsEditor" title='Join as Editor | PhysioTrends' className={ubuntu?.className}>Join as Editor</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/eventPartner" title='Event Partner | PhysioTrends' className={ubuntu?.className}>Event Partner</Link></li>
                                    </ul>
                                </div>

                                <div className={`${styles.footer_links}`}>
                                    <h4 className={ubuntu?.className}>Additional Links</h4>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/submit-your-article" title='Submit Article | PhysioTrends' className={ubuntu?.className}>Submit Article</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/terms-and-conditions" title='Our Terms & Conditions | PhysioTrends' className={ubuntu?.className}>Terms & Conditions</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/policy/privacyPolicy" title='Privacy Policy | PhysioTrends' className={ubuntu?.className}>Privacy Policy</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/policy/editorialPolicy" title='Editorial Policy | PhysioTrends' className={ubuntu?.className}>Editorial Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className={`${styles.line}`}></div> */}
                            {/* <div className={`${styles?.contactDetails}`}>
                                <p style={{ fontSize: '16px' }} className='mt-2'>
                                    <span className=''>Phone:<Link href="tel:7984377793"> +91 7984-377-793</Link></span><br />
                                    <span>Email:<Link href="mailto:physiotrendsmagazine@gmail.com" title='physiotrendsmagazine@gmail.com'> physiotrendsmagazine@gmail.com</Link></span><br />
                                </p>
                            </div> */}
                        </div>

                    </div>
                </div >

                <div className={`row ${styles?.footerCopyRight}`} style={{ display: 'flex !important', alignItems: 'center', justifyContent: 'center', alignContent: 'center', padding: '20px', margin: '0 auto' }}>

                    <div className="col-lg-8 p-0">
                        <div className={`${styles.copyright} ${ubuntu?.className}`}>
                            Copyright &copy; <span style={{ fontSize: '13px' }}>2024</span>, <strong style={{ color: 'var(--primary-color)' }}>PHYSIO<span style={{ color: '#ddd' }}>TRENDS</span></strong>. All Rights Reserved, Subject to Judiciary of Ahmedabad.
                        </div>
                        <div className={`${styles.credits} ${ubuntu?.className}`}>
                            Developed by <Link href="https://dhanparmar.netlify.app" target="_blank" title='Dhruv Parmar'>Dhruv Parmar</Link>
                        </div>
                    </div>
                    <div className={`col-lg-4 p-0 ${styles.social_links}`} style={{ textAlign: 'end' }}>
                        <Link href="https://www.linkedin.com/posts/physiotrends_physiotrends-linkedin-activity-7171034285615898625-nQlZ" target="_blank" className={styles.linkedin} title='LinkedIn | PhysioTrends'>
                            <FaLinkedinIn />
                        </Link>
                        <Link href="https://chat.whatsapp.com/JDCR6lerXr95qfKZKzexoV" target="_blank" className={styles.whatsapp} title='Whatsapp | PhysioTrends'>
                            <FaWhatsapp />
                        </Link>
                        <Link href="https://www.instagram.com/physiotrendsofficial/" target="_blank" className={styles.instagram} title='Instagram | PhysioTrends'>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer
