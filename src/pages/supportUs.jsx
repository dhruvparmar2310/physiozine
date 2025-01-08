import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/SupportUs.module.scss'
import { Col, Form, Row } from 'react-bootstrap'
import Image from 'next/image'
import physioBrothersLogo from '../../public/assets/img/Clients/physiobrothers.png'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const SupportUs = () => {
    return (
        <>
            <Head>
                <title>Support Us | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Advertise of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOZINE is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiozinemagazine@gmail.com or +91 7984377793." />
                <meta property="og:title" content="PhysioZine: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
                <meta property="og:description" content="Promote your brand to targeted physio audiences - Advertise with PhysioZine." />
                <meta property="og:url" content="https://physiozine.vercel.app/advertise" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Support Us'} />
            <section className={`${styles?.supportUs}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Support PhysioZine</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            At PhysioZine, we are dedicated to empowering physiotherapists, healthcare professionals, and students with valuable resources, insights, and opportunities to advance the field of physiotherapy. As a non-profit organization, we rely on the generosity and support of our community to sustain and expand our initiatives.
                        </p>
                    </div>

                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Financial Support</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            Your financial contribution plays a vital role in helping us maintain and improve our digital magazine, as well as develop new content, programs, and resources for our growing community. Your support can help us:
                        </p>
                        <ul>
                            <li>
                                <span>Enhance the quality and frequency of our magazine, ensuring our readers have access to the latest research, best practices, and thought leadership in physiotherapy.</span>
                            </li>
                            <li>
                                <span>Organize engaging webinars, workshops, and educational events that provide professional development opportunities for our community.</span>
                            </li>
                            <li>
                                <span>Invest in innovative digital tools and technologies that improve the user experience on our platform.</span>
                            </li>
                            <li>
                                <span>Expand our outreach and marketing efforts to connect with more physiotherapists, students, and healthcare professionals worldwide.</span>
                            </li>
                        </ul>
                    </div>

                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Contribute to Our Magazine</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            In addition to financial support, we also welcome physiotherapy professionals, researchers, and subject matter experts to contribute articles and content to our digital magazine. By sharing your expertise and insights, you can:
                        </p>
                        <ul>
                            <li>
                                <span>Showcase your thought leadership and elevate your personal and professional brand.</span>
                            </li>
                            <li>
                                <span>Inspire and educate our community, helping them stay at the forefront of the latest advancements in the field.</span>
                            </li>
                            <li>
                                <span>Expand your network and collaborate with like-minded individuals who are passionate about the future of physiotherapy.</span>
                            </li>
                            <li>
                                <span>Receive recognition and acknowledgment for your valuable contributions.</span>
                            </li>
                        </ul>

                        <p>
                            Whether you choose to support us financially or through your contributions to our magazine, your involvement will be instrumental in helping PhysioZine continue our mission of empowering the physiotherapy community. Together, we can drive positive change and make a lasting impact on the healthcare landscape.
                        </p>

                        <p>
                            To learn more about how you can support PhysioZine, please visit "<span>PhysioZine</span>" or contact us directly. We appreciate your support and look forward to working with you.
                        </p>
                    </div>

                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Benefits You Get:</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <ul>
                            <li>
                                <span>
                                    <strong>Visibility and Brand Exposure</strong>: By sponsoring PhysioZine, your brand gains exposure to a targeted audience of physiotherapists and healthcare professionals. This can increase brand recognition and awareness within the industry.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <strong>Credibility and Authority</strong>: Aligning your brand with a reputable publication like PhysioZine can enhance your credibility and position your company as an authority in the field of physiotherapy.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <strong>Networking Opportunities</strong>: Supporting PhysioZine can provide opportunities for networking with professionals in the physiotherapy community, potentially leading to collaborations, partnerships, or business opportunities.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <strong>Access to Content and Research</strong>: As a sponsor, you may gain access to exclusive content, research findings, or industry insights published by PhysioZine, which can inform your business strategies and product development efforts.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <strong>Community Engagement</strong>: Demonstrating your support for the physiotherapy community by sponsoring a valuable resource like PhysioZine can enhance your brand's reputation and foster goodwill among professionals in the field.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <strong> Marketing and Promotion</strong>: Sponsoring PhysioZine may come with opportunities for marketing and promotion, such as featuring your brand in newsletters, social media posts, or promotional materials associated with the magazine.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <strong>Recruitment and Talent Acquisition</strong>: Engaging with the physiotherapy community through sponsorship can help attract top talent to your organization, as professionals may perceive your company as supportive and invested in their field.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <strong>Corporate Social Responsibility (CSR)</strong>: Supporting initiatives like PhysioZine demonstrates your commitment to CSR by contributing to the advancement of knowledge and resources in the physiotherapy field.
                                </span>
                            </li>
                        </ul>

                        <p>
                            Overall, sponsoring PhysioZine can yield both tangible and intangible benefits for your company, ranging from increased brand visibility and credibility to access to valuable resources and networking opportunities within the physiotherapy community.
                        </p>
                    </div>
                </div>

                <div className={`${styles?.allSponsor} container`}>
                    <h1 className={`${styles?.subTitle} ${ubuntu?.className}`}>Sponsor</h1>
                    <div className={`${styles?.sponsorContent} mt-3`}>
                        <div className={`${styles?.sponsorImg}`}>
                            <Image
                                src={physioBrothersLogo}
                                alt='PhysioBrothers Logo'
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SupportUs
