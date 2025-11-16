import React from 'react'
import styles from '../../styles/BreadCrumb.module.scss'
import Link from 'next/link'
import { Ubuntu } from 'next/font/google'
import { FaAngleRight } from "react-icons/fa"

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['500'], style: ['normal'] })
const BreadCrumb = ({ title, link, current }) => {
    return (
        <>
            <div className={`${styles?.breadcrumbContent} container mt-5`}>
                <div className={`${styles?.breadcrumb}`}>
                    <span className={`${styles?.breadcrumbItem}`}>
                        <Link href={link === 'Home' ? '/' : link} className={`${ubuntu?.className} text-capitalize`} title={title}>{link}</Link>
                    </span>
                    <span><FaAngleRight /></span>
                    <span className={`${styles?.currentPage} ${ubuntu?.className}`}>{current}</span>
                </div>
            </div>
        </>
    )
}

export default BreadCrumb
