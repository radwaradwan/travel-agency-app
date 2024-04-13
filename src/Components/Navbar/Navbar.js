import React from 'react'
import '../../assets/css/MainStyle.css'
import styles from './Navbar.module.css'
import logo from '../../assets/img/logo.svg';
import dollar from '../../assets/img/dollar.svg';
import England from '../../assets/img/England.svg';
import fav from '../../assets/img/fav.svg';
import Phone from '../../assets/img/Phone.svg';
import Photo from '../../assets/img/Photo.svg';
import ques from '../../assets/img/ques.svg';
import search from '../../assets/img/search.svg'


function Navbar() {
  return (
    <nav className='container-fluid d-flex justify-content-around my-3'>
      <img src={logo} alt='logo'/>
      <form className={`d-flex col-md-4 ${styles.search}`}>
        <input className="form-control" type="search"/>
        <img src={search} alt='search' className={styles.customSearch}/>
      </form>
      <div className='d-flex'>
        <img src={England} alt='logo' className='me-2'/>
        <img src={dollar} alt='logo' className='me-2'/>
        <img src={ques} alt='logo' className='me-2'/>
        <img src={fav} alt='logo' className='me-2'/>
        <img src={Phone} alt='logo' className='me-2'/>
        <img src={Photo} alt='logo' className='me-2'/>
        <div>
          <p className={styles.yourAccount}>Your Account</p>
          <p className={`lh-1 m-0 ${styles.accountName}`}>Anna Carinna</p>
        </div>

      </div>


    </nav>
  );
}

export default Navbar

