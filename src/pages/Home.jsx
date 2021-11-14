import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Picture from '../components/Picture'
import Slider from '../components/Slider'



const Home = () => {
    return (
        <div>
            <Navbar/>
            <Categories/> 
            <Slider/>
            <Footer/>           
        </div>
    )
}

export default Home
