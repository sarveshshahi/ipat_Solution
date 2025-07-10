import React, { useState } from 'react';

// Make sure Font Awesome CSS is loaded in your _app.js or _document.js

function industrie_service() {
    const [hovered, setHovered] = useState(null);

    const cardStyle = {
        width: "260px",
        height: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "0 auto",
        transition: "box-shadow 0.3s, background 0.3s"
    };

    const hoverStyle = {
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        background: "#f5f7fa",
        cursor: "pointer"
    };

    // Assign icons as you like for each category
    const cards = [
        // Technological science
        { icon: "fas fa-microchip", title: "Technological Science" },
        { icon: "fas fa-car", title: "Automobile" },
        { icon: "fas fa-robot", title: "Mechatronics" },
        { icon: "fas fa-box-open", title: "Packaging" },
        { icon: "fas fa-stethoscope", title: "Medical Devices" },
        { icon: "fas fa-oil-can", title: "Oil And Gas" },
        { icon: "fas fa-cogs", title: "Heavy Machinery" },
        { icon: "fas fa-microchip", title: "Semiconductor" },
        { icon: "fas fa-blender", title: "Domestic Appliances" },
        { icon: "fas fa-print", title: "Printing Machines" },
        { icon: "fas fa-cube", title: "Materials and Metallurgy" },

        // Environmental science
        { icon: "fas fa-leaf", title: "Environmental Science" },
        { icon: "fas fa-pills", title: "Pharmaceuticals" },
        { icon: "fas fa-dna", title: "Biochemistry" },
        { icon: "fas fa-flask", title: "Chemicals" },
        { icon: "fas fa-apple-alt", title: "Food And Beverages" },
        { icon: "fas fa-vial", title: "Organic Chemistry" },
        { icon: "fas fa-heartbeat", title: "Biomedical Device" },
        { icon: "fas fa-atom", title: "Polymer" },
        { icon: "fas fa-cube", title: "Metallurgy And Material Science" },
        { icon: "fas fa-shopping-basket", title: "FMCG" },
        { icon: "fas fa-heart", title: "Biomedical" },
        { icon: "fas fa-dna", title: "Biotechnology" },

        // Information & Communication Technology
        { icon: "fas fa-network-wired", title: "Information & Communication Technology" },
        { icon: "fas fa-phone-alt", title: "Telecommunication" },
        { icon: "fas fa-wifi", title: "Wi-Fi Standards" },
        { icon: "fas fa-cube", title: "3D Printing" },
        { icon: "fas fa-location-arrow", title: "Navigation Devices" },
        { icon: "fas fa-shield-alt", title: "Network Security" },
        { icon: "fas fa-image", title: "Image Processing" },
        { icon: "fas fa-cloud", title: "Cloud Computing" },
        { icon: "fas fa-desktop", title: "Computer Science And IT" }
    ];

    return (
        <>
            <section className="service-three-area pt-130 pb-20">
                <div className="container">
                    <div className="row g-4">
                        {cards.map((card, idx) => {
                            const isActive = hovered === idx || idx === 1;
                            return (
                                <div
                                    className="col-md-6 col-xl-3 wow fadeInUp"
                                    data-wow-delay={`${idx * 50}ms`}
                                    data-wow-duration="1000ms"
                                    key={card.title}
                                >
                                    <div
                                        className={`service-three__item${isActive ? " active" : ""}`}
                                        style={isActive ? { ...cardStyle, ...hoverStyle } : cardStyle}
                                        onMouseEnter={() => setHovered(idx)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        <div className="icon" style={{ fontSize: "60px", color: "#4B535D", marginBottom: "20px" }}>
                                            <i className={card.icon}></i>
                                        </div>
                                        <h4>{card.title}</h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
export default industrie_service;