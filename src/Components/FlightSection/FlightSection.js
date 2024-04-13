import React from 'react'
import flight from '../../assets/img/flight.png'
import styles from './FlightSection.module.css'
import hotel from '../../assets/img/hotel.svg'
import calender from '../../assets/img/calendar.svg'
import people from '../../assets/img/peopleIcon.svg'
import slider from '../../assets/img/Slider.svg'
function FlightSection() {
    return (
        <div>
            <div className={styles.imgContainer}>
                <img src={flight} alt='flight' className={styles.mainImg}/>
                <div>
                    <div className={styles.textOverlay}>
                        <p>Discover Your Trips </p>
                        <p>Worldwide</p>
                        <p>Special Offers To Suit Your Plan</p>
                    </div> 
                    <div className={`container  ${styles.inputsBook}`}>
                        <div className='row'>
                            <div className='col-md-4 p-0'>
                                <form className={`d-flex input-group ${styles.inputContainer}`}>
                                    <img src={hotel} alt='hotel logo' className={`input-group-text ps-4 py-2 ${styles.imgIcon}`}/>
                                    <input type='text' className='form-control py-2' placeholder='where are you going to?'/>
                                </form>
                            </div>
                            <div className='col-md-3 p-0'>
                                <form className={`d-flex input-group ${styles.inputContainer}`}>
                                    <img src={calender} alt='calender logo' className={`input-group-text ps-4 py-2 ${styles.imgIcon}`}/>
                                    <input type='text' className='form-control py-2' placeholder='check in date     check out date'/>
                                </form>
                            </div>
                            <div className='col-md-4 p-0'>
                                <form className={`d-flex input-group ${styles.inputContainer}`}>
                                    <img src={people} alt='people logo' className={`input-group-text ps-4 py-2 ${styles.imgIcon}`}/>
                                    <input type='text' className='form-control text-center py-2 ' placeholder='adults 2     children 3      room   '/>
                                    <img src={slider} alt='slider logo' className={`input-group-text py-2 ${styles.imgIcon}`}/>
                                </form>
                            </div>
                            <div className='col-md-1 p-0'>
                                <button className={`btn btn-primary px-4 py-2 ${styles.searchBtnOverlay}`}>Search</button>
                            </div>
                        </div>
                    </div>     
                    
                </div>
            </div>
            
        </div>
        
    );
}

export default FlightSection
