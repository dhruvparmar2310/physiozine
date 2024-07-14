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

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500'], style: ['normal'] })
const SubmitYourArticle = () => {
   return (
      <>
         <Head>
            <title>Submit Your Article | PhysioTrends</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
            <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
            <link rel="icon" href="assets/img/favicon.jpg" />
         </Head>

         <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Submit Your Article'} />
         <section className={`${styles?.submitYourArticle}`}>
            <div className={`${styles?.innerContent} container`}>
               <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Submission Guidelines for PhysioTrends Magazine</h1>
               <div className={`${styles?.line}`}></div>

               <p className='mt-3'>
                  PhysioTrends welcomes submissions of original articles, case studies, research papers, and other content related to the field of physiotherapy. To submit your manuscript, please follow these guidelines:
               </p>

               <div className={`${styles.pointsContent}`}>
                  <ol>
                     <li>
                        <p>Content and Topics</p>

                        <ul>
                           <li>
                              <span>
                                 Manuscripts should focus on topics relevant to physiotherapy practice, research, education, or healthcare policy.
                              </span>
                           </li>
                           <li>
                              <span>
                                 Submissions may cover areas such as musculoskeletal conditions, neurological disorders, cardiopulmonary rehabilitation, geriatric care, pediatric physical therapy, and more.
                              </span>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p>Formatting Requirements</p>
                        <ul>
                           <li>
                              <span>Manuscripts should be submitted in a Word document format (.doc or .docx).</span>
                           </li>
                           <li>
                              <span>Include a cover page with the title, author(s) name(s), affiliations, and contact information.</span>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p>Length and Structure</p>
                        <ul>
                           <li>
                              <span>Research articles, case-studies and review papers should typically be between <strong>1,000 - 1,500 words</strong>. Structure manuscripts with appropriate sections (e.g., Abstract, Introduction, Methods, Results, Discussion, Conclusion, References).</span>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p>References</p>
                        <ul>
                           <li>
                              <span>Follow the American Psychological Association (APA) style for in-text citations and reference list formatting.</span>
                           </li>
                           <li>
                              <span>Ensure that all references cited in the text are included in the reference list and vice versa.</span>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p>Tables and Figures</p>
                        <ul>
                           <li>
                              <span>Provide clear and descriptive titles/captions for each table and figure.</span>
                           </li>
                           <li>
                              <span>Ensure that tables and figures are legible and of high quality.</span>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p>Ethical Considerations</p>
                        <ul>
                           <li>
                              <span>Ensure that patient privacy and confidentiality are maintained in case reports or clinical examples.</span>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p>Submission Process</p>
                        <ul>
                           <li>
                              <span>Submit your manuscript through the online submission system at mail id "<strong>
                                 physiotrendsmagazine@gmail.com</strong>"</span>
                           </li>
                           <li>
                              <span>Upload your manuscript file(s) and any supplementary materials (e.g., figures, tables, additional files).</span>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p>Review Process</p>
                        <ul>
                           <li>
                              <span>All submitted manuscripts undergo a peer-review process by qualified experts in the field.</span>
                           </li>
                           <li>
                              <span>The editorial team will communicate the decision (accept, revise, or reject) and provide feedback if revisions are requested within 15 days of Submission.</span>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p>Copyright and Permissions</p>
                        <ul>
                           <li>
                              <span>Authors retain copyright of their work but grant PhysioTrends an exclusive license to publish the article.</span>
                           </li>
                           <li>
                              <span>Obtain necessary permissions for reproducing any copyrighted material (e.g., figures, tables) from other sources.</span>
                           </li>
                        </ul>
                     </li>
                  </ol>
               </div>

               <div className={`${styles.information}`}>
                  <p>For any additional questions or clarifications, contact the editorial office at <a href="tel:+91-7984377793">+91-7984377793</a>. We look forward to receiving your valuable contributions to the field of physiotherapy.
                  </p>
               </div>

               <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Why PhysioTrends?</h1>
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

               <div className={`${styles.webAvailable}`}>
                  <h1 className={`sectionTitle text-center`} data-heading='Major Index' title="Major Index | PhysioTrends"></h1>
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
               </div>
            </div>
         </section>
      </>
   )
}

export default SubmitYourArticle