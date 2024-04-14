import React from 'react'
import banner1 from '../../assets/img/Banner1.svg'
import banner2 from '../../assets/img/Banner2.svg'
import banner3 from '../../assets/img/Banner3.svg'
import banner4 from '../../assets/img/Banner4.svg'

function Voyages() {
    return (
        <section className='container mb-5'>
            <div className='mb-5'>
                <h2 className='fw-bold'>Go Further With Mina Voyages </h2>
                <p className="lh-1 mb-4">Browse By Type</p>
            </div>
            <div className="row mb-lg-4">
                <div className="col-md-6 mb-md-0 mb-3">
                    <div className='position-relative'>
                        <img src={banner1} alt='banner1' className="w-100" />
                        <div className='position-absolute bottom-0 left-0 p-3'>
                            <p className='text-white fw-bold fs-4 mb-0'>Reserve Your hotel, Pursue Your Team</p>
                        </div> 
                    </div>
                    
                </div>
                <div className="col-md-6 mb-md-0 mb-3">
                    <div className='position-relative'>
                        <img src={banner2} alt='banner2' className="w-100" />
                        <div className='position-absolute bottom-0 left-0 p-3'>
                            <p className='text-white fw-bold fs-4 mb-0'>Subscribe Our Newsletter</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-md-0 mb-3">
                    <div className='position-relative'>
                        <img src={banner3} alt='banner3' className="w-100" />
                        <div className='position-absolute bottom-0 left-0 p-3'>
                            <p className='text-white fw-bold fs-4 mb-0'>Review Hotel Services Worldwide</p>
                        </div> 
                    </div>
                </div>
                <div className="col-md-6 mb-md-0 mb-3">
                    <div className='position-relative'>
                        <img src={banner4} alt='banner4' className="w-100" />
                        <div className='position-absolute bottom-0 left-0 p-3'>
                            <p className='text-white fw-bold fs-4 mb-0'>Follow the Lates Tour News</p>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Voyages
