import React, { useEffect } from 'react'
import '../styles/parallelx.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import email from '../images/emailImg.png'
import toast from 'react-hot-toast'

const ContactUs = () => {

    const notify = () => {
        toast.success('Email Sended Successfully')
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <div className='marginStyle'>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                            <div className="featured-image mb-3 animateImg">
                                <img src={email} className="img-fluid" alt="Report" />
                            </div>
                        </div>
                        <form className="col-md-6 right-box" action="https://formspree.io/f/mzbqpgzj" method="POST" onSubmit={notify}>
                            <div className="row align-items-center">
                                <div className="header-text mb-4">
                                    <h2>Contact Us</h2>
                                    <p>We are here to help, available 24/7</p>
                                </div>
                                <div className="input-group d-flex align-items-center mb-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <input
                                            type="email" name="email"
                                            className="form-control form-control-lg border-dark fs-6"
                                            placeholder="Enter your Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group d-flex align-items-center mb-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <input
                                            name="message" type="text"
                                            className="form-control form-control-lg border-dark fs-6"
                                            placeholder="Enter the your Full Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group d-flex align-items-center mb-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <input
                                            name="message" type="text"
                                            className="form-control form-control-lg border-dark fs-6"
                                            placeholder="Enter the your Subject"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group d-flex align-items-center mb-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <textarea
                                            type="text"
                                            name="message"
                                            className="form-control form-control-lg border-dark fs-6"
                                            placeholder="Enter your Message"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <button
                                            className="btn text-white btn-lg btn-block"
                                            style={{ width: '100%', backgroundColor: 'blueviolet' }}
                                            type="submit"
                                        >
                                            Submit Mail
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs
