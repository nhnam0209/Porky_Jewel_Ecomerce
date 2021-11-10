import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Picture from '../components/Picture'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Categories/> 
            <Picture/>           
        </div>
    )
}

export default Home
