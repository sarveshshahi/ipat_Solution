import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';

const swiperOptions = {
    modules: [ Navigation ],
    spaceBetween: 30,
    speed: 500,
    breakpoints: {
        575: {
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: ".about__arry-next",
        prevEl: ".about__arry-prev",
    },
};


function About() {

    return (
        <>
            
        <section id="about-menu" className="about-five-area pt-130">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-6">
                        <div className="about-five__image">
                            <img src="assets/images/about/about-five-image.jpg" alt="image" />
                            <div className="icon">
                                <img className="animation__rotate" src="assets/images/about/about-five-icon.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-five__wrp">
                            <div className="section-header mb-30">
                                <h6>ABOUT STRATIFY</h6>
                                <h2 className="wow splt-txt" data-splitting>Our Story in Intellectual Property.</h2>
                            </div>
                            <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">With 10 Years of
                                Experience</h4>
                            <p className="wow fadeInUp text mt-15" data-wow-delay="200ms" data-wow-duration="1500ms">We are a dedicated team of patent professionals, committed to excellence in patent services. With years of collective experience across diverse industries, we offer expert and collaborative partnerships to protect your innovations.</p>
                            <div className="btn-wrp">
                                <Link href="/page-about" className="btn-one wow fadeInUp mt-50" data-wow-delay="300ms"
                                    data-wow-duration="1500ms" data-splitting data-text="Discover More">Discover
                                    More</Link>
                                <Link href="/contact" className="btn-two wow fadeInUp mt-50" data-wow-delay="400ms"
                                    data-wow-duration="1500ms" data-splitting data-text="Contact Us">Contact Us</Link>
                            </div>
                            <div className="wrp mt-50">
                                <div className="head mb-30">
                                    <h5>Our Results <span className="line" /></h5>
                                    <div className="arry-wrp">
                                        <button className="about__arry-prev"><i
                                                className="fa-light fa-arrow-left-long" /></button>
                                        <button className="about__arry-next"><i
                                                className="fa-light fa-arrow-right-long" /></button>
                                    </div>
                                </div>
                                <div className="swiper about-five__slider">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="about-five__item">
                                                <h2><span className="count"><CounterUp end={980} /></span>+</h2>
                                                <h4 className="my-2">Customers Served</h4>
                                                <p>Stratify provides comprehensive consultancy and training services, specializing in data-driven solutions.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="about-five__item">
                                                <h2><span className="count"><CounterUp end={120} /></span>+</h2>
                                                <h4 className="my-2">Happy Customers</h4>
                                                <p>Driven by Client Success</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="about-five__item">
                                                <h2><span className="count"><CounterUp end={90} /></span>%</h2>
                                                <h4 className="my-2">Case Success Rate</h4>
                                                <p>Commitment to Quality</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="about-five__item">
                                                <h2><span className="count"><CounterUp end={95} /></span>+</h2>
                                                <h4 className="my-2">Global Clients</h4>
                                                <p>We are committed to continuous learning, ensuring that our clients always receive the best solutions available.</p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default About