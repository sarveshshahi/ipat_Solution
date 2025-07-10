import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 4,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".project__arry-prev",
        nextEl: ".project__arry-next",
    },
    loop: true,
    breakpoints : {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
}

function Projects() {
    const [activeTab, setActiveTab] = useState("tab-1");    

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const renderTabImage = (tabId, imageSrc) => {
        return (
            <img
                id={tabId}
                className={`tab-img ${activeTab === tabId ? 'active' : ''}`}
                src={imageSrc}
                alt="image"
            />
        );
    };

    return (
        <>
          

            {/* New Section: What We Do */}
            <section className="what-we-do-area pt-100 pb-100">
                <div className="container">
                    <div className="section-header mb-40">
                        <h2>What We Do</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>End-to-End IP Lifecycle Support:</h4>
                            <ul>
                                <li>Patent Searches – Patentability Search (or Novelty Search), Freedom to Operate (FTO) Search (or Clearance Search), Invalidity/Validity Search, State of the Art Search, Design Search, Assignee Search, Chemical Structure Search, Non-Patent Literature Search.</li>
                                <li>IP Commercialization – Patent Valuation Service, Patent Monetization Support, Patent Infringement Analysis, Evidence of Use (EoU) Chart Preparation, Patent Licensing and Monetization, Patent Infringer/Licensee Identification, Patent Mining.</li>
                                <li>Patent Drafting & Illustrations – Patent Drafting, Office Action Response, Design Patent Drawings, Utility Patent Drawings.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h4>Advanced IP & Technology Services:</h4>
                            <ul>
                                <li>Patent Analytics – Competitive Intelligence, Patent Monitoring, Landscape Analysis, Patent Watch Service, Patent Portfolio Management, Patent Competitive Benchmarking.</li>
                                <li>Technology Consulting – Growth & Innovation Analytics, Innovation & Emerging Technology Consulting, Engineering & R&D Technology Consulting, Technology Forecasting, Technology Scouting & Monitoring, Technology Due Diligence, Sustainability & Green Tech Consulting, Market Research, Market Survey.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Projects;
