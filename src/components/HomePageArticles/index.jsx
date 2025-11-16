import React from 'react'
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

    return (
        <>
            {/* <div className={`${styles?.magazine}`}>
                <div id="carouselExampleControls" className={`carousel slide ${styles.carousel}`} data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        {articles.map((article, index) => (
                            <div div key={article._id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className={`${styles.magazineCard}`} onClick={() => saveAs(`${article?.eBook}`, `PhysioZine_${article?.title}`)}>
                                    <div className={`${styles.magazineImg}`}>
                                        <Image src={article.img} alt={article.title} width={100} height={100} priority />
                                    </div>
                                    <p className={`${styles.cardTitle}`}>{article.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={`carousel-control-prev ${styles?.prevBtn}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <GrPrevious />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className={`carousel-control-next ${styles?.nextBtn}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <GrNext />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div > */}
            {/* <div className="slider">
                <Slider {...settings}>
                    {sortArticle?.map(article => {
                        return (
                            <tr key={article?._id}>
                                <div className={`${styles?.articleCard}`}>
                                    <div className={`${styles?.cardImg}`}>
                                        <Image src={article?.img} className='img-fluid' priority quality={100} width={100} height={100} alt={article?.title} />
                                    </div>
                                    <div className={`${styles?.cardBody}`}>
                                        <h1 className={ubuntu?.className}>{article?.title}</h1>
                                        <p className={ubuntu?.className}>{article?.nMonth}</p>

                                        <Button className={`${styles?.downloadBtn} ${ubuntu?.className} me-2 mt-3`} variant='info' onClick={() => saveAs(article?.eBook, article?.title)}>Download <span><FaArrowUpRightFromSquare /></span></Button>
                                    </div>
                                </div>
                            </tr>
                        )
                    })}
                </Slider>
            </div> */}

            <div className={styles?.homePageArticleSlider}>
                {type === 'magazine' &&
                    allMagazine[new Date().getFullYear()]?.sort((a, b) => b._id - a._id)?.map(article => {
                        return (
                            <tr key={article?._id}>
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
                            </tr>
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
            </div>
        </>
    )
}

export default HomePageArticles
