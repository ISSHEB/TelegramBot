import React from 'react'
import { BrowserLinkr, Link, Links } from "react-router-dom";
import '../App.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'


import SvgComponent from '../images/SvgComponent.jsx'

const Home = () => {
    return (


        <div className='homePage' >
            <Link to='/products'>
                <div className='homePage-div'>
                    <img src={img1} alt='' style={{ width: '146px', height: '146px' ,borderRadius:'15px'}} />
                    <p className='homePage-text'>Products</p>
                </div>

            </Link>
            <Link className='homePage-div' to='/routines'>
                <img src={img2} alt='' style={{ width: '146px', height: '146px', borderRadius: '15px' }} />
                <p className='homePage-text' >Routines</p>
            </Link>
            <Link className='homePage-div' to='/addPhoto'>
                <img src={img3} alt='' style={{ width: '146px', height: '146px', borderRadius: '15px' }} />
                <p className='homePage-text'>Add Photo</p>
            </Link>
            <Link className='homePage-div' to='/Scan'>
                <SvgComponent />
                <p className='homePage-text'>Scan QR</p>
            </Link>

        </div>


    )
}

export default Home