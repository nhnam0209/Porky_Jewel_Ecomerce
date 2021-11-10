import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Picture from '../components/Picture'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Categories/> 
            <Picture/>
            <Footer/>           
        </div>
    )
}

export default Home
