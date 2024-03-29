import React from 'react'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Categories/> 
            <Slider/>
            <Newsletter/>
            <Footer/>           
        </div>
    )
}

export default Home
