import React from 'react'
import styles from './Downloads.module.css'
import apple from '../../assets/img/apple.svg'
import googlePlay from '../../assets/img/googlePlay.svg'
import qr from '../../assets/img/QR.svg'
function Downloads() {
    return (
        <section>
            <div className='container d-flex justify-content-md-between flex-md-row flex-column mt-5 mb-2 align-items-md-center'>
                <div>
                    <p className={styles.titleDownloads}>Go Further With The Mina Voyages</p>
                    <div className={styles.bodyDownloads}>
                        <p>Enjoy savings on chosen hotels and flights when you book through Mina Voyages website.</p>
                        <p>Additionally, earn One Key Cash for every booking made through the app.</p>
                    </div>   
                    <p className='text-muted'>Secured By Europe GTP</p>
                </div>
                <div>
                    <div className='d-flex justify-content-end mb-4 me-md-0 me-3'>
                        <img src={apple} alt='apple download' className='me-4'/>
                        <img src={qr} alt='QR'/>
                    </div>
                    <div className='d-flex justify-content-end me-md-0 me-3'>
                        <img src={googlePlay} alt='googlePlay download' className='me-4'/>
                        <img src={qr} alt='QR'/>
                    </div>
                </div>
            </div>
            <hr/>
        </section>
    )
}

export default Downloads
