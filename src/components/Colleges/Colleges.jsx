import React from 'react'
import JGCollege from '../../../public/assets/img/college/JG-University.png'
import SilverOakCollege from '../../../public/assets/img/college/silver-oak.png'
import JainCollege from '../../../public/assets/img/college/jain-university.jpeg'
import MUCollege from '../../../public/assets/img/college/MU_LOGO_BROWN.png'
import LJCollege from '../../../public/assets/img/college/lj-college.jpeg'
import MahalaxmiCollege from '../../../public/assets/img/college/mahalaxmi.jpeg'
import FeppaCollege from '../../../public/assets/img/college/Feppa-Logo.png'
import Image from 'next/image'
import styles from '../../styles/Colleges.module.scss'

const Colleges = () => {
    const colleges = [
        { name: 'JG University', img: JGCollege },
        { name: 'Silver Oak College', img: SilverOakCollege },
        { name: 'Jain University', img: JainCollege },
        { name: 'Mumbai University', img: MUCollege },
        { name: 'LJ College', img: LJCollege },
        { name: 'Mahalaxmi College', img: MahalaxmiCollege },
        { name: 'Feppa College', img: FeppaCollege },
    ]
    return (
        <div className={styles?.colleges}>
            <div className={styles?.collegesItems}>
                {colleges?.map((college, _) => (
                    <div key={college?.name} className={styles?.collegeImageContain}>
                        <Image
                            src={college.img}
                            alt={college.name}
                            quality={100}
                            priority
                            unoptimized
                        />
                    </div>
                ))}
            </div>
            <div className={styles?.collegesItems}>
                {colleges?.map((college, _) => (
                    <div key={college?.name} className={styles?.collegeImageContain}>
                        <Image
                            src={college.img}
                            alt={college.name}
                            quality={100}
                            priority
                            unoptimized
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Colleges
