import React from 'react'
import styles from './Footer.module.css'
import visa from '../../assets/img/Visa.svg'
import amex from '../../assets/img/Amex.svg'
import master from '../../assets/img/MasterCard.svg'
import paypal from '../../assets/img/Paypal.svg'
import linkedin from '../../assets/img/Linkedin.svg'
import telegram from '../../assets/img/Telegram.svg'
import twitter from '../../assets/img/Twitter.svg'
import facebook from '../../assets/img/Facebook.svg'
import instagram from '../../assets/img/Instagram.svg'
import mail from '../../assets/img/mail.svg'

function Footer() {
    return (
        <section className='container mt-5'>
            <div className='row mb-5'>
                <div className={`col-md-2 d-flex flex-column text-muted ${styles.footerSection}`}>
                    <p className='fw-bold text-black'>About Us</p>
                    <p>Our Story</p>
                    <p>Work with us</p>
                    <p>Press & media</p>
                    <p>Privacy & Security</p>
                </div>

                <div className={`col-md-2 d-flex flex-column text-muted ${styles.footerSection}`}>
                    <p className='fw-bold text-black'>We Offer</p>
                    <p>Trip Sponsorship</p>
                    <p>Last Minutes Flights</p>
                    <p>Best Deals</p>
                    <p>AI-Driven Search</p>
                </div>

                <div className={`col-md-2 d-flex flex-column text-muted ${styles.footerSection}`}>
                    <p className='fw-bold text-black'>Headquarters</p>
                    <p>England</p>
                    <p>France</p>
                    <p>Canada</p>
                    <p>Iceland</p>
                </div>

                <div className={`col-md-2 d-flex flex-column text-muted ${styles.footerSection}`}>
                    <p className='fw-bold text-black'>Travel Blogs</p>
                    <p>Bali Travel Guide</p>
                    <p>Sri Travel Guide</p>
                    <p>Peru Travel Guide</p>
                    <p>Swiss Travel Guide</p>
                </div>

                <div className={`col-md-2 d-flex flex-column text-muted ${styles.footerSection}`}>
                    <p className='fw-bold text-black'>Activities</p>
                    <p>Tour Leading</p>
                    <p>Cruising & sailing</p>
                    <p>Camping</p>
                    <p>Kayaking</p>
                </div>

                <div className={`col-md-2 d-flex flex-column text-muted ${styles.footerSection}`}>
                    <p className='fw-bold text-black'>Service</p>
                    <p>Report Error</p>
                    <p>Ask online</p>
                    <p>Travel insurance</p>
                </div>
            </div>
            <div className={`row mb-5 d-flex justify-content-between align-items-center`}>
                <div className='col-md-4 d-flex justify-content-between pe-5'>
                    <img src={visa} alt='visa pay'/>
                    <img src={amex} alt='amex pay'/>
                    <img src={master} alt='master card pay'/>
                    <img src={paypal} alt='paypal pay'/>
                </div>

                <div className='col-md-3'>
                    <div className='px-5 d-flex justify-content-between'>
                        <img src={linkedin} alt='linkedin'/>
                        <img src={telegram} alt='telegram'/>
                        <img src={twitter} alt='twitter'/>
                        <img src={facebook} alt='facebook'/>
                        <img src={instagram} alt='instagram'/>
                    </div>
                
                </div>

                <div className='col-md-5'>
                    {/*<label className='ms-5'>Email</label>*/}
                    <div className="input-group px-5">
                        <img src={mail} alt='mail' className={`input-group-text ${styles.imgIcon}`}/>
                        <input type="text" className={`form-control py-2 ${styles.emailInput}`} placeholder="Enter Your Email" id='email'/>
                        <button className={`btn btn-outline-secondary btn-primary text-white ${styles.subscribeBTN}`}>Subscribe</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer
