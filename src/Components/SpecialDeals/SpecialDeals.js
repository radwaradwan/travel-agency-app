import React from 'react'
import styles from './SpecialDeals.module.css'
import p1 from '../../assets/img/Photo 1.svg'
import p2 from '../../assets/img/Photo 2.svg'
import p3 from '../../assets/img/Photo 3.svg'
import p4 from '../../assets/img/Photo 4.svg'
import p5 from '../../assets/img/Photo 5.svg'
import p6 from '../../assets/img/Photo 6.svg'
import arrow from '../../assets/img/arrow.svg'
import arrowDown from '../../assets/img/arrowDown.svg'


function SpecialDeals() {
    return (
        <div>
            <section >
                <div className='container mt-5'>
                    <div className='mb-2'>
                        <h1>Discover Our Special Deals</h1>
                        <p className="lh-1 mb-4 fw-bold">Find Hot Stays!</p>
                    </div>
                    <div>
                        <div className='d-flex'>
                            <div className={`flex-grow-2 pe-0 ${styles.dealsContainer}`}>
                                <img src={p1} alt='1' className={`w-100 ${styles.img1}`}/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                            <div className={`flex-grow-1 pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p2} alt='2' className={`w-100 ${styles.img1}`}/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                            <div className={`flex-grow-2 pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p3} alt='3' className={`w-100 ${styles.img1}`}/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2 d-flex'>
                            <div className={`flex-grow-2 pe-0 ${styles.dealsContainer}`}>
                                <img src={p4} alt='4' className={`w-100 ${styles.img1}`}/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                            <div className={`flex-grow-1 pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p5} alt='5' className={`w-100 ${styles.img1}`}/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                            <div className={`flex-grow-1 pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p6} alt='6' className={`w-100 ${styles.img1}`}/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default SpecialDeals

