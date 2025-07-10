import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <ul>
                {/* Home */}
                <li>
                    <Link href="/">Home <i className="fa-solid fa-angle-down" /></Link>
                    
                </li>
                <li>
                    <Link href="/page-about">About Us</Link>
                </li>

                {/* Patent Services (megamenu style, but as a long list for mobile) */}
                <li>
                    <Link href="#">Patent Services <i className="fa-solid fa-angle-down" /></Link>
                    <ul className={isActive.key === 2 ? "sub-menu d-block" : "d-none"}>
                        {/* Patent Searches */}
                        <li className="title" style={{ color: 'green', fontSize: "18px", fontWeight: 700 }}>Patent Searches</li>
                        <li><Link href="/costom/PatentabilitySearch">Patentability Search (or Novelty Search)</Link></li>
                        <li><Link href="/costom/freedom_to_operate">Freedom to Operate (FTO) Search (or Clearance Search)</Link></li>
                        <li><Link href="/costom/validity_search">Invalidity/Validity Search</Link></li>
                        <li><Link href="/costom/state_of_the_art_search">State of the Art Search</Link></li>
                        <li><Link href="/costom/design_search">Design Search</Link></li>
                        <li><Link href="/costom/assignee_search">Assignee Search</Link></li>
                        <li><Link href="/costom/chemical_structure_search">Chemical Structure Search</Link></li>
                        <li><Link href="/costom/non_patent_literature_search">Non-Patent Literature Search</Link></li>
                        {/* IP Commercialization */}
                        <li className="title" style={{ color: 'green', fontSize: "18px", fontWeight: 700, marginTop: 10 }}>IP Commercialization</li>
                        <li><Link href="/IP_Commercialization/patient_valuation_service">Patent Valuation Service</Link></li>
                        <li><Link href="/IP_Commercialization/patent_monetization_support">Patent Monetization Support</Link></li>
                        <li><Link href="/IP_Commercialization/patent_infringement_analysis">Patent Infringement Analysis</Link></li>
                        <li><Link href="/IP_Commercialization/evidence_of_use_eou_chart_preparation">Evidence of Use (EoU) Chart Preparation</Link></li>
                        <li><Link href="/IP_Commercialization/patent_licensingand_monetization">Patent Licensing and Monetization</Link></li>
                        <li><Link href="/IP_Commercialization/PatentInfringer_LicenseeIdentification">Patent Infringer/Licensee Identification</Link></li>
                        <li><Link href="/IP_Commercialization/patent_mining">Patent Mining</Link></li>
                        {/* Patent Drafting & Illustrations */}
                        <li className="title" style={{ color: 'green', fontSize: "18px", fontWeight: 700, marginTop: 10 }}>Patent Drafting & Illustrations</li>
                        <li><Link href="/PatentDrafting&Illustrations/patent_drafting">Patent Drafting</Link></li>
                        <li><Link href="/PatentDrafting&Illustrations/office_action_response">Office Action Response</Link></li>
                        <li><Link href="/PatentDrafting&Illustrations/design_patent_drawings">Design Patent Drawings</Link></li>
                        <li><Link href="/PatentDrafting&Illustrations/utility_patent_drawings">Utility Patent Drawings</Link></li>
                        {/* Patent Analytics */}
                        <li className="title" style={{ color: 'green', fontSize: "18px", fontWeight: 700, marginTop: 10 }}>Patent Analytics</li>
                        <li><Link href="/Patent_Analytics/competitive_intelligence">Competitive Intelligence</Link></li>
                        <li><Link href="/Patent_Analytics/Patent_Monitoring">Patent Monitoring</Link></li>
                        <li><Link href="/Patent_Analytics/Landscape_Analysis">Landscape Analysis</Link></li>
                        <li><Link href="/Patent_Analytics/Patent_Watch_Service">Patent Watch Service</Link></li>
                        <li><Link href="/Patent_Analytics/Patent_Portfolio_Management">Patent Portfolio Management</Link></li>
                        <li><Link href="/Patent_Analytics/Patent_Competitive_Benchmarking">Patent Competitive Benchmarking</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>

                {/* Consulting Services */}
                <li>
                    <Link href="/TechnologyConsulting/technology_consulting">Consulting Services</Link>
                </li>

                {/* Industries */}
                <li>
                    <Link href="/page-services">Industries</Link>
                </li>

                {/* Contact Us */}
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </>
    );
};

export default MobileMenu;