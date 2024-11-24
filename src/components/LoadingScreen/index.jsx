import React from 'react'
import styles from '../../styles/LoadingScreen.module.scss'
import Image from 'next/image'
import logo from '../../../public/assets/img/loadingScreen.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingScreen = () => {
    return (
        <>
            <div className={`${styles?.loadingOverlay}`}>
                <div className="spinner">
                    <Image src={logo} alt='loading screen' quality={100} width={150} height={150} priority />
                </div>
                <span><FontAwesomeIcon icon={faSpinner} spinPulse size='lg' className='me-2' />  Loading <FontAwesomeIcon icon={faEllipsis} fade className='mt-2' /></span>
            </div>
        </>
    )
}

export default LoadingScreen
