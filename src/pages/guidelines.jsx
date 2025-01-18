import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/SubmitYourArticle.module.scss'
import googleLogo from '../../public/assets/img/webAvailability/Google-Logo.png'
import googleScholarLogo from '../../public/assets/img/webAvailability/google-scholar.jpg'
import magzterLogo from '../../public/assets/img/webAvailability/magzter_logo.png'
import doiLogo from '../../public/assets/img/webAvailability/DOI_logo.png'
import zenodoLogo from '../../public/assets/img/webAvailability/zenodo.png'
import openAccessLogo from '../../public/assets/img/webAvailability/Open_Access_logo.png'
import openAireLogo from '../../public/assets/img/webAvailability/OpenAire_Logo.jpg'
import readwhereLogo from '../../public/assets/img/webAvailability/readwhere.jpg'
import Image from 'next/image'
import { Ubuntu } from 'next/font/google'
import { FaDownload } from 'react-icons/fa'
import { saveAs } from 'file-saver'
import sUrl from '../../public/assets/pdfs/Author_Information.pdf'
import { Button, Table } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const SubmitYourArticle = () => {
   const router = useRouter()

   const columns = ["Article Type", "Abstract - Word Count", "Article - Word Count"]
   const data = [
      { _id: 0, sTitle: 'Research Article', sAbsCount: '150 - 250', sArticleCount: 'Max. 2000' },
      { _id: 1, sTitle: 'Case Report', sAbsCount: '150 - 250', sArticleCount: 'Max. 2000' },
      { _id: 2, sTitle: 'Case Series', sAbsCount: '150 - 250', sArticleCount: 'Max. 2000' },
      { _id: 3, sTitle: 'Blogs', sAbsCount: '-', sArticleCount: 'Max. 1500' }
   ]
   return (
      <>
         <Head>
            <title>Submit Your Article | PhysioZine</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='PhysioZine, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
            <meta name="description" content="PHYSIOZINE is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
            <link rel="icon" href="assets/img/favicon.jpg" />
         </Head>

         <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Guidelines'} />
         <section className={`${styles?.submitYourArticle}`}>
            <div className={`${styles?.innerContent} container`}>
               <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Author Guidelines</h1>
               <div className={`${styles?.line}`}></div>

               <div className={`mt-2 ${styles?.contentInfo}`}>
                  <h1 className={ubuntu?.className}>1. Aim and Scope</h1>
                  <p>
                     PhysioZine Magazine is a peer-reviewed, open-access publication dedicated to disseminating innovative research, case studies, and reviews in the field of physiotherapy. We aim to bridge the gap between research and clinical practice by providing insights into the latest trends, techniques, and evidence-based practices in physiotherapy. We welcome contributions from practitioners, researchers, and scholars across various related disciplines.
                  </p>

                  <h1 className={ubuntu?.className}>2. Editorial Process</h1>
                  <p>
                     A manuscript submitted to PhysioZine Magazine will be considered for publication on the condition that it is exclusively under review by our publication and has not been previously published, submitted elsewhere, or accepted for publication.
                  </p>
                  <p>
                     Upon submission, our editorial team evaluates all manuscripts. Those that lack originality, exhibit significant scientific or technical flaws, or fail to convey a meaningful contribution may be rejected prior to formal peer review. Manuscripts deemed suitable for publication will be sent to two or more expert reviewers.
                  </p>
                  <p>
                     Each manuscript is assigned to an editorial team member who will make the final decision based on reviewer feedback. The comments and recommendations (acceptance, rejection, or required revisions) from the reviewers will be communicated to the corresponding author. If necessary, authors may be asked to provide a detailed response to the reviewers' comments and submit a revised manuscript.
                  </p>
                  <p>
                     Accepted manuscripts will undergo copy editing for grammar, punctuation, style, and formatting. The entire process, from manuscript submission to final decision and proof approval, is conducted online and typically takes about <strong>15 days to 1 month</strong>.
                  </p>
                  <p>
                     Please note that communication regarding manuscripts is restricted to the Editor-in-Chief and Editor only; other editorial team members are not permitted to engage with authors directly.
                  </p>

                  <h1 className={ubuntu?.className}>3. General Guidelines</h1>
                  <div>
                     <ul>
                        <li><span>Font: Times New Roman</span></li>
                        <li><span>Formatting: A4</span></li>
                        <li><span>Page Numbering: Consecutively starting from the title page</span></li>
                        <li>
                           <span>Structure:</span>
                           <ul>
                              <li><span>Title page</span></li>
                              <li><span>Photo of Author(s)</span></li>
                              <li><span>Designation and email id of Author(s)</span></li>
                              <li><span>Abstract (if applicable)</span></li>
                              <li><span>Keywords</span></li>
                              <li><span>Main text (Introduction, Materials and Methods, Results, Discussion)</span></li>
                              <li><span>Acknowledgments (if applicable)</span></li>
                              <li><span>Declaration of Interest (if applicable)</span></li>
                              <li><span>References</span></li>
                              <li><span>Appendices (if applicable)</span></li>
                              <li><span>Tables and Figures (each on a separate page)</span></li>
                           </ul>
                        </li>
                     </ul>
                  </div>

                  <h1 className={ubuntu?.className}>4. Manuscript Preparation</h1>
                  <p>
                     Abstract: A structured abstract (up to 250 words) with subheadings: Objectives, Methods, Findings, Novelty. (if applicable)<br />
                     Keywords: 3-6 keywords.
                  </p>
                  <p>
                     <strong>Sections:</strong><br />
                     Introduction: Context and objectives.<br />
                     Materials and Methods: Detailed methodology with citations.<br />
                     Results: Clear presentation of findings, avoiding duplication in figures and tables.<br />
                     Discussion: Analysis of results and significance.<br />
                     Conclusion: Brief summary and future research suggestions.<br />
                     Acknowledgments: Recognize contributions and funding sources.<br />
                     References: Formatted numerically and listed alphabetically by first author.
                  </p>

                  <Table responsive bordered striped>
                     <thead>
                        <tr>
                           {columns?.map((item, index) => {
                              return (
                                 <React.Fragment key={index}>
                                    <td>{item}</td>
                                 </React.Fragment>
                              )
                           })}
                        </tr>
                     </thead>
                     <tbody>
                        {data?.map(item => {
                           return (
                              <tr key={item?._id}>
                                 <td>{item?.sTitle}</td>
                                 <td className='text-center'>{item?.sAbsCount}</td>
                                 <td className='text-center'>{item?.sArticleCount}</td>
                              </tr>
                           )
                        })}
                     </tbody>
                  </Table>

                  <h1 className={ubuntu?.className}>5. Submission Guidelines</h1>
                  <p>
                     Manuscripts must be submitted online through our website. Ensure the following documents are included:
                  </p>
                  <div>
                     <ul>
                        <li><span>Cover letter</span></li>
                        <li><span>Title page (with title, authors, affiliations, corresponding author details)</span></li>
                        <li><span>Main article file</span></li>
                        <li><span>Tables and figures should be mailed separately along with the article's title.</span></li>
                        <li><span>Each author's photo should be mailed separately along with the article's title.</span></li>
                        <li><span>Submit your manuscript through the online submission system - <span className={styles?.anchorLink} onClick={() => router.push('/submissionForm')}>Click Here</span></span></li>
                     </ul>
                  </div>

                  <h1 className={ubuntu?.className}>6. Duplicate Publication </h1>
                  <p>
                     Material submitted to PhysioZine must be original and not published or submitted for consideration in other Journal. <br /><br />
                     Duplicate publication occurs when an author re-uses substantial parts of his or her own published work without providing the appropriate references. This can range from getting an identical paper published in multiple journals, to slicing of the paper, where authors add small amounts of new data to a previous paper.
                  </p>

                  <h1 className={ubuntu?.className}>7. Manuscript Withdrawal Policy </h1>
                  <p>Authors must abide by these policies after submission of their manuscript.</p>
                  <div>
                     <ul>
                        <li><span>Authors must provide their consent to publish their manuscript prior to peerreview process.</span></li>
                        <li><span>Withdrawing an already confirmed manuscript after it has been accepted requires consent from all the authors with valid reason for withdrawing of their manuscript.</span></li>
                        <li><span>After a manuscript has been accepted and confirmed, withdrawing it could result in a 500/- review process penalty.</span></li>
                     </ul>
                  </div>

                  <h1 className={ubuntu?.className}>8. Disclaimer</h1>
                  <p>
                     The author(s) of each article published in PhysioZine Magazine are solely responsible for the content of their work. Neither PhysioZine Magazine, its editors, publishers, nor anyone involved in the creation, production, or distribution of the magazine assumes any liability or responsibility for the accuracy, completeness, or usefulness of the information presented. Additionally, they are not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of PhysioZine Magazine.
                  </p>

                  <h1 className={ubuntu?.className}>9. Policy for Rejection of AI-Generated Articles </h1>
                  <p>
                     PhysioZine Magazine does not accept articles generated wholly or primarily by artificial intelligence (AI). Submissions must represent original research, insights, or perspectives from human authors. Manuscripts that rely on AI-generated content will be automatically rejected. We prioritize authentic, thoughtful contributions that reflect the expertise and experiences of our authors, ensuring the integrity and quality of our publication.
                  </p>
               </div>

               <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Why PhysioZine?</h1>
               <div className={`${styles?.line}`}></div>

               <div className={`${styles?.whyUs}`}>
                  <ul className='mt-3'>
                     <li>
                        <span>Targeted physiotherapy audience</span>
                     </li>
                     <li>
                        <span>Increase professional visibility and credibility</span>
                     </li>
                     <li>
                        <span>Contribute to knowledge dissemination in the field</span>
                     </li>
                     <li>
                        <span>Rigorous peer-review process ensures quality</span>
                     </li>
                     <li>
                        <span>Established readership and impact in the profession</span>
                     </li>
                     <li>
                        <span>Platform for sharing research, case-study, and innovations</span>
                     </li>
                     <li>
                        <span>Potential for networking and collaboration opportunities</span>
                     </li>
                     <li>
                        <span>Support professional development as an author</span>
                     </li>
                  </ul>
               </div>

               {/* <div className={`${styles.webAvailable}`}>
                  <h1 className={`sectionTitle text-center`} data-heading='Major Index' title="Major Index | PhysioZine"></h1>
                  <div className={`${styles?.innerContent} mt-4`}>
                     <div className={`${styles?.logoContent}`}>
                        <Image src={googleLogo} alt="" quality={100} priority />
                        <Image src={googleScholarLogo} alt="" quality={100} priority />
                        <Image src={magzterLogo} alt="" quality={100} priority />
                        <Image src={doiLogo} alt="" quality={100} priority />
                        <Image src={zenodoLogo} alt="" quality={100} priority />
                        <Image src={openAccessLogo} alt="" quality={100} priority />
                        <Image src={openAireLogo} alt="" quality={100} priority />
                        <Image src={readwhereLogo} alt="" quality={100} priority />
                     </div>
                     <div className={`${styles?.logoContent}`}>
                        <Image src={googleLogo} alt="" quality={100} priority />
                        <Image src={googleScholarLogo} alt="" quality={100} priority />
                        <Image src={magzterLogo} alt="" quality={100} priority />
                        <Image src={doiLogo} alt="" quality={100} priority />
                        <Image src={zenodoLogo} alt="" quality={100} priority />
                        <Image src={openAccessLogo} alt="" quality={100} priority />
                        <Image src={openAireLogo} alt="" quality={100} priority />
                        <Image src={readwhereLogo} alt="" quality={100} priority />
                     </div>
                  </div>
               </div> */}
            </div >
         </section >
      </>
   )
}

export default SubmitYourArticle