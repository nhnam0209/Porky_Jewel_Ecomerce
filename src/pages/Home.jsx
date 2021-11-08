import React from 'react'
import Annoucement from '../components/Annoucement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Annoucement/>
            <Navbar/>
            <Categories/>
        </div>
    )
}

export default Home
