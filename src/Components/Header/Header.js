import React from 'react'
import styles from './Header.module.css'
function Header() {
return (
    <section className={`d-flex justify-content-md-center m-md-5 my-5 ${styles.Header}`}>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ms-2 ${styles.headerBtn}`}>Trip</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>%Deals</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>Hotel</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>Flight</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>Apartment</button>
        <button type="button" className={`btn btn-outline-secondary rounded-pill me-2 ${styles.headerBtn}`}>Camper</button>
    </section>
    
);
}

export default Header
