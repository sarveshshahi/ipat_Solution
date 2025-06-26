import React from "react";
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';

function About() {

    return (
        <>

        <section id="about-menu" className="about-area">
            <div className="about__wrp">
                <div className="row g-0">
                    <div className="col-lg-4">
                        <div className="about__item about__funfact">
                            <h4 className="color-light wow splt-txt mb-40" data-splitting>Driving Growth Through
                                User-Centered Enhancing Productivity and Revenue</h4>
                            <div>
                                <ul>
                                    <li className="icon">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 26.25C6.87138 26.25 6.74188 26.2211 6.62025 26.1634C6.31838 26.0173 6.125 25.7119 6.125 25.375V21H3.5C2.05275 21 0.875 19.8223 0.875 18.375V4.375C0.875 2.92775 2.05275 1.75 3.5 1.75H24.5C25.9473 1.75 27.125 2.92775 27.125 4.375V18.375C27.125 19.8223 25.9473 21 24.5 21H13.8696L7.54688 26.0584C7.3885 26.1852 7.19513 26.25 7 26.25ZM3.5 3.5C3.017 3.5 2.625 3.89287 2.625 4.375V18.375C2.625 18.8571 3.017 19.25 3.5 19.25H7C7.48387 19.25 7.875 19.6411 7.875 20.125V23.555L13.0156 19.4416C13.1714 19.3174 13.363 19.25 13.5625 19.25H24.5C24.983 19.25 25.375 18.8571 25.375 18.375V4.375C25.375 3.89287 24.983 3.5 24.5 3.5H3.5Z"
                                                fill="white" />
                                            <path
                                                d="M21 10.5H7C6.51613 10.5 6.125 10.108 6.125 9.625C6.125 9.142 6.51613 8.75 7 8.75H21C21.4839 8.75 21.875 9.142 21.875 9.625C21.875 10.108 21.4839 10.5 21 10.5Z"
                                                fill="white" />
                                            <path
                                                d="M14 14H7C6.51613 14 6.125 13.608 6.125 13.125C6.125 12.642 6.51613 12.25 7 12.25H14C14.4839 12.25 14.875 12.642 14.875 13.125C14.875 13.608 14.4839 14 14 14Z"
                                                fill="white" />
                                        </svg>
                                    </li>
                                    <li>
                                        <h3><span className="count"><CounterUp end={140} /></span>k<sup>+</sup></h3>
                                    </li>
                                </ul>
                                <p className="text">Trusted by Customers Around the Globe</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about__item about__testimonial">
                            <div>
                                <div className="icon mb-50">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_99_7624)">
                                            <path
                                                d="M13.5302 16.2398C15.5748 11.7362 19.8683 12.1278 21.9164 14.5977C23.9644 17.0677 21.4017 20.254 19.1527 20.6456C16.9037 21.0373 13.3258 19.5686 13.332 14.6571C13.3404 8.11369 20.4386 1.84444 21.2186 1.29395"
                                                stroke="white" strokeWidth="3" strokeLinecap="round" />
                                            <path
                                                d="M1.53027 16.2398C3.57479 11.7362 7.8683 12.1278 9.91637 14.5977C11.9644 17.0677 9.4017 20.254 7.1527 20.6456C4.90373 21.0373 1.32581 19.5686 1.33204 14.6571C1.34034 8.11369 8.43857 1.84444 9.21857 1.29395"
                                                stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        </g>
                                        <defs>
                                            <clipPath>
                                                <rect width="24" height="22" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p>Their user-cantered design approach streamlines outer operations and significantly
                                    boosts your productivity
                                    and revenue. From the start, they took the time to understand best time.</p>
                            </div>
                            <h4 className="title">Ronex HM. <span>Spain</span></h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about__item about__content">
                            <h4 className="color-light wow splt-txt" data-splitting>Our user-centred design encourages
                                productivity & boosts revenue.</h4>
                            <ul>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                                            fill="white" />
                                    </svg>
                                    Clarify the company’s vision growth objectives.
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                                            fill="white" />
                                    </svg>
                                    Business Management consultation
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                                            fill="white" />
                                    </svg>
                                    Clearly communicate the team’s mission
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                                            fill="white" />
                                    </svg>
                                    Review report’s objectives to understand purpose
                                </li>
                            </ul>
                            <Link href="/page-about" className="btn-two-light" data-splitting data-text="Learn More">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>            

        </>
    )
}
export default About;