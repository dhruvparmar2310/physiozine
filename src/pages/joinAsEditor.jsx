import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/JoinAsEditor.module.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const JoinAsEditor = () => {
    return (
        <>
            <Head>
                <title>Join As Editor | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Join As Editor of PhysioZine, PhysioZine Ads, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="Are you a passionate physiotherapist or healthcare professional looking to share your expertise with the world? Join the PhysioZine editorial team and become a part of our mission to provide cutting-edge information and insights to our growing community." />
                <meta property="og:title" content="Join As Editor | PhysioZine" />
                <meta property="og:description" content="Are you a passionate physiotherapist or healthcare professional looking to share your expertise with the world? Join the PhysioZine editorial team and become a part of our mission to provide cutting-edge information and insights to our growing community." />
                <meta property="og:url" content="https://physiozine.vercel.app/joinAsEditor" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Join as Editor'} />
            <section className={`${styles?.joinAsEditor}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Join as Editor</h1>
                    <div className={`${styles?.line}`}></div>

                    <div className='mt-3'>
                        <p>
                            Are you a passionate physiotherapist or healthcare professional looking to share your expertise with the world? Join the PhysioZine editorial team and become a part of our mission to provide cutting-edge information and insights to our growing community.
                        </p>
                        <p>As an editor, you'll have the opportunity to:</p>
                        <ul>
                            <li>
                                <span>Contribute engaging articles and blog posts on the latest advancements in physiotherapy and related fields.</span>
                            </li>
                            <li>
                                <span>Collaborate with our team to curate and review content that informs and inspires our readers.</span>
                            </li>
                            <li>
                                <span>Expand your professional network and connect with like-minded individuals in the healthcare industry.</span>
                            </li>
                            <li>
                                <span>Enhance your writing, editing, and content creation skills.</span>
                            </li>
                        </ul>

                        <p>If you're ready to leverage your knowledge and make a meaningful impact, we'd love to hear from you. Apply now and join the PhysioZine family!</p>
                    </div>

                    <div>
                        <p>Send your Updated CV on "<span className='text-info'>physiozinemagazine@gmail.com</span>"</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JoinAsEditor
