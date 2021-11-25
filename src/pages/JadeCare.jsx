import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import JadeCareContent from './../components/JadeCare/JadeCareContent';

const JadeCare = () => {
    return (
        <div>
            <Navbar/>
            <Categories/> 
            <JadeCareContent/>
            <Footer/>
        </div>
    )
}

export default JadeCare
