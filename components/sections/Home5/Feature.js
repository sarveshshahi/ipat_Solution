import React, { useState } from "react";
import Link from 'next/link';

const serviceCards = [
    { icon: "fas fa-search", title: "Patent Searches", link: "/costom/PatentabilitySearch" },
    { icon: "fas fa-chart-line", title: "IP Commercialization", link: "/IP_Commercialization/patient_valuation_service" },
    { icon: "fas fa-pencil-ruler", title: "Patent Drafting & Illustrations", link: "/PatentDrafting&Illustrations/patent_drafting" },
    { icon: "fas fa-chart-pie", title: "Patent Analytics", link: "/Patent_Analytics/competitive_intelligence" },
    { icon: "fas fa-search", title: "Patent Searches", link: "/costom/Technology Transfer" },
    { icon: "fas fa-chart-line", title: "IP Commercialization", link: "/IP_Commercialization/patient_valuation_service" },
    { icon: "fas fa-pencil-ruler", title: "Patent Drafting & Illustrations", link: "/PatentDrafting&Illustrations/patent_drafting" },
    { icon: "fas fa-chart-pie", title: "Patent Analytics", link: "/Patent_Analytics/competitive_intelligence" }
];

const industryCards = [
    { icon: "fas fa-microchip", title: "Technological Science", link: "/page-services" },
    { icon: "fas fa-leaf", title: "Environmental Science", link: "/page-services" },
    { icon: "fas fa-network-wired", title: "Information & Communication Technology", link: "/page-services" }
];

function Feature() {
    const [activeService, setActiveService] = useState(1);
    const [activeIndustry, setActiveIndustry] = useState(1);

    return (
        <>
            <section className="feature-five-area have-margin pt-130 mb-4">
                <div className="container">
                    <h2 className="mb-20">SERVICES</h2>
                    <div className="feature-five__wrp bg-sub">
                        <div className="row g-2">
                            {serviceCards.map((card, idx) => (
                                <div className="col-lg-3" key={card.title}>
                                    <div
                                        className={`feature-five__item feature-card ${activeService === idx + 1 ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveService(idx + 1)}
                                    >
                                        <div className="shape">
                                            <img src="assets/images/shape/feature-five-item-shape.png" alt="shape" />
                                        </div>
                                        <div className="icon">
                                            <i className={card.icon} style={{ fontSize: 32 }}></i>
                                        </div>
                                        <div className="content">
                                            <h5 className="mb-20 mt-40 title">
                                                <Link href={card.link}>{card.title}</Link>
                                            </h5>
                                            <Link href={card.link} className="readMore-btn mt-30">
                                                Read More <i className="fa-regular fa-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className="mt-120 mb-20">INDUSTRIES</h2>
                    <div className="feature-five__wrp bg-sub">
                        <div className="row g-2">
                            {industryCards.map((card, idx) => (
                                <div className="col-lg-4" key={card.title}>
                                    <div
                                        className={`feature-five__item feature-card ${activeIndustry === idx + 1 ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveIndustry(idx + 1)}
                                    >
                                        <div className="shape">
                                            <img src="assets/images/shape/feature-five-item-shape.png" alt="shape" />
                                        </div>
                                        <div className="icon">
                                            <i className={card.icon} style={{ fontSize: 32 }}></i>
                                        </div>
                                        <div className="content">
                                            <h5 className="mb-20 mt-40 title">
                                                <Link href={card.link}>{card.title}</Link>
                                            </h5>
                                            <Link href={card.link} className="readMore-btn mt-30">
                                                Read More <i className="fa-regular fa-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .feature-card {
                    min-height: 320px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    box-sizing: border-box;
                }
            `}</style>
        </>
    );
}

export default Feature;