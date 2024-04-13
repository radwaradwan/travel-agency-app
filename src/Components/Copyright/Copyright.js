import React from 'react'
import styles from './Copyright.module.css'
import copyright from '../../assets/img/copyrightFooter.svg'
import email from '../../assets/img/EmailFooter.svg'
import location from '../../assets/img/locationFooter.svg'
import phone from '../../assets/img/phoneFooter.svg'
function Copyright() {
    return (
        <section>
            <div className={`d-flex justify-content-center p-3 ${styles.CopyrightSection}`}>
                <div className='col-md-auto d-flex  me-4'>
                    <img src={copyright} alt='copyright'/>
                    <p className='text-muted mt-3 mx-1'>Copyright Mina Voyages</p>
                </div>
                <div className='col-md-auto d-flex  me-4'>
                    <img src={email} alt='email'/>
                    <p className='text-muted mt-3 mx-1'>minavoyages@gmail.com</p>
                </div>
                <div className='col-md-auto d-flex  me-4'>
                    <img src={location} alt='location'/>
                    <p className='text-muted mt-3 mx-1'>123 Oxford Street,London</p>
                </div>
                <div className='col-md-auto d-flex me-4'>
                    <img src={phone} alt='phone'/>
                    <p className='text-muted mt-3 mx-1'>+44 20 7123 4567</p>
                </div>
            </div>
        </section>
    )
}

export default Copyright
