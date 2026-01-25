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
import amLogo from '../../public/assets/img/webAvailability/am.jpeg'
import orcidLogo from '../../public/assets/img/webAvailability/orcid.logo.png'
import physiothonline from '../../public/assets/img/associated/physioth-online.jpeg'
import smartPT from '../../public/assets/img/associated/smart-pt.jpeg'
import zoteroLogo from '../../public/assets/img/webAvailability/Zotero_logo.png'
import dataCiteLogo from '../../public/assets/img/webAvailability/DataCite-Commons.png'
import mendeleyLogo from '../../public/assets/img/webAvailability/Mendeley_Logo_Vertical.png'
import openScholarLogo from '../../public/assets/img/webAvailability/openscholar.png'
import { setCookie } from '@/utils'
import { useRouter } from 'next/router'
import { BsArrowRight } from 'react-icons/bs'
import qrCode from '../../public/assets/img/payment-qr.jpg'
import { Bounce, toast } from 'react-toastify'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'], style: ['normal'] })
const SubmissionForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState({ type: '', data: '' });

    const { control, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm({
        mode: 'all',
        // defaultValues: {
        //     sPaperTitle: 'Testing',
        //     sEmailID: 'dhru@gmail.com',
        //     sMobileNo: '9876543210',
        //     sCity: 'Delhi',
        //     sCountry: 'India',
        //     sAuthorCount: 1,
        //     authors: [{ name: 'dfsvdf', designation: 'xcxv', mobileNumber: '9876543210' }],
        // }
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

        try {
            const authorFormFileObj = data.fAuthorFormFile;
            const articleFileObj = data.fArticleFile;

            // Convert files to base64
            const authorFormFileBase64 = await pdfToBase64(authorFormFileObj);
            const articleFileBase64 = await pdfToBase64(articleFileObj);

            // Append base64 strings to the data object
            data.fAuthorFormFileBase64 = authorFormFileBase64;
            data.fArticleFileBase64 = articleFileBase64;

            // Remove the original file objects if not needed (optional)
            delete data.fAuthorFormFile;
            delete data.fArticleFile;

            // Authors details
            const serializeAuthors = (authors) => {
                return authors.map((author, index) => {
                    return `Author ${index + 1}: Name: ${author.name}, Designation: ${author.designation}, Mobile: ${author.mobileNumber}`;
                }).join(' | ');
            };

            // Prepare form data for submission
            const formDataForSheet = {
                "Paper Title": data.sPaperTitle,
                EmailID: data.sEmailID,
                "Mobile No.": data.sMobileNo,
                City: data.sCity,
                Country: data.sCountry,
                "Author Counts": data.sAuthorCount?.value,
                Authors: serializeAuthors(data.authors || []),
                "Author Form File URL": data.fAuthorFormFileBase64,
                "File URL": data.fArticleFileBase64,
                "Transaction ID": data?.sTransactionID
            };

            // Post to backend (UPLOAD TO DRIVE)
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
                setIsLoading(false);
                throw new Error('Failed to submit to Google Sheets');
            } else {
                setIsLoading(false);
                toast.success('Your article has been submitted successfully.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    toastId: 'copied'
                })
                setMsg({ type: 'submitted', data: 'Your article has been submitted successfully.' })
            }
        } catch (err) {
            toast.error('Oops! Something went wrong. Please try again.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                toastId: 'copied'
            })
            setMsg({ type: 'error', data: 'Oops! Something went wrong. Please try again.' });
            console.error(err);
        }
    };

    return (
        <>
            <Head>
                <title>Article Form | PhysioZine</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='PhysioZine, Physiotherapy, Physio Magazine, Physio Article, ThePhysioBrothers, Magazine for Physiotherapy, Physiotherapy Magazine, Magazine for Physiotherapy India, Indian Physiotherapy Magazine, Article Form of Physiozine, Article Submission in Physiozine, Article Payment in Physiozine, Physiozine Article Submission Form' />
                <meta name="description" content="Share your expertise with the global physiotherapy community by submitting your original research, blogs, innovation or case studies to PhysioZine Magazine. Our platform provides an opportunity for professionals to contribute to the advancement of physiotherapy knowledge and practice. Submit your work today and be a part of shaping the future of the field." />
                <meta property="og:title" content="Article Form | PhysioZine" />
                <meta property="og:description" content="Share your expertise with the global physiotherapy community by submitting your original research, blogs, innovation or case studies to PhysioZine Magazine. Our platform provides an opportunity for professionals to contribute to the advancement of physiotherapy knowledge and practice. Submit your work today and be a part of shaping the future of the field." />
                <meta property="og:url" content="https://physiozine.co.in/policy/submissionForm" />
                <meta property="og:image" content="assets/img/favicon.jpg" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <BreadCrumb title={'Home | PhysioZine'} link={'Home'} current={'Submission Form'} />
            <section className={`${styles?.submissionForm}`}>
                <div className={`${styles?.innerContent} container`}>
                    <h1 className={`sectionTitle ${styles?.sectionTitle} ${ubuntu?.className}`}>Submission Form</h1>
                    <div className={`${styles?.line}`}></div>

                    <div>
                        <p className={`mt-2`}>
                            Share your expertise with the global physiotherapy community by submitting your original research, blogs, innovation or case studies to PhysioZine Magazine. Our platform provides an opportunity for professionals to contribute to the advancement of physiotherapy knowledge and practice. Submit your work today and be a part of shaping the future of the field.
                        </p>
                        <p className={styles?.notes}>
                            <span className={styles?.noteTitle}>Note:</span>
                            <br />
                            Research articles are subject to publication in the Indian Journal of Physical Therapy (IJOPT), an international peer-reviewed journal with ISSN 2321-5690. Authors submitting research articles must adhere to the journal's guidelines and publication policies.
                            <br />
                            For details on the Article Processing Charges (APC) of Journal, please visit: <span className={styles?.noteLink} onClick={() => router.push('https://ijopt.co.in/author-tools/article-processing-charge')}>Click here</span>.
                            <br /><br />
                            Meanwhile, PhysioZine Magazine exclusively accepts case studies, blogs, and articles on the latest innovations in physiotherapy. Submissions related to these categories are welcome for publication in PhysioZine Magazine.
                        </p>
                    </div>
                    <div>
                        <h1>Submission Form for Magazine</h1>
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
                                            <Form.Label>Email Address <span className='text-danger'>*</span></Form.Label>
                                            <Controller
                                                name="sEmailID"
                                                control={control}
                                                defaultValue=""
                                                rules={{
                                                    required: 'Email field is required', pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                        message: 'Please enter a valid email address',
                                                    },
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <Form.Control {...field} placeholder="eg: example@gmail.com" autoCapitalize="none" />
                                                    </>
                                                )}
                                            />
                                            {errors?.sEmailID &&
                                                <span className='d-block text-danger text-end'>{errors?.sEmailID?.message}</span>
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
                                                rules={{ required: 'Mobile number is required', pattern: { value: /^\d{10}$/, message: 'Invalid mobile number' } }}
                                                render={({ field }) => (
                                                    <>
                                                        <Form.Control
                                                            {...field}
                                                            placeholder="Enter mobile number"
                                                            maxLength={10}
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
                                                rules={{
                                                    required: 'Additional file is required',
                                                    validate: {
                                                        fileType: (value) => {
                                                            if (value && typeof (watch('fArticleFile')) !== 'string') {
                                                                const maxSize = 10 * 1024 * 1024; // 10MB in bytes
                                                                if (value.size >= maxSize) {
                                                                    return "File size must be less than 10MB";
                                                                }
                                                            }
                                                            return true;
                                                        },
                                                    }
                                                }}
                                                render={({ field: { onChange, value, ...field } }) => (
                                                    <>
                                                        <Form.Control
                                                            type="file"
                                                            onChange={(e) => onChange(e.target.files[0])}
                                                            {...field}
                                                        />
                                                        {errors?.fArticleFile &&
                                                            <span className='d-block text-danger text-end'>{errors.fArticleFile.message}</span>
                                                        }
                                                    </>
                                                )}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mt-3'>
                                    <h1 className={ubuntu?.className}>Payment Details:</h1>
                                    <Col lg={6} className='mt-3'>
                                        <div className={`${styles?.paymentDetails}`}>
                                            <Image src={qrCode} alt='payment qr for PhysioZine' quality={100} className='img-fluid' />
                                        </div>
                                    </Col>
                                    <Col lg={6} className='mt-3'>
                                        <div className={`${styles?.paymentDetails}`}>
                                            <p>
                                                Note: Article Processing Charge (APC) for case study and blog is 500 /-
                                            </p>
                                            <p>
                                                For Research Article Submission in IJOPT, <span onClick={() => router?.push('https://auth.oxfordabstracts.com/?redirect=/stages/78097/submitter')}>Click Here</span>
                                            </p>
                                        </div>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Transaction ID <span className='text-danger'>*</span></Form.Label>
                                            <Controller
                                                name="sTransactionID"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: 'Transaction ID is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <Form.Control {...field} placeholder="Enter transaction ID" />
                                                    </>
                                                )}
                                            />
                                            {errors?.sTransactionID &&
                                                <span className='d-block text-danger text-end'>{errors?.sTransactionID?.message}</span>
                                            }
                                        </Form.Group>

                                        <Button
                                            type='submit'
                                            className='me-2 mt-3'
                                            disabled={isLoading}
                                        >
                                            Submit {isLoading && <Spinner animation='border' size='sm' />}
                                        </Button>

                                        {msg?.data !== '' && <div className="mt-2">
                                            <span className={msg.type === 'submitted' ? 'text-warning' : 'text-danger'}>{msg?.data}</span>
                                        </div>}
                                    </Col>
                                </Row>

                                {/* <Button
                                    type='button'
                                    disabled={msg?.type !== 'submitted'}
                                    onClick={() => handlePaymentBtn()}
                                >
                                    Proceed to Pay {isLoading && <Spinner animation='border' size='sm' />}
                                </Button> */}
                            </div>
                        </Form>
                    </div>

                    <div className='mt-2'>
                        <p>
                            <em>
                                If you encounter any issues while submitting your article, please contact our customer care at <span style={{ color: 'var(--primary-color)' }}>+91 7984377793</span> or email us at <span style={{ color: 'var(--primary-color)' }}>physiozinemagazine@gmail.com</span> for assistance.
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
                                        <Image src={amLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={orcidLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={linkedinLogo} alt="" quality={100} priority />
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col>
                                        <Image src={dataCiteLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={zoteroLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={openScholarLogo} alt="" quality={100} priority />
                                    </Col>
                                    <Col>
                                        <Image src={mendeleyLogo} alt="" quality={100} priority />
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