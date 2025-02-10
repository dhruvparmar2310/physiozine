import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter, Ubuntu } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Hero from "@/components/Hero";
import HomePageArticles from "@/components/HomePageArticles";
import googleLogo from '../../public/assets/img/webAvailability/Google-Logo.png'
import googleScholarLogo from '../../public/assets/img/webAvailability/google-scholar.jpg'
import magzterLogo from '../../public/assets/img/webAvailability/magzter_logo.png'
import doiLogo from '../../public/assets/img/webAvailability/DOI_logo.png'
import zenodoLogo from '../../public/assets/img/webAvailability/zenodo.png'
import openAccessLogo from '../../public/assets/img/webAvailability/Open_Access_logo.png'
import openAireLogo from '../../public/assets/img/webAvailability/OpenAire_Logo.jpg'
import readwhereLogo from '../../public/assets/img/webAvailability/readwhere.jpg'
import rgLogo from '../../public/assets/img/webAvailability/researchgate.png'
import amLogo from '../../public/assets/img/webAvailability/am.jpeg'
import orcidLogo from '../../public/assets/img/webAvailability/orcid.logo.png'
import ccLogo from '../../public/assets/img/License/cc.jpeg'
import msmeLogo from '../../public/assets/img/License/MSME-Logo.png'
import linkedinLogo from '../../public/assets/img/webAvailability/Linkedin-Logo.png'
import { members } from "@/data/editorialMembers";
import physiothonline from '../../public/assets/img/associated/physioth-online.jpeg'
import smartPT from '../../public/assets/img/associated/smart-pt.jpeg'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import mainLogo from '../../public/assets/img/logo-1.png'
import zoteroLogo from '../../public/assets/img/webAvailability/Zotero_logo.png'
import dataCiteLogo from '../../public/assets/img/webAvailability/DataCite-Commons.png'
import mendeleyLogo from '../../public/assets/img/webAvailability/Mendeley_Logo_Vertical.png'
import openScholarLogo from '../../public/assets/img/webAvailability/openscholar.png'
import bookLogo from '../../public/assets/img/fundamentals-of-electrotherapy-book.png'
import jaypeeDigitalLogo from '../../public/assets/img/header-jaypee.png'
import DOILogo from '../../public/assets/img/DOI-Foundation-Logo.png'

//* ALL SVG ELEMENTS
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FaCity, FaUsers } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faCity, faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { Button, Row, Col, Table, Container } from "react-bootstrap";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'], style: ['normal'] })
const inter = Inter({ subsets: ["latin"] });

