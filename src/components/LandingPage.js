import React from 'react';
import '../styles/LandingPage.css';
import {Link} from 'react-router-dom'

const LandingPage = () => {


    return ( 
        <div className='head'>
            <div className='header'>
            <Link to='/home' className='noLink'>
            <h1>Go Henry<span>Food!!!</span></h1>
            </Link>
            </div>
        </div>
     );
}
 
export default LandingPage;