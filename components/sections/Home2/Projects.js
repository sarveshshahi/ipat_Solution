import React from 'react';

function Projects() {
  return (
    <>
      <section className="project-details pt-10 pb-80">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="project-details__content-left">

                <h2 className="mb-4 mt-5" style={{ fontSize: '2rem', fontWeight: '600' }}>
                  What We Do
                </h2>

                <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                  We provide comprehensive intellectual property (IP) and technology services to help organizations protect, manage, and maximize the value of their innovations.
                </p>

                <h3 className="mt-4 mb-3" style={{ fontSize: '1.4rem', fontWeight: '500' }}>
                  ✅ End-to-End IP Lifecycle Support
                </h3>
                <ul className="list-style-two mb-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                  <li>
                    <strong>Patent Searches:</strong> Patentability Search (Novelty Search), Freedom to Operate (FTO) Search, Invalidity/Validity Search, State of the Art Search, Design Search, Assignee Search, Chemical Structure Search, Non-Patent Literature Search.
                  </li>
                  <li>
                    <strong>IP Commercialization:</strong> Patent Valuation, Monetization Support, Infringement Analysis, Evidence of Use (EoU) Chart Preparation, Licensing & Monetization, Infringer/Licensee Identification, Patent Mining.
                  </li>
                  <li>
                    <strong>Patent Drafting & Illustrations:</strong> Patent Drafting, Office Action Response, Design Patent Drawings, Utility Patent Drawings.
                  </li>
                </ul>

               
                <ul className="list-style-two mb-0" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                  <li>
                    <strong>Patent Analytics:</strong> Competitive Intelligence, Patent Monitoring, Landscape Analysis, Patent Watch Service, Portfolio Management, Competitive Benchmarking.
                  </li>
                  <li>
                    <strong>Technology Consulting:</strong> Growth & Innovation Analytics, Emerging Technology Consulting, Engineering & R&D Consulting, Technology Forecasting, Scouting & Monitoring, Due Diligence, Sustainability & Green Tech, Market Research & Survey.
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
