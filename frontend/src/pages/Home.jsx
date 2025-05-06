import React from 'react'
import About from './About';
import Hero from '../pages/Hero';
import Parallelx from '../Components/Parallelx';
import Features from './Features';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const HomeMain = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Parallelx />
            <About />
            <Footer />
        </>
    )
}

export default HomeMain
