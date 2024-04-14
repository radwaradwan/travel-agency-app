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
                        <div className='row mb-1'>
                            <div className={`col-sm-12 col-md-auto pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p1} alt='1'/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                            <div className={`col-sm-12 col-md-auto pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p2} alt='2'/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                            <div className={`col-sm-12 col-md-auto pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p3} alt='3'/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className={`col-md-auto pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p4} alt='4'/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                            <div className={`col-md-auto pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p5} alt='5'/>
                                <div className={`d-flex p-2 ${styles.discoverDeals}`}>
                                    <img src={arrowDown} alt='arrowDown' className='px-1'/>
                                    <p className='px-2 my-auto'>Deals Discover</p>
                                    <img src={arrow} alt='arrow' className='px-1'/>
                                </div>
                            </div>
                            <div className={`col-md-auto pe-0 ps-1 ${styles.dealsContainer}`}>
                                <img src={p6} alt='6'/>
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

