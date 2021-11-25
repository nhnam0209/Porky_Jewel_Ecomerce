import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import AboutUsContent from '../components/AboutUs/AboutUsContent';


const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            <Categories/> 
            <AboutUsContent/>
            <Footer/> 
        </div>
    )
}

export default AboutUs
