import React, { useEffect } from 'react'
import { articles } from '@/data/articles';
import Image from 'next/image';
import styles from '../../styles/HomePageArticles.module.scss'
import { saveAs } from 'file-saver'
import pdfFile from '../../../public/assets/pdfs/vol-1-issue-1/Physiotrends Vol 1, Issue 1.pdf'
import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from 'react-slick';
import { Ubuntu } from 'next/font/google';
import { Button } from 'react-bootstrap';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaShare } from "react-icons/fa"

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'], style: ['normal'] })
const HomePageArticles = () => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <>
            {/* <div className={`${styles?.magazine}`}>
                <div id="carouselExampleControls" className={`carousel slide ${styles.carousel}`} data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        {articles.map((article, index) => (
                            <div div key={article._id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className={`${styles.magazineCard}`} onClick={() => saveAs(`${article?.eBook}`, `PhysioTrends_${article?.title}`)}>
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
            <div className="slider">
                <Slider {...settings}>
                    {articles?.map(article => {
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
            </div>
        </>
    )
}

export default HomePageArticles
