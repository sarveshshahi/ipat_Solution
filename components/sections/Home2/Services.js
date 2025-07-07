import React from "react";
import Link from 'next/link';

function Services() {

    return (
        <>
            
            <section id="service-menu" className="service-aera pt-130 pb-130">
                <div className="container">
                    <div className="section-header mb-50">
                        <h4 className="wow splt-txt" data-splitting>Our Service</h4>
                        <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Explore Creative Legal Protections</h2>
                    </div>
                    <div className="service__wrp">
                        <div className="row g-5">
                            <div className="col-md-6 col-xl-4">
                                <div className="service__item">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_298_26830)">
                                                <path
                                                    d="M8.47298 20.998L3.02936 15.5544L16.1957 2.38808L21.6393 7.83171L8.47298 20.998ZM2.52052 16.5133L7.51409 21.5069L0.0273438 24.0001L2.52052 16.5133ZM23.3136 6.16459L22.3694 7.10879L16.9186 1.65797L17.8628 0.713767C18.8139 -0.237922 20.3563 -0.237922 21.3074 0.713767L23.3136 2.72001C24.2578 3.67429 24.2578 5.2106 23.3136 6.16459Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_298_26830">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4><Link href="/page-service-details">Patent Search</Link></h4>
                                    <div className="image">
                                        <img src="https://ipatsolutions.com/assets/images/resource/service-1.jpg" alt="image" />
                                    </div>
                                    <p className="text">Patent search is a crucial process in the field of intellectual property (IP)</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="service__item second-child">
                                    <div className="icon">
                                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_356_28149)">
                                                <path
                                                    d="M13.4107 18.697C12.913 19.5257 12.1843 20.2082 11.2245 20.7323C10.2589 21.2563 9.12135 21.5488 7.80019 21.6037V23.773H6.13542V21.5732C4.2929 21.4148 2.81178 20.848 1.68021 19.873C0.548633 18.898 -0.0497396 17.5757 -0.114909 15.8938H4.62467C4.73131 16.9663 5.2349 17.6549 6.13542 17.9596V13.7245C4.77871 13.3649 3.70046 13.0176 2.8888 12.6763C2.08307 12.3351 1.37214 11.7927 0.767839 11.0432C0.157618 10.2937 -0.144531 9.26383 -0.144531 7.95977C-0.144531 6.33273 0.441993 5.02867 1.61504 4.04758C2.78809 3.06648 4.2929 2.51195 6.13542 2.38398V0.220703H7.80019V2.39008C9.62493 2.53633 11.0646 3.07867 12.1251 4.0232C13.1855 4.96773 13.7721 6.28398 13.8965 7.95977H9.12728C9.02064 6.99695 8.58223 6.3693 7.80019 6.08289V10.2388C9.23984 10.6471 10.3536 11.0188 11.1357 11.3357C11.9177 11.6587 12.6168 12.1888 13.2329 12.9323C13.8491 13.6757 14.1572 14.6873 14.1572 15.973C14.1572 16.942 13.9024 17.8804 13.4107 18.697ZM4.96829 8.87992C5.2349 9.18461 5.62591 9.45273 6.12949 9.6843V5.96102C5.64368 6.05242 5.25859 6.24133 4.98607 6.53992C4.70762 6.83242 4.57135 7.2407 4.57135 7.75867C4.56543 8.19742 4.70169 8.57523 4.96829 8.87992ZM9.03249 17.399C9.33463 17.0577 9.48867 16.6373 9.48867 16.1376C9.48867 15.6745 9.34648 15.2966 9.05618 14.998C8.77181 14.7055 8.35117 14.4496 7.79427 14.2363V18.0388C8.31562 17.9535 8.73034 17.7402 9.03249 17.399Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_356_28149">
                                                    <rect width="14" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4><Link href="/page-service-details">Patent Drafting</Link></h4>
                                    <div className="image">
                                        <img src="https://ipatsolutions.com/assets/images/resource/service-2.jpg" alt="image" />
                                    </div>
                                    <p className="text">Patent drafting is a critical step in the patent application process.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="service__item">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.75 13.5H2.25C1.83579 13.5 1.5 13.8358 1.5 14.25V21.75C1.5 22.1642 1.83579 22.5 2.25 22.5H6.75C7.16421 22.5 7.5 22.1642 7.5 21.75V14.25C7.5 13.8358 7.16421 13.5 6.75 13.5Z"
                                                fill="white" />
                                            <path
                                                d="M21.75 7.5H17.25C16.8358 7.5 16.5 7.83579 16.5 8.25V21.75C16.5 22.1642 16.8358 22.5 17.25 22.5H21.75C22.1642 22.5 22.5 22.1642 22.5 21.75V8.25C22.5 7.83579 22.1642 7.5 21.75 7.5Z"
                                                fill="white" />
                                            <path
                                                d="M14.25 1.5H9.75C9.33579 1.5 9 1.83579 9 2.25V21.75C9 22.1642 9.33579 22.5 9.75 22.5H14.25C14.6642 22.5 15 22.1642 15 21.75V2.25C15 1.83579 14.6642 1.5 14.25 1.5Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <h4><Link href="/page-service-details">Landscape Analysis</Link></h4>
                                    <div className="image">
                                        <img src="https://ipatsolutions.com/assets/images/resource/service-3.jpg" alt="image" />
                                    </div>
                                    <p className="text">Patent landscape analysis (or patent mapping) is a strategic tool used to.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Services