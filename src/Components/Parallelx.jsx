import React from 'react'
import '../styles/parallelx.css'
import { Link } from 'react-router-dom'

const Parallelx = () => {
    return (
        <div>
            <section class="more-info-section bg-color">
                <section class="container ">
                    <div class="row">
                        <div class="col-xl-6 xol-lg-6 col-md-12 col-12  d-flex flex-column justify-content-center align-items-start ">
                            <h1 class="common-heading text-capitalize fw-bolder text-white">
                                Your Safety Our priority
                            </h1>
                            <p class="mt-3 mb-5 para-width text-white" style={{ textAlign: 'justify' }}>
                                We at Safe Siren ensure that each and every person is secure and
                                get help if required as soon as possible with help of locatiion
                                sharing feature and Emergency Service available 24/7
                            </p>
                            <Link to='/contact' class="btn learn-more-btn">Contact Us</Link>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Parallelx
