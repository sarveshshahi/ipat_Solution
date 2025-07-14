import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (

        <ul>
            <li>
                <li><Link href="/">Home</Link></li>
                {/* <ul className="sub-menu megamenu">
                    <li>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li className="title"><Link href="/">Home Layout</Link></li>
                                    <li><Link href="/">Home Page 01</Link></li>
                                    <li><Link href="/index-2">Home Page 02</Link></li>
                                    <li><Link href="/index-3">Home Page 03</Link></li>
                                    <li><Link href="/index-4">Home Page 04</Link></li>
                                    <li><Link href="/index-5">Home Page 05</Link></li>
                                    <li><Link href="/index-6">Home Page 06</Link></li>
                                    <li><Link href="/index-7">Home Page 07</Link></li>
                                    <li><Link href="/index-8">Home Page 08</Link></li>
                                    <li><Link href="/index-9">Home Page 09</Link></li>
                                    <li><Link href="/index-10">Home Page 10</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><Link href="/index-11">Home Page 11</Link></li>
                                    <li><Link href="/index-12">Home Page 12</Link></li>
                                    <li><Link href="/index-13">Home Page 13</Link></li>
                                    <li className="title new-badge"><Link href="/">Single Layout</Link></li>
                                    <li><Link href="/index-single">Home Single</Link></li>
                                    <li><Link href="/index-2-single">Home Single 02</Link></li>
                                    <li><Link href="/index-3-single">Home Single 03</Link></li>
                                    <li><Link href="/index-4-single">Home Single 04</Link></li>
                                    <li><Link href="/index-5-single">Home Single 05</Link></li>
                                    <li><Link href="/index-6-single">Home Single 06</Link></li>
                                    <li><Link href="/index-7-single">Home Single 07</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><Link href="/index-8-single">Home Single 08</Link></li>
                                    <li><Link href="/index-9-single">Home Single 09</Link></li>
                                    <li><Link href="/index-10-single">Home Single 10</Link></li>                                    
                                    <li><Link href="/index-11-single">Home Single 11</Link></li>
                                    <li><Link href="/index-12-single">Home Single 12</Link></li>
                                    <li><Link href="/index-13-single">Home Single 13</Link></li>
                                    <li className="title new-badge"><Link href="/">Dark Layout</Link></li>
                                    <li><Link href="/index-dark">Home Dark</Link></li>
                                    <li><Link href="/index-2-dark">Home Dark 02</Link></li>
                                    <li><Link href="/index-3-dark">Home Dark 03</Link></li>
                                    <li><Link href="/index-4-dark">Home Dark 04</Link></li>                                    
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className="title new-badge"><Link href="/">Dark Layout</Link></li>
                                    <li><Link href="/index-5-dark">Home Dark 05</Link></li>
                                    <li><Link href="/index-6-dark">Home Dark 06</Link></li>
                                    <li><Link href="/index-7-dark">Home Dark 07</Link></li>
                                    <li><Link href="/index-8-dark">Home Dark 08</Link></li>
                                    <li><Link href="/index-9-dark">Home Dark 09</Link></li>
                                    <li><Link href="/index-10-dark">Home Dark 10</Link></li>
                                    <li><Link href="/index-11-dark">Home Dark 11</Link></li>
                                    <li><Link href="/index-12-dark">Home Dark 12</Link></li>
                                    <li><Link href="/index-13-dark">Home Dark 13</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul> */}
            </li>

            {/* <li>
                <Link href="/page-about">About Us <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu">
                   
                    <li>
                        <Link href="/">Patent Searches <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/"> Patentability Search (or Novelty Search)</Link></li>
                            <li><Link href="/index-2">Freedom to Operate (FTO) Search (or Clearance Search)</Link></li>
                            <li><Link href="/index-3">Invalidity/Validity Search</Link></li>
                            <li><Link href="/index-4">State of the Art Search</Link></li>
                            <li><Link href="/index-5">Design Search</Link></li>
                            <li><Link href="/index-6">Assignee Search</Link></li>
                            <li><Link href="/index-7">Chemical Structure Search</Link></li>
                            <li><Link href="/index-8">Non-Patent Literature Search</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/">IP Commercialization <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/index-11">Patent Valuation Service</Link></li>
                            <li><Link href="/index-12">Patent Monetization Support</Link></li>
                            <li><Link href="/index-13">Patent Infringement Analysis</Link></li>
                            <li ><Link href="/">Evidence of Use (EoU) Chart Preparation</Link></li>
                            <li><Link href="/index-single">Patent Licensing and Monetization</Link></li>
                            <li><Link href="/index-2-single">Patent Infringer/Licensee Identification</Link></li>
                            <li><Link href="/index-3-single">Patent Mining</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/">Patent Drafting & Illustrations<i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">

                            <li><Link href="/index-8-single">Patent Drafting</Link></li>
                            <li><Link href="/index-9-single">Office Action Response</Link></li>
                            <li><Link href="/index-10-single">Design Patent Drawings0</Link></li>
                            <li><Link href="/index-11-single">Utility Patent Drawings</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/">Patent Analytics <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                           
                            <li><Link href="/index-dark">Competitive Intelligence</Link></li>
                            <li><Link href="/index-2-dark">	Patent Monitoring</Link></li>
                            <li><Link href="/index-3-dark">Landscape Analysis</Link></li>
                            <li><Link href="/index-4-dark">Patent Watch Service</Link></li>
                            <li><Link href="/index-5-dark">Patent Portfolio Management</Link></li>
                            <li><Link href="/index-6-dark">Patent Competitive Benchmarking</Link></li>
                        </ul>
                    </li>

                   
                    <li>
                        <Link href="/">Shop <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/shop-products">Shop Product</Link></li>
                            <li><Link href="/shop-products-sidebar">Products Sidebar</Link></li>
                            <li><Link href="/shop-product-details">Product Details</Link></li>
                            <li><Link href="/shop-checkout">Checkout</Link></li>
                            <li><Link href="/shop-cart">Cart</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/page-404">404 Error</Link></li>
                </ul>
            </li> */}
            
            <li>
               <li> <Link href="/page-about">About Us </Link></li>
                {/* <ul className="sub-menu">
                    <li><Link href="/page-about">About Us</Link></li>
                    <li>
                        <Link href="/">Project <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/page-projects">Project Grid</Link></li>
                            <li><Link href="/page-project-details">Project Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/">Team <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/page-team">Team Grid</Link></li>
                            <li><Link href="/page-team-details">Team Details</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/page-testimonial">Testimonials</Link></li>
                    <li><Link href="/page-faq">FAQ’s</Link></li>
                    <li><Link href="/page-pricing">Pricing Table</Link></li>
                    <li>
                        <Link href="/">Shop <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="sub-sub-menu">
                            <li><Link href="/shop-products">Shop Product</Link></li>
                            <li><Link href="/shop-products-sidebar">Products Sidebar</Link></li>
                            <li><Link href="/shop-product-details">Product Details</Link></li>
                            <li><Link href="/shop-checkout">Checkout</Link></li>
                            <li><Link href="/shop-cart">Cart</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/page-404">404 Error</Link></li>
                </ul> */}
            </li>

            <li>
                <Link href="/">Patent Services <i className="fa-solid fa-angle-down"></i></Link>
               

                <ul className="sub-menu megamenu">
                    <li>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li className="title" style={{ color: 'green',fontSize:"18px", fontWeight:700}}>
                                        Patent Searches
                                    </li>
                                    <li><Link href="/costom/PatentabilitySearch"> Patentability Search (or Novelty Search)</Link></li>
                                    <li><Link href="/costom/freedom_to_operate">Freedom to Operate (FTO) Search (or Clearance Search)</Link></li>
                                    <li><Link href="/costom/validity_search">Invalidity/Validity Search</Link></li>
                                    <li><Link href="/costom/state_of_the_art_search">State of the Art Search</Link></li>
                                    <li><Link href="/costom/design_search">Design Search</Link></li>
                                    <li><Link href="/costom/assignee_search">Assignee Search</Link></li>
                                    <li><Link href="/costom/chemical_structure_search">Chemical Structure Search</Link></li>
                                    <li><Link href="/costom/non_patent_literature_search">Non-Patent Literature Search</Link></li>
                                    {/* <li><Link href="/index-9">Home Page 09</Link></li>
                                    <li><Link href="/index-10">Home Page 10</Link></li> */}
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    {/* <li className="title"><Link href="/">IP Commercialization</Link></li> */}
                                     <li className="title" style={{ color: 'green',fontSize:"18px", fontWeight:700}}>
                                       IP Commercialization
                                    </li>
                                    <li><Link href="/IP_Commercialization/patient_valuation_service">Patent Valuation Service</Link></li>
                                    <li><Link href="/IP_Commercialization/patent_monetization_support">Patent Monetization Support</Link></li>
                                    <li><Link href="/IP_Commercialization/patent_infringement_analysis">Patent Infringement Analysis</Link></li>
                                    <li ><Link href="/IP_Commercialization/evidence_of_use_eou_chart_preparation">Evidence of Use (EoU) Chart Preparation</Link></li>
                                    <li><Link href="/IP_Commercialization/patent_licensingand_monetization">Patent Licensing and Monetization</Link></li>
                                    <li><Link href="/IP_Commercialization/PatentInfringer_LicenseeIdentification">Patent Infringer/Licensee Identification</Link></li>
                                    <li><Link href="/IP_Commercialization/patent_mining">Patent Mining</Link></li>

                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    {/* <li className="title"><Link href="/">Patent Drafting & Illustrations</Link></li> */}
                                    <li className="title" style={{ color: 'green',fontSize:"18px", fontWeight:700}}>
                                       Patent Drafting & Illustrations
                                    </li>
                                    <li><Link href="/PatentDrafting&Illustrations/patent_drafting">Patent Drafting</Link></li>
                                    <li><Link href="/PatentDrafting&Illustrations/office_action_response">Office Action Response</Link></li>
                                    <li><Link href="/PatentDrafting&Illustrations/design_patent_drawings">Design Patent Drawings</Link></li>
                                    <li><Link href="/PatentDrafting&Illustrations/utility_patent_drawings">Utility Patent Drawings</Link></li>
                                      {/* <li className="title"><Link href="/">Patent Analytics</Link></li> */}
                                     <li className="title" style={{ color: 'green',fontSize:"18px", fontWeight:700}}>
                                       Patent Analytics
                                    </li>
                                    <li><Link href="/Patent_Analytics/competitive_intelligence">Competitive Intelligence</Link></li>
                                    <li><Link href="/Patent_Analytics/Patent_Monitoring">	Patent Monitoring</Link></li>
                                    <li><Link href="/Patent_Analytics/Landscape_Analysis">Landscape Analysis</Link></li>
                                    <li><Link href="/Patent_Analytics/Patent_Watch_Service">Patent Watch Service</Link></li>
                                    <li><Link href="/Patent_Analytics/Patent_Portfolio_Management">Patent Portfolio Management</Link></li>
                                    <li><Link href="/Patent_Analytics/Patent_Competitive_Benchmarking">Patent Competitive Benchmarking</Link></li>

                                </ul>
                            </div>
                            {/* <div className="col">
                                <ul>
                                    <li className="title"><Link href="/">Patent Analytics</Link></li>
                                     <li className="title" style={{ color: 'green',fontSize:"18px", fontWeight:700}}>
                                       Patent Analytics
                                    </li>
                                    <li><Link href="/index-dark">Competitive Intelligence</Link></li>
                                    <li><Link href="/index-2-dark">	Patent Monitoring</Link></li>
                                    <li><Link href="/index-3-dark">Landscape Analysis</Link></li>
                                    <li><Link href="/index-4-dark">Patent Watch Service</Link></li>
                                    <li><Link href="/index-5-dark">Patent Portfolio Management</Link></li>
                                    <li><Link href="/index-6-dark">Patent Competitive Benchmarking</Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </li>
                </ul>


            </li>

            <li>
                {/* <li><Link href="/TechnologyConsulting/technology_consulting">Consulting Services </Link></li> */}
                  <Link href="/TechnologyConsulting/technology_consulting">Consulting Services <i className="fa-solid fa-angle-down"></i></Link>
                <ul className="sub-menu megamenu">
                    <li>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li className="title" style={{ color: 'green',fontSize:"18px", fontWeight:700}}>
                                        Technology	 Consulting
                                    </li>
                                    <li><Link href="/TechnologyConsulting/technology_consulting">Growth & Innovation Analytics</Link></li>
                                    <li><Link href="/TechnologyConsulting/technology_consulting">Innovation & Emerging Technology Consulting</Link></li>
                                    <li><Link href="/TechnologyConsulting/technology_consulting">Engineering & R&D Technology Consulting</Link></li>
                                    <li><Link href="/TechnologyConsulting/technology_consulting">Technology Forecasting</Link></li>
                                    <li><Link href="/TechnologyConsulting/technology_consulting">Technology Scouting & Monitoring</Link></li>
                                    <li><Link href="/TechnologyConsulting/technology_consulting">Technology Due Diligence</Link></li>
                                    <li><Link href="/TechnologyConsulting/technology_consulting">Sustainability & Green Tech Consulting</Link></li>
                                    <li><Link href="/TechnologyConsulting/technology_consulting">Market Research</Link></li>
                                    <li><Link href="/TechnologyConsulting/technology_consulting">Market Survey</Link></li>
                                    {/* <li><Link href="/index-9">Home Page 09</Link></li>
                                    <li><Link href="/index-10">Home Page 10</Link></li> */}
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                     <li className="title" style={{ color: 'green',fontSize:"18px", fontWeight:700}}>
                                       IT Consulting
                                    </li>
                                    <li><Link href="/TechnologyConsulting/it_consulting">Infrastructure Consulting</Link></li>
                                    <li><Link href="/TechnologyConsulting/it_consulting">Data Science & Advanced Analytics Consulting</Link></li>
                                    <li><Link href="/TechnologyConsulting/it_consulting">Managed IT Services Consulting</Link></li>
                                    <li ><Link href="/TechnologyConsulting/it_consulting">IT Support Services</Link></li>

                                </ul>
                            </div>

                            
                        </div>
                    </li>
                </ul>
 
            </li>

            <li>
                {/* <Link href="/">Industries <i className="fa-solid fa-angle-down"></i></Link> */}
                <li><Link href="/page-services">Industries </Link></li>
                {/* <ul className="sub-menu">
                    <li><Link href="/news-grid">Blog Grid</Link></li>
                    <li><Link href="/news-details">Blog Details</Link></li>
                </ul> */}
            </li>
            <li><Link href="/contact">Contact Us</Link></li>
        </ul>

    );
};

export default NavLinks;