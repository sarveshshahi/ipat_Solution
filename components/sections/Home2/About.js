import React from "react";
import Link from 'next/link';

function About() {

    // Avoid duplicated list items by using arrays
    const listOne = [
        "10+ Years of Experienced",
        "Projects Delivered Successfully",
    ];

    const listTwo = [
        "10+ Language Experts",
        "99% Case Success Rate",
    ];

    return (
        <section id="about-menu" className="about-two-area bg-sub pt-130 pb-130">
            <div className="container">
                <div className="row g-5">
                    {/* Left Side */}
                    <div className="col-xl-6">
                        <div className="about-two-left">
                            <div className="section-header mb-50">
                                <h2 className="wow split-txt data-splitting">ABOUT US</h2>
                                {/* <h2 className="wow splt-txt" data-splitting>
                                    We work with you to Make your <br /> Vision a Reality
                                </h2> */}
                            </div>

                            <div className="about-two__image imageUpToDown wow gsap__parallax">
                                <img src="	https://ipatsolutions.com/assets/images/resource/about-8.jpg" alt="image" />
                                <div className="about-two__rectangle">
                                    <div className="item-one wow" />
                                    <div className="item-two wow" />
                                    <div className="item-three wow" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-xl-6">
                        <div className="about-two-right">
                            <div className="section-header mb-40">
                                <h2 className="wow splt-txt" data-splitting>
                                    Let’s Explore Our Intellectual Property Journey
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                   We are a team of the dedicated patent professionals, united by our commitment to our excellence patent services. With years of collective experience acros diverse industries team of this dedicated patent professionals, united by our.
                                </p>
                            </div>

                            <div className="about-two__content">
                                {/* First List */}
                                <ul className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    {listOne.map((item, index) => (
                                        <li key={`list1-${index}`}>
                                            <i className="fa-light fa-check" /> {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Second List */}
                                <ul className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    {listTwo.map((item, index) => (
                                        <li key={`list2-${index}`}>
                                            <i className="fa-light fa-check" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/page-about" legacyBehavior>
                                <a className="btn-one mt-50 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" data-splitting data-text="Know More">
                                    Know More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
