import React from 'react'
import notFound from '../../images/notFound.png'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className='text-center marginStyle'>
                <img src={notFound} width={400} alt='NOT FOUND' />
                <h1>
                    <span className='text-danger fs-1'>404</span><br /> Page Not Found
                </h1>
            </div>
            <Footer />
        </>
    )
}

export default NotFound
