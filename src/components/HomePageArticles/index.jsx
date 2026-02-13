import React, { Fragment } from 'react'
import Image from 'next/image';
import styles from '../../styles/HomePageArticles.module.scss'
import { saveAs } from 'file-saver'
import { Ubuntu } from 'next/font/google';
import { Button } from 'react-bootstrap';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { allMagazine } from '@/data/magazine';
import JournalBg from '../../../public/assets/img/journal-bg.png'
import WebinarBg from '../../../public/assets/img/webinar/15-11-25.png'
import { useRouter } from 'next/router';
import { interviewCollection } from '@/data/interviewData';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'], style: ['normal'] })
const HomePageArticles = ({ type }) => {
    const router = useRouter()
    const settings = {
        className: "center",
        centerMode: false,
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    dots: false,
                    centerPadding: "0",
                }
            }
        ]
    };

    // function handleInterview (interview) {
    //     switch (interview.name) {
    //         case ''
    //     }
    // }
    return (
        <>
            <div className={`${styles?.homePageArticleSlider} ${type}`}>
                {type === 'magazine' &&
                    allMagazine?.[Object.keys(allMagazine)?.[Object?.keys(allMagazine)?.length - 2]]?.sort((a, b) => b._id - a._id)?.map(article => {
                        return (
                            <Fragment key={article?._id}>
                                <div className={`${styles?.articleCard}`}>
                                    <div className={`${styles?.cardImg}`}>
                                        <Image src={article?.sImage} className='img-fluid' priority quality={100} width={100} height={100} alt={`${article?.sMonth}, ${article?.sYear}`} />
                                    </div>
                                    <div className={`${styles?.cardBody}`}>
                                        {/* <h1 className={ubuntu?.className}>{article?.title}</h1> */}
                                        <p className={ubuntu?.className}>{article?.sMonth}</p>

                                        <Button className={`${styles?.downloadBtn} ${ubuntu?.className}`} variant='info' onClick={() => saveAs(article?.eBook, `Volume-${article?.eBook?.split('-')[1]}, Issue-${article?.eBook?.split('-')[3].split('/')[0]}`)}>Download <span><FaArrowUpRightFromSquare /></span></Button>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })
                }
                {type === 'journal' &&
                    <div className={`${styles?.articleCard} ${styles.journalCard} d-flex justify-content-center align-items-center gap-5`}>
                        <div className={`${styles?.cardImg}`}>
                            <Image src={JournalBg} className='img-fluid' priority quality={100} width={100} height={100} alt='Journal' />
                        </div>
                        <div className={`${styles?.cardBody} flex-column`}>
                            <h1 className={`${ubuntu?.className} ${styles.journalTitle}`}>Volume 6, Issue 4</h1>
                            <p className={`${ubuntu?.className} ${styles.subtitle}`}>October - December, 2025</p>

                            <div className={styles.buttonGroup}>
                                <Button className={`${styles?.downloadBtn} ${ubuntu?.className}`} variant='info' onClick={() => router.push('https://ijopt.co.in/archives/2025/6/4')}>Read All Article<span><FaArrowUpRightFromSquare /></span></Button>

                                <Button className={`${styles?.downloadBtn} ${ubuntu?.className}`} variant='info' onClick={() => router.push('https://app.oxfordabstracts.com/stages/78097/submitter')}>Submit Article<span><FaArrowUpRightFromSquare /></span></Button>
                            </div>
                        </div>
                    </div>
                }
                {type === 'webinar' &&
                    <div className={`${styles?.articleCard} ${styles.webinarCard} d-flex justify-content-center align-items-center gap-5`}>
                        <div className={`${styles?.cardImg} ${styles.webinar}`}>
                            <Image src={WebinarBg} className='img-fluid' priority quality={100} width={100} height={100} alt='Journal' />
                        </div>
                        <div className={`${styles?.cardBody} flex-column`}>
                            <h1 className={`${ubuntu?.className} ${styles.journalTitle}`}>Neuroplasticity in Action: How Brain Rewires through Physiotherapy</h1>
                            <p className={`${ubuntu?.className} ${styles.webinarSubtitle}`}>Speaker: Dr. Smati Sambyal (PT)</p>
                            <p className={`${ubuntu?.className} ${styles.webinarSubtitle}`}>Moderator: Dr. Aarsh Bhatt (PT)</p>

                            <div className={styles.buttonGroup}>
                                <Button className={`${styles?.downloadBtn} ${ubuntu?.className}`} variant='info' onClick={() => router.push('https://youtu.be/xvVuUzAprrk')}>Watch Now<span><FaArrowUpRightFromSquare /></span></Button>
                            </div>
                        </div>
                    </div>
                }
                {type === 'interview' &&
                    interviewCollection?.sort((a, b) => b._id - a._id)?.slice(0, 4)?.map(interview => {
                        return (
                            <Fragment key={interview?._id}>
                                <div className={`${styles?.articleCard} ${styles?.interviewCard}`}>
                                    <div className={`${styles?.cardImg}`}>
                                        <Image src={interview?.img} className='img-fluid' priority quality={100} width={100} height={100} alt={`${interview?.sTitle}`} />
                                    </div>
                                    <div className={`${styles?.cardBody}`}>
                                        <h1 className={ubuntu?.className}>{interview?.name}</h1>
                                        <p className={ubuntu?.className}>{interview?.sTitle}</p>

                                        <Button className={`${styles?.downloadBtn} ${ubuntu?.className}`} variant='info' onClick={() => router?.push(`/interview/${interview?.name}`)}>Read Interview</Button>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HomePageArticles
