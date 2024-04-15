import React from 'react'
// import inspirations from '../../assets/img/Inspiration.svg'
import styles from './Inspirations.module.css'
import rightArrow from '../../assets/img/rightArrow.svg'

const Inspirations = () => {
    return (
        <section>
            <div className={`my-5 position-relative ${styles.inspirationImg}`}>
                {/*<img src={inspirations} alt='inspirationPhoto' className='w-100 '/>*/}
                <div className={`container`}>
                    <div className={styles.topTitle}>
                    <p className={styles.fTopTitle}>Get Inspirations For Your Next Trip</p>
                    <p className={styles.sTopTitle}>Read About Wonderful Adventure We Love Most</p>
                    </div>
                    <div>
                        <p className={styles.fBottomTitle}>Difficult Roads Lead To <br /> Beautiful Destination .</p>
                        <div>
                            <p className={styles.sBottomTitle}>Read More</p>
                            <img src={rightArrow} alt="arrow" className={styles.readMoreArrow}/>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Inspirations
