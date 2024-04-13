import React from 'react'
import styles from './Header.module.css'
function Header() {
return (
    <div className='d-flex justify-content-center m-5'>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>Trip</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>%Deals</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>Hotel</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>Flight</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>Apartment</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>Camper</button>
    </div>
    
);
}

export default Header