export default function Home () {
  const router = useRouter()
  const width = useMediaQuery('(max-width: 576px)')

  const aboutSectionRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '300px', });
  const [actionBarRef, actionBarInView] = useInView({ triggerOnce: true, rootMargin: '300px', });

  const [network, setNetwork] = useState(22376)
  const [cityCount, setCityCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [copyRightYear, setCopyRightYear] = useState(new Date()?.getFullYear())
  const [partnerButtons, setPartnerButtons] = useState({
    book: true,
    workshop: false,
    course: false,
    sportEvent: false
  })

  useEffect(() => {
    let networkInterval = null;
    let cityInterval = null;
    let countryCountInterval = null;
    let teamInterval = null;

    // networkInterval = setInterval(() => {
    //   if (network < 19, 317) {
    //     setNetwork((prevCount) => prevCount + 1);
    //   } else {
    //     clearInterval(networkInterval);
    //   }
    // }, 1);

    cityInterval = setInterval(() => {
      if (cityCount < 101) {
        setCityCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(cityInterval);
      }
    }, 10);

    countryCountInterval = setInterval(() => {
      if (countryCount <= 10) {
        setCountryCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(countryCountInterval);
      }
    }, 10);

    teamInterval = setInterval(() => {
      if (teamCount < members?.length) {
        setTeamCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(teamCount);
      }
    }, 5);

    return () => {
      clearInterval(networkInterval);
      clearInterval(cityInterval);
      clearInterval(countryCountInterval);
      clearInterval(teamInterval);
    };
  }, [network, cityCount, teamCount, countryCount]);

  const fadeUpAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView || actionBarInView) {
      controls.start('visible');
    }
  }, [controls, inView, actionBarInView]);

  const handleClick = () => {
    router.push('https://physiotherapyonline.net/')
  }
  return (
    <>
      <Head>
        <title>PhysioZine | Magazine</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='PhysioZine, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
        <meta name="description" content="PHYSIOZINE is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiozinemagazine@gmail.com or +91 7984377793." />
        <meta property="og:title" content="PhysioZine: India's #1 PT E-Magazine Empowering You with Expert Articles & Latest Research" />
        <meta property="og:description" content="PHYSIOZINE is India’s fastest growing digital magazine with DOI and Peer reviewed content. Contact Us at physiozinemagazine@gmail.com or +91 7984377793." />
        <meta property="og:url" content="https://physiozine.vercel.app/" />
        <meta property="og:image" content="assets/img/favicon.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="assets/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className={`${styles.mainLayout}`}>
        <Hero width={width} />

        <section id="associated" className={`${styles?.associated} py-0`}>
          <div className={styles?.license}>
            <h1 className={`sectionTitle text-center`} data-heading='License & Registration' title='License & Registration | PhysioZine'></h1>

            <div className={`${styles?.innerContent}`}>
              <div className={`${styles?.leftSide} container`}>
                <div>
                  <Image
                    src={msmeLogo}
                    alt="MSME Logo"
                    quality={100}
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={ccLogo}
                    alt="CC Logo"
                    quality={100}
                    priority
                    onClick={() => router.push('https://en.wikipedia.org/wiki/Creative_Commons_license', { target: '_blank' })}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles?.mediaPartner}`}>
          <div className="container">
            <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading='Media Partner with PhysioZine:' title='Media Partner | PhysioZine'> Amplify Your Event’s Reach</h1>

            <div className={`${styles?.innerContent}`}>
              <div>
                <p>
                  Are you organizing a conference, workshop, webinar, physiotherapy course, book launch, or sports event? Partner with PhysioZine and amplify your reach through our established platform dedicated to the world of physiotherapy and wellness.
                </p>
                <Button type='button' onClick={() => router.push('/mediaPartner')}><span className="me-1">Learn More</span> <span><FaArrowRight /></span></Button>

                <h1 className={`sectionTitle my-3 ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading='Our'> Partnered Events:</h1>
                <div className={`${styles?.tabs}`}>
                  <Button className={partnerButtons?.book && styles?.active} onClick={() => setPartnerButtons({ book: true })}>Book</Button>
                  <Button className={partnerButtons?.course && styles?.active} onClick={() => setPartnerButtons({ course: true })}>CPD Courses</Button>
                  <Button className={partnerButtons?.workshop && styles?.active} onClick={() => setPartnerButtons({ workshop: true })}>Workshop/ Webinar</Button>
                  <Button className={partnerButtons?.sportEvent && styles?.active} onClick={() => setPartnerButtons({ sportEvent: true })}>Sport Events</Button>
                </div>

                <div className={`${styles?.tabContent}`}>
                  {partnerButtons?.book && <>
                    <div className={`${styles?.upcomingDetailCard} ${ubuntu?.className}`}>
                      <div className={`${styles?.cardDetails} ${ubuntu?.className}`}>
                        <h1 className={`${ubuntu?.className} text-uppercase`}>Fundamentals of Electrotherapy and Biomedical Physics</h1>
                        <p className='mt-4'>Author: Dr. Ashish Kakkad</p>
                        <p>ISBN No.: 9789350909850</p>
                        <p>DOI: 10.5005/jp/books/18476</p>
                        <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('https://www.jaypeedigital.com/book/9789350909850')}>More Detail</Button>
                      </div>
                      <div className={styles?.middleImg}>
                        <Image
                          src={bookLogo}
                          alt='Book Logo'
                          loading='lazy'
                          quality={100}
                          className={`img-fluid ${styles?.bookImage}`}
                        />
                      </div>
                      <div className={styles?.lastDetails}>
                        <p>Publisher</p>
                        <Image
                          src={jaypeeDigitalLogo}
                          alt='Jaypee Digital Logo'
                          loading='lazy'
                          quality={100}
                          className="img-fluid"
                          onClick={() => router.push('https://www.marwadiuniversity.ac.in/faculty-of-physiotherapy/')}
                        />

                        <p className='mt-3'>Media Partner</p>
                        <Image
                          src={mainLogo}
                          alt='PhysioZine Logo'
                          loading='lazy'
                          quality={100}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </>}
                  {partnerButtons?.course && <>
                    <div className={`${styles?.upcomingDetailCard} ${ubuntu?.className}`}>
                      <div className={`${styles?.cardDetails} ${ubuntu?.className}`}>
                        <h1 className={`${ubuntu?.className} text-uppercase`}>Physiotherapy Online</h1>
                        <p className='mt-4'>
                          Our Online Physiotherapy Courses Leading the Physiotherapy CPD Courses Industry worldwide.
                        </p>
                        <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('https://physiotherapyonline.net/')}><span className="me-1">Enroll Now</span> <span><FaArrowRight /></span></Button>
                      </div>
                    </div>
                  </>}
                  {partnerButtons?.workshop && <>
                    <div className={`${styles?.comingSoonContent}`}>
                      <h1>Coming Soon...</h1>
                    </div>
                  </>}
                  {partnerButtons?.sportEvent && <>
                    <div className={`${styles?.comingSoonContent}`}>
                      <h1>Coming Soon...</h1>
                    </div>
                  </>}
                </div>
              </div>
            </div>
          </div>
        </section >

        <section className={`${styles?.actionBar} container`}>
          <h1 className={`sectionTitle ${styles?.sectionTitle}`} data-heading='Our Services' title='Our Services | PhysioZine'>Be a part of PhysioZine</h1>

          <div className={`${styles?.actions} ${ubuntu?.className} mt-4`}>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <div
                  className={`${styles?.actionCard} ${ubuntu?.className}`}
                >
                  <div className={`${styles?.cardHeader}`}>
                    <h5 className={`${ubuntu?.className}`}>Submit Your Article</h5>
                  </div>
                  <div className={`${styles?.cardBody}`}>
                    <p className={`${ubuntu?.className}`}>Submit your articles details for further process.</p>
                    <span>
                      <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('/submissionForm')}>
                        <span className="me-1">Submit</span> <span><FaArrowRight /></span>
                      </Button>
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className="mt-lg-0 mt-md-0 mt-3">
                <div
                  className={`${styles?.actionCard} ${ubuntu?.className}`}
                >
                  <div className={`${styles?.cardHeader}`}>
                    <h5 className={`${ubuntu?.className}`}>Author Guidelines</h5>
                  </div>
                  <div className={`${styles?.cardBody}`}>
                    <p className={`${ubuntu?.className}`}>Author Guidelines for Paper Publication and case study.</p>
                    <span>
                      <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('/guidelines')}>
                        <span className="me-1">View Now</span> <span><FaArrowRight /></span>
                      </Button>
                    </span>
                  </div>
                </div>
              </Col>
              {/* <Col lg={4} md={6} sm={12} className="mt-lg-0 mt-md-0 mt-3">
                <div
                  className={`${styles?.actionCard} ${ubuntu?.className}`}
                >
                  <div className={`${styles?.cardHeader}`}>
                    <h5 className={`${ubuntu?.className}`}>Online Courses</h5>
                  </div>
                  <div className={`${styles?.cardBody}`}>
                    <p className={`${ubuntu?.className}`}>Explore certified courses by PhysioZine Academy</p>
                    <span>
                      <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('https://physiozineacademy.graphy.com/courses')}>
                        <span className="me-1">Explore Now</span> <span><FaArrowRight /></span>
                      </Button>
                    </span>
                  </div>
                </div>
              </Col> */}
              <Col lg={4} md={6} sm={12} className="mt-lg-0 mt-md-0 mt-3">
                <div
                  className={`${styles?.actionCard} ${ubuntu?.className}`}
                >
                  <div className={`${styles?.cardHeader}`}>
                    <h5 className={`${ubuntu?.className}`}>International Online Courses</h5>
                  </div>
                  <div className={`${styles?.cardBody}`}>
                    <p className={`${ubuntu?.className}`}>Get access to Certified International Courses.</p>
                    <span>
                      <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => handleClick()}>
                        <span className="me-1">Visit Now</span> <span><FaArrowRight /></span>
                      </Button>
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className="mt-lg-3 mt-md-0 mt-3">
                <div
                  className={`${styles?.actionCard} ${ubuntu?.className}`}
                >
                  <div className={`${styles?.cardHeader}`}>
                    <h5 className={`${ubuntu?.className}`}>Join As Instructor</h5>
                  </div>
                  <div className={`${styles?.cardBody}`}>
                    <p className={`${ubuntu?.className}`}>Be a part of Leading Digital Network of Physiotherapy.</p>
                    <span>
                      <Button className={`${styles?.readMoreBtn} ${ubuntu?.className}`} onClick={() => router.push('/joinAsInstructor')}>
                        <span className="me-1">Join Us</span> <span><FaArrowRight /></span>
                      </Button>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className={`${styles?.doiFinder} py-0`}>
          <div className={`${styles?.innerContent} container`}>
            <div className={styles?.cardDesign}>
              <Row>
                <Col lg={7} md={12}>
                  <div className={styles?.leftContent}>
                    <h1 className={`sectionTitle text-center`} data-heading='' title='Check Your DOI Number | PhysioZine'>Check Your DOI Number</h1>
                    <p
                      className={`${ubuntu?.className}`}
                    >
                      Check your publication's DOI number easily on given website link by entering the required details.
                    </p>
                    <Button onClick={() => window.open('https://www.doi.org/', '_blank')}>Visit here</Button>
                  </div>
                </Col>
                <Col lg={5} md={12}>
                  <div className={styles?.rightContent}>
                    <Image src={DOILogo} quality={100} alt='DOI Foundation Logo' />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section id="associated" className={`${styles?.associated} py-0`}>
          <div className={styles?.partner}>
            <h1 className={`sectionTitle text-center`} data-heading='Our International Educational Partner' title='Our International Association | PhysioZine'></h1>

            <div className={`${styles?.innerContent}`}>
              <div className={`${styles?.leftSide} container`}>
                <div>
                  <Image
                    src={physiothonline}
                    alt="Physiotherapy Online Logo"
                    quality={100}
                    priority
                    onClick={() => router.push('https://physiotherapyonline.net/')}
                  />
                </div>
                <div>
                  <Image
                    src={smartPT}
                    alt="Smart PT Acedamy Logo"
                    quality={100}
                    priority
                    onClick={() => router.push('https://smartptacademy.com/')}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${styles?.about}`} ref={aboutSectionRef}>
          <div className="container">
            <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`} data-heading='About' title='About Us | PhysioZine'>PhysioZine</h1>

            <div className={`${styles?.innerContent}`}>
              <motion.p
                className={`${styles?.desc} mt-5`}
                ref={ref}
                variants={fadeUpAnimation}
                initial="hidden"
                animate={controls}
                transition={{ duration: width ? 0.5 : 1, ease: 'easeInOut' }}
              >
                PHYSIOZINE is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy.
              </motion.p>

              <div className={`${styles?.visionContent} mt-5`}>
                <Row>
                  <Col lg={6} md={12} sm={12}>
                    <motion.div
                      className={`${styles?.card}`}
                      ref={ref}
                      variants={fadeUpAnimation}
                      initial="hidden"
                      animate={controls}
                      transition={{ duration: 1, delay: 0.8, ease: 'linear' }}
                    >
                      <h1 className={`${styles?.cardTitle} ${ubuntu?.className}`}>Vision</h1>
                      <div className={`${styles?.line}`}></div>
                      <p className={`${styles?.cardBody}`}>
                        "Empowering physiotherapists through timely evidence, fostering a collaborative community for elevated standards."
                      </p>
                    </motion.div>
                  </Col>
                  <Col lg={6} md={12} sm={12} className="mt-lg-0 mt-3">
                    <motion.div
                      className={`${styles?.card}`}
                      ref={ref}
                      variants={fadeUpAnimation}
                      initial="hidden"
                      animate={controls}
                      transition={{ duration: 1, delay: 0.8, ease: 'linear' }}
                    >
                      <h1 className={`${styles?.cardTitle} ${ubuntu?.className}`}>Mission</h1>
                      <div className={`${styles?.line}`}></div>
                      <p className={`${styles?.cardBody}`}>
                        "Connect physiotherapists globally with cutting-edge knowledge, building a stronger profession."
                      </p>
                    </motion.div>
                  </Col>
                </Row>
              </div>

              <div className={`${styles?.aboutUsDetails} mt-3`}>
                <Table hover responsive borderless>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Title</td>
                      <td className={`${styles?.dataValue}`}>PhysioZine</td>
                    </tr>
                    <tr>
                      <td>Frequency</td>
                      <td className={`${styles?.dataValue}`}>6/12</td>
                    </tr>
                    <tr>
                      <td>ISSN No.</td>
                      <td className={`${styles?.dataValue}`}>Under Process</td>
                    </tr>
                    <tr>
                      <td>MSME Reg. No.</td>
                      <td className={`${styles?.dataValue}`}>GJ-01-0443513</td>
                    </tr>
                    <tr>
                      <td>Founder</td>
                      <td className={`${styles?.dataValue}`}>Dr. Darshan Parmar</td>
                    </tr>
                    <tr>
                      <td>Chief Editor</td>
                      <td className={`${styles?.dataValue}`} title="Dr. Jaspreet Kaur Kang | Chief Editor of PhysioZine">Dr. Jaspreet Kaur Kang</td>
                    </tr>
                    <tr>
                      <td>Copyright</td>
                      <td className={`${styles?.dataValue}`}>PhysioZine &copy; {copyRightYear || '2024'}, All rights Reserved.</td>
                    </tr>
                    <tr>
                      <td>Starting Year</td>
                      <td className={`${styles?.dataValue}`}>2024</td>
                    </tr>
                    <tr>
                      <td>Subject</td>
                      <td className={`${styles?.dataValue}`}>Medical Science, Physiotherapy</td>
                    </tr>
                    <tr>
                      <td>Language</td>
                      <td className={`${styles?.dataValue}`}>English</td>
                    </tr>
                    <tr>
                      <td>Publication Format</td>
                      <td className={`${styles?.dataValue}`}>Online</td>
                    </tr>
                    <tr>
                      <td>Email Address</td>
                      <td className={`${styles?.dataValue}`} title="Contact Us | Email Address of PhysioZine">physiozinemagazine@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Phone No.</td>
                      <td className={`${styles?.dataValue}`} title="Contact Us | Phone Number of PhysioZine">+91 7984-377-793</td>
                    </tr>
                    <tr>
                      <td>Website</td>
                      <td className={`${styles?.dataValue}`} title="PhysioZine | Website of PhysioZine">https://physiozine.vercel.app</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td className={`${styles?.dataValue}`} title='Contact Us | Address of PhysioZine'>
                        {/* <ol>
                          <li>
                            PhysioZine, Aatishya 100, Nr. Lubi Corporate Road, Oppo. Tulsi Status, Ahmedabad, Gujarat - 382470
                          </li>
                          <li>
                            PhysioZine, Kuldevi Krupa, Sahkar Society Street No. - 3, Sahkar Main Road, Rajkot, Gujarat - 360002
                          </li>
                        </ol> */}
                        PhysioZine, Kuldevi Krupa, Sahkar Society Street No. - 3, Sahkar Main Road, Rajkot, Gujarat - 360002
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section >

        <section className={`${styles?.counter}`}>
          <div className={`${styles?.innerContent} container`}>
            <Row>
              {/* <Col lg={4}>
                <h4 className={`${ubuntu?.className}`}>Empower Yourself with Knowledge, Anytime, Anywhere.</h4>
              </Col> */}
              <Col lg={3}>
                <div className={`${styles?.counterCard}`}>
                  <div><FontAwesomeIcon icon={faChartSimple} color='#c1c1c1' /></div>
                  <div className={`${styles?.dataValue}`}>{network}+</div>
                  <div className={`${styles?.dataLabel} ${ubuntu?.className}`}>Network</div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className="mt-lg-0 mt-md-0 mt-3">
                <div className={`${styles?.counterCard}`}>
                  <div><FontAwesomeIcon icon={faEarthAsia} color='#5391e1' /></div>
                  <div className={`${styles?.dataValue}`}>{countryCount}+</div>
                  <div className={`${styles?.dataLabel} ${ubuntu?.className}`}>Country</div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className="mt-lg-0 mt-md-0 mt-3">
                <div className={`${styles?.counterCard}`}>
                  <div><FontAwesomeIcon icon={faCity} color='#68f568' /></div>
                  <div className={`${styles?.dataValue}`}>{cityCount}+</div>
                  <div className={`${styles?.dataLabel} ${ubuntu?.className}`}>Indian Cities</div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className="mt-lg-0 mt-md-3 mt-3">
                <div className={`${styles?.counterCard}`}>
                  <div><FaUsers style={{ color: '#ff8fa3' }} /></div>
                  <div className={`${styles?.dataValue}`}>{teamCount}</div>
                  <div className={`${styles?.dataLabel} ${ubuntu?.className}`}>Editorial Team</div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section id="magazines" className={`${styles?.articles}`}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h1 className={`sectionTitle`} data-heading='Our Latest' title="Our Latest Research Magazines | PhysioZine">Magazines</h1>
              <div className={`text-center mt-4 ${styles?.viewMoreBtn} ${ubuntu?.className}`}>
                <span onClick={() => router.push('/articles')}>View More</span>
              </div>
            </div>
            <HomePageArticles />
          </div>
        </section>

        <section id="webAvailable" className={`${styles?.webAvailable}`}>
          <h1 className={`sectionTitle text-center`} data-heading='Major Index' title="Major Index | PhysioZine"></h1>

          <div className={`${styles?.innerContent} container mt-4`}>
            <div className={`${styles?.logoContent}`}>
              <Container className='text-center p-0'>
                <Row>
                  <Col>
                    <Image src={googleLogo} onClick={() => router.push('https://google.com/')} alt="" quality={100} loading='lazy' />
                  </Col>
                  <Col>
                    <Image src={googleScholarLogo} onClick={() => router.push('https://scholar.google.com/')} alt="" quality={100} loading='lazy' />
                  </Col>
                  <Col>
                    <Image src={magzterLogo} alt="" quality={100} loading='lazy' onClick={() => router.push('https://www.magzter.com/magazines/listAllIssues/30405')} />
                  </Col>
                  <Col>
                    <Image src={doiLogo} alt="" quality={100} loading='lazy' />
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Col>
                    <Image src={zenodoLogo} alt="" quality={100} loading='lazy' onClick={() => router.push('https://zenodo.org/search?q=physiozine&l=list&p=1&s=10&sort=bestmatch')} />
                  </Col>
                  <Col>
                    <Image src={openAccessLogo} alt="" quality={100} loading='lazy' />
                  </Col>
                  <Col>
                    <Image src={openAireLogo} alt="" quality={100} loading='lazy' onClick={() => router.push('https://explore.openaire.eu/search/find/research-outcomes?fv0=physiozine&f0=q&page=1')} />
                  </Col>
                  <Col>
                    <Image src={readwhereLogo} alt="" quality={100} loading='lazy' onClick={() => router.push('https://www.readwhere.com/search?q=physiozine')} />
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Col>
                    <Image src={rgLogo} alt="" quality={100} loading='lazy' onClick={() => router.push('https://www.researchgate.net/profile/Darshan-Parmar-2')} />
                  </Col>
                  <Col>
                    <Image src={amLogo} alt="" quality={100} loading='lazy' />
                  </Col>
                  <Col>
                    <Image src={orcidLogo} alt="" quality={100} loading='lazy' />
                  </Col>
                  <Col>
                    <Image src={linkedinLogo} alt="" quality={100} loading='lazy' onClick={() => router.push('https://www.linkedin.com/company/physiozine')} />
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Col>
                    <Image src={dataCiteLogo} alt="" quality={100} loading='lazy' />
                  </Col>
                  <Col>
                    <Image src={zoteroLogo} alt="" quality={100} loading='lazy' />
                  </Col>
                  <Col>
                    <Image src={openScholarLogo} alt="" quality={100} loading='lazy' />
                  </Col>
                  <Col>
                    <Image src={mendeleyLogo} alt="" quality={100} loading='lazy' />
                  </Col>
                </Row>
              </Container>
            </div>

          </div>
        </section>
      </main >
    </>
  );
}
