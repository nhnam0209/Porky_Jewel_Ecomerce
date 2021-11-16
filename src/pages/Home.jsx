import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import QueueAnim from 'rc-queue-anim';
import Slider from '../components/Slider'



const Home = () => {
    return (
        <div>
            <QueueAnim>
                <Navbar/>
                <Categories/> 
                <Slider/>
                <Footer/>
            </QueueAnim>
           
        </div>
    )
}

export default Home
