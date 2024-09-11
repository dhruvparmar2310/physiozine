import React, { useEffect } from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import styles from '../styles/ArticleForm.module.scss'
import { Ubuntu } from 'next/font/google'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import AuthorCard from '@/components/AuthorCard'
import Select from 'react-select'
import { saveAs } from 'file-saver'
import sUrl from '../../public/assets/pdfs/Author_Information.pdf'
import { FaDownload } from 'react-icons/fa'
import { useState } from 'react'
import Image from 'next/image'
import googleLogo from '../../public/assets/img/webAvailability/Google-Logo.png'
import googleScholarLogo from '../../public/assets/img/webAvailability/google-scholar.jpg'
import magzterLogo from '../../public/assets/img/webAvailability/magzter_logo.png'
import doiLogo from '../../public/assets/img/webAvailability/DOI_logo.png'
import zenodoLogo from '../../public/assets/img/webAvailability/zenodo.png'
import openAccessLogo from '../../public/assets/img/webAvailability/Open_Access_logo.png'
import openAireLogo from '../../public/assets/img/webAvailability/OpenAire_Logo.jpg'
import readwhereLogo from '../../public/assets/img/webAvailability/readwhere.jpg'
import rgLogo from '../../public/assets/img/webAvailability/researchgate.png'
import linkedinLogo from '../../public/assets/img/webAvailability/Linkedin-Logo.png'
import physiothonline from '../../public/assets/img/associated/physioth-online.jpeg'
import smartPT from '../../public/assets/img/associated/smart-pt.jpeg'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'], style: ['normal'] })
const SubmissionForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState({ type: '', data: '' });

    const { control, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm({
        mode: 'all'
    })
    const watchAuthorCount = watch('sAuthorCount');

    const { fields, append, remove } = useFieldArray({
        control,
        name: "authors"
    });

    const authorCountOptions = [
        { value: 1, label: '1 Author' },
        { value: 2, label: '2 Authors' },
        { value: 3, label: '3 Authors' },
    ];

    useEffect(() => {
        if (watchAuthorCount) {
            const selectedAuthors = watchAuthorCount.value;
            const currentAuthors = fields.length;

            if (selectedAuthors > currentAuthors) {
                for (let i = currentAuthors; i < selectedAuthors; i++) {
                    append({ name: '', designation: '', mobileNumber: '' });
                }
            } else if (selectedAuthors < currentAuthors) {
                for (let i = currentAuthors; i > selectedAuthors; i--) {
                    remove(i - 1);
                }
            }
        } else {
            // Reset authors array when no count is selected
            setValue('authors', []);
        }
    }, [watchAuthorCount, append, remove, fields.length, setValue]);

    const pdfToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            // Ensure the file is of type Blob
            if (file instanceof Blob) {
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result.split(',')[1]); // Remove data header
                reader.onerror = (error) => reject(error);
            } else {
                reject(new Error('Invalid file format'));
            }
        });
    };

    const onSubmit = async (data) => {
        setIsLoading(true)
        setMsg({ type: 'pending', data: 'Your article is being uploaded. Please do not refresh the page or close the tab.' })
        try {
            // Access files from data object using proper file input reference
            const authorFormFileObj = data.fAuthorFormFile;
            const articleFileObj = data.fArticleFile;

            // Convert files to base64
            const authorFormFileBase64 = await pdfToBase64(authorFormFileObj);
            const articleFileBase64 = await pdfToBase64(articleFileObj);

            const serializeAuthors = (authors) => {
                return authors.map((author, index) => {
                    return `Author ${index + 1}: Name: ${author.name}, Designation: ${author.designation}, Mobile: ${author.mobileNumber}`;
                }).join(' | ');
            };

            // Prepare form data for submission
            const formDataForSheet = {
                "Paper Title": data.sPaperTitle,
                Keywords: data.sKeywords,
                "Mobile No.": data.sMobileNo,
                City: data.sCity,
                Country: data.sCountry,
                "Author Counts": data.sAuthorCount?.value,
                Authors: serializeAuthors(data.authors || []),
                "Author Form File URL": authorFormFileBase64,
                "File URL": articleFileBase64,
            };

            // Post to backend
            const driveResponse = await fetch('/api/upload-to-drive', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formDataForSheet }),
            });

            const driveData = await driveResponse.json();

            // Submit the updated form data (with Drive URLs) to Google Sheets
            const sheetResponse = await fetch('/api/submit-to-sheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(driveData.formDataForSheet),
            })

            if (!sheetResponse.ok) {
                throw new Error('Failed to submit to Google Sheets');
            } else {
                setIsLoading(false);
                setMsg({ type: 'submitted', data: 'Article Submitted Successfully.' })
                reset({})
                // window.scrollTo({
                //     top: 0,
                //     behavior: 'smooth',
                // });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    // const onSubmit = async data => {
    //     console.log('data', data)

    //     // Function to serialize author data
    //     const serializeAuthors = (authors) => {
    //         return authors.map((author, index) => {
    //             return `Author ${index + 1}: Name: ${author.name}, Designation: ${author.designation}, Mobile: ${author.mobileNumber}`;
    //         }).join(' | ');
    //     };

    //     try {
    //         // convert file to base64 format
    //         if (data.fAuthorFormFile && data.fAuthorFormFile.type === 'application/pdf') {
    //             try {
    //                 const base64String = await pdfToBase64(data.fAuthorFormFile);
    //                 setAuthorFormFile(base64String)
    //             } catch (error) {
    //                 console.error('Error converting PDF to Base64:: Author Form File', error);
    //             }
    //         } else {
    //             alert('Please select a valid PDF file');
    //         }

    //         if (data.fArticleFile && data.fArticleFile.type === 'application/pdf') {
    //             try {
    //                 const base64String = await pdfToBase64(data.fArticleFile);
    //                 setFile(base64String)
    //             } catch (error) {
    //                 console.error('Error converting PDF to Base64:: Article File', error);
    //             }
    //         } else {
    //             alert('Please select a valid PDF file');
    //         }

    //         // Prepare the formData object for submission to Google Sheets
    //         // const formDataForSheet = {
    //         //     "Paper Title": data.sPaperTitle,
    //         //     "Keywords": data.sKeywords,
    //         //     "Mobile No.": data.sMobileNo,
    //         //     "City": data.sCity,
    //         //     "Country": data.sCountry,
    //         //     "Author Counts": data.sAuthorCount?.value,
    //         //     "Authors": serializeAuthors(data.authors || []),
    //         //     "Author Form File URL": authorFormFile,
    //         //     "File URL": file,
    //         // };
    //         const formDataForSheet = {
    //             "Paper Title": data.sPaperTitle,
    //             Keywords: data.sKeywords,
    //             "Mobile No.": data.sMobileNo,
    //             City: data.sCity,
    //             Country: data.sCountry,
    //             "Author Counts": data.sAuthorCount?.value,
    //             Authors: serializeAuthors(data.authors || []),
    //             "Author Form File URL": authorFormFile,
    //             "File URL": file,
    //         };

    //         console.log('formDataForSheet', formDataForSheet)

    //         if (authorFormFile !== null && file !== null) {
    //             // Submit data to Google Sheets
    //             // const response = await axios.post(
    //             //     'https://sheet.best/api/sheets/438f6abe-0168-4d04-9ed7-d57cef24708b',
    //             //     formDataForSheet
    //             // );

    //             // const response = await fetch('/api/upload-to-drive', {
    //             //     method: 'POST',
    //             //     headers: {
    //             //         'Content-Type': 'application/json',
    //             //     },
    //             //     body: JSON.stringify({ formDataForSheet }),
    //             // });
    //             // console.log('Submission successful:', response);

    //             // if (!response.ok) {
    //             //     throw new Error('Failed to submit data');
    //             // }

    //             // const result = await response.json();
    //             const response = await fetch('/api/upload-to-drive', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ formDataForSheet }),
    //             });

    //             const result = await response.json();

    //             // Now submit the data to Google Sheets
    //             const sheetResponse = await fetch('/api/submit-to-sheet', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(result.formDataForSheet),
    //             });

    //             if (!sheetResponse.ok) {
    //                 throw new Error('Failed to submit to Google Sheets');
    //             }

    //             console.log('Sheet submission successful');
    //         }
    //     } catch (error) {
    //         console.error('Submission error:', error);
    //         // Add error handling here (e.g., showing an error message to the user)
    //     }
    // }
    return (
        <>
            <Head>
                <title>Article Form | PhysioTrends</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioTrends, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine' />
                <meta name="description" content="PHYSIOTRENDS is India’s fastest growing E-Magazine for Physical Therapist, your ultimate resource for all things related to physical therapy and rehabilitation. Explore expert articles, in-depth interviews with leading professionals, latest research findings, innovative techniques, and practical tips to enhance your understanding and practice in the field of physiotherapy. Whether you're a seasoned practitioner or just starting your journey, our E-Magazine is your go-to destination for staying updated, informed, and inspired in the world of physiotherapy." />
                <link rel="icon" href="assets/img/favicon.jpg" />
            </Head>

            <BreadCrumb title={'Home | PhysioTrends'} link={'Home'} current={'Submission Form'} />
            <section className={`${styles?.submissionForm}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Submission Form</h1>
                    <div className={`${styles?.line}`}></div>

                    <div>
                        <p className={`mt-2 ${ubuntu?.className}`}>
                            Share your expertise with the global physiotherapy community by submitting your original research, blogs, innovation or case studies to Physiotrends Magazine. Our platform provides an opportunity for professionals to contribute to the advancement of physiotherapy knowledge and practice. Submit your work today and be a part of shaping the future of the field.
                        </p>
                    </div>
                    <div>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <div className={`${styles?.articleDetails}`}>
                                <h1 className={ubuntu?.className}>Article Details:</h1>
                                <Row className='mt-4'>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Paper Title <span className='text-danger'>*</span></Form.Label>
                                            <Controller
                                                name="sPaperTitle"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: 'Paper Title is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <Form.Control {...field} placeholder="Enter paper title" />
                                                    </>
                                                )}
                                            />
                                            {errors?.sPaperTitle &&
                                                <span className='d-block text-danger text-end'>{errors?.sPaperTitle?.message}</span>
                                            }
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Keywords <span className='text-danger'>*</span></Form.Label>
                                            <Controller
                                                name="sKeywords"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: 'Keywords field is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <Form.Control {...field} placeholder="Enter the keywords" />
                                                    </>
                                                )}
                                            />
                                            {errors?.sKeywords &&
                                                <span className='d-block text-danger text-end'>{errors?.sKeywords?.message}</span>
                                            }
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Mobile No. <span className='text-danger'>*</span></Form.Label>
                                            <Controller
                                                name="sMobileNo"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: 'Mobile number is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <Form.Control
                                                            {...field}
                                                            placeholder="Enter your mobile number"
                                                            maxLength={12}
                                                        />
                                                    </>
                                                )}
                                            />
                                            {errors?.sMobileNo &&
                                                <span className='d-block text-danger text-end'>{errors?.sMobileNo?.message}</span>
                                            }
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>City <span className='text-danger'>*</span></Form.Label>
                                            <Controller
                                                name="sCity"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: 'City is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <Form.Control {...field} placeholder="Enter the city name" />
                                                    </>
                                                )}
                                            />
                                            {errors?.sCity &&
                                                <span className='d-block text-danger text-end'>{errors?.sCity?.message}</span>
                                            }
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Country <span className='text-danger'>*</span></Form.Label>
                                            <Controller
                                                name="sCountry"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: 'Country is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <Form.Control {...field} placeholder="Enter the country name" />
                                                    </>
                                                )}
                                            />
                                            {errors?.sCountry &&
                                                <span className='d-block text-danger text-end'>{errors?.sCountry?.message}</span>
                                            }
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <div className={`${styles?.articleDetails}`}>
                                <h1 className={ubuntu?.className}>Author Details:</h1>
                                <Row className='mt-4'>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Author Count <span className='text-danger'>*</span></Form.Label>
                                            <Controller
                                                name="sAuthorCount"
                                                control={control}
                                                rules={{ required: 'Author count is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <Select
                                                            {...field}
                                                            options={authorCountOptions}
                                                            placeholder="Select author count"
                                                            isClearable
                                                        />
                                                        {errors?.sAuthorCount &&
                                                            <span className='d-block text-danger text-end'>{errors?.sAuthorCount?.message}</span>
                                                        }
                                                    </>
                                                )}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={12}>
                                        {fields.length > 0 && (
                                            <Row className='mt-4'>
                                                {fields.map((field, index) => (
                                                    <>
                                                        <Col lg={6}>
                                                            <h4>Author - {index + 1}:</h4>
                                                            <AuthorCard key={field.id} control={control} index={index} errors={errors} />
                                                        </Col>
                                                    </>
                                                ))}
                                            </Row>
                                        )}
                                    </Col>

                                    <Col lg={12} className='mt-3'>
                                        <div className={styles?.signatureForm}>
                                            <Form.Label className='me-5'>Upload Author Information Form <span className='text-danger'>*</span></Form.Label>
                                            <Button variant='dark' size='sm' onClick={() => saveAs(sUrl, 'Author_Information')}>
                                                <span className={`${styles?.logo}`}><FaDownload /></span> <span>Download Form</span>
                                            </Button>
                                        </div>

                                    </Col>

                                    <Col lg={6} className='mt-3'>
                                        <Form.Group className="mb-3">
                                            {/* <Form.Label>Upload PDF File</Form.Label> */}
                                            {/* <Form.Control
                                                type="file"
                                                accept=".pdf"
                                                name='fAuthorForm'
                                                onChange={(e) => setAuthorFormFile(e.target.files[0])}
                                            /> */}
                                            <Controller
                                                name="fAuthorFormFile"
                                                control={control}
                                                rules={{ required: 'Author form file is required' }}
                                                render={({ field: { onChange, value, ...field } }) => (
                                                    <>
                                                        <Form.Control
                                                            type="file"
                                                            onChange={(e) => onChange(e.target.files[0])}
                                                            {...field}
                                                        />
                                                        {errors?.authorFormFile &&
                                                            <span className='d-block text-danger text-end'>{errors.authorFormFile.message}</span>
                                                        }
                                                    </>
                                                )}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={12} className='mt-2'>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Upload Article PDF File <span className='text-danger'>*</span></Form.Label>
                                            {/* <Form.Control
                                                type="file"
                                                accept=".pdf"
                                                name='fArticleFile'
                                                onChange={(e) => setFile(e.target.files[0])}
                                            /> */}
                                            <Controller
                                                name="fArticleFile"
                                                control={control}
                                                rules={{ required: 'Additional file is required' }}
                                                render={({ field: { onChange, value, ...field } }) => (
                                                    <>
                                                        <Form.Control
                                                            type="file"
                                                            onChange={(e) => onChange(e.target.files[0])}
                                                            {...field}
                                                        />
                                                        {errors?.file &&
                                                            <span className='d-block text-danger text-end'>{errors.file.message}</span>
                                                        }
                                                    </>
                                                )}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button type='submit' disabled={isLoading}>Submit {isLoading && <Spinner animation='border' size='sm' />}</Button>

                                {msg?.data !== '' && <div className="mt-2">
                                    <span className={msg.type === 'submitted' ? 'text-success' : 'text-danger'}>{msg?.data}</span>
                                </div>}
                            </div>
                        </Form>
                    </div>

                    <div className='mt-2'>
                        <p>
                            <em>
                                If you encounter any issues while submitting your article, please contact our customer care at <span style={{ color: 'var(--primary-color)' }}>+91 7984377792</span> or email us at <span style={{ color: 'var(--primary-color)' }}>physiotrendsmagazine@gmail.com</span> for assistance.
                            </em>
                        </p>
                    </div>

                    <div className={`${styles?.innerContent} container mt-4`}>
                        <div className={`${styles?.logoContent}`}>
                            <Container className='text-center'>
                                <Row>
                                    <Col>
                                        <Image src={googleLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={googleScholarLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={magzterLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={doiLogo} alt="" quality={100} priority />
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col>
                                        <Image src={zenodoLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={openAccessLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={openAireLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={readwhereLogo} alt="" quality={100} priority />
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col>
                                        <Image src={rgLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={linkedinLogo} alt="" quality={100} priority />
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SubmissionForm
