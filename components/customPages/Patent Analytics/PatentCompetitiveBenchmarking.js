import React from 'react';

function PatentCompetitiveBenchmarking() {
  return (
    <section className="project-details pt-30 pb-120">
      <div className="container-lg">
        <div className="project-two__wrp">
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-12">
                <div className="project-details__content-left">

                  <h3 className="mb-4 mt-5">Patent Competitive Benchmarking</h3>
                  <p>
                    Patent Competitive Benchmarking is the process of comparing an organization’s patent portfolio and innovation 
                    activity against those of key competitors to assess relative strengths, weaknesses, and opportunities in the 
                    technology and intellectual property (IP) space. This analytical process provides data-driven insights that inform 
                    strategic decisions related to R&D, IP investments, licensing, and market positioning.
                  </p>

                  <h4 className="mt-4 mb-3">🔍 What Is Patent Competitive Benchmarking?</h4>
                  <p>
                    Patent Competitive Benchmarking goes beyond simple counts of patents. It involves qualitative and quantitative 
                    analysis of competitors’ IP portfolios, filing trends, innovation quality, and legal strength to determine how 
                    a company’s patents stack up in the competitive landscape. The objective is to understand where a company stands 
                    compared to its peers and how to strategically improve or leverage its IP assets.
                  </p>

                  <h4 className="mt-4 mb-3">🎯 Key Objectives of Patent Competitive Benchmarking</h4>
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Objective</th>
                        <th>Explanation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>🧭 Assess IP Positioning</td>
                        <td>Understand how strong and differentiated your IP is versus competitors</td>
                      </tr>
                      <tr>
                        <td>🧠 Guide Innovation Strategy</td>
                        <td>Focus R&D in under-patented or white space areas</td>
                      </tr>
                      <tr>
                        <td>💼 Support Licensing & Monetization</td>
                        <td>Identify patent assets that can be licensed or monetized based on uniqueness</td>
                      </tr>
                      <tr>
                        <td>⚠️ Risk Management</td>
                        <td>Spot possible infringement risks or litigation exposure from competitor IP</td>
                      </tr>
                      <tr>
                        <td>🏁 Market Advantage</td>
                        <td>Leverage IP benchmarking to boost product competitiveness and investor appeal</td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="mt-4 mb-3">🧰 Components of Patent Competitive Benchmarking</h4>
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Component</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>🗂️ Patent Portfolio Comparison</td>
                        <td>Compare patent counts, jurisdictions, and filing trends</td>
                      </tr>
                      <tr>
                        <td>🧠 Technology Focus Mapping</td>
                        <td>Analyze the technological domains or innovations covered by each portfolio</td>
                      </tr>
                      <tr>
                        <td>📍 Jurisdictional Coverage</td>
                        <td>Assess the geographic IP strategy across markets and manufacturing hubs</td>
                      </tr>
                      <tr>
                        <td>📊 Patent Quality Indicators</td>
                        <td>Use metrics like citation count, patent family size, and claim breadth</td>
                      </tr>
                      <tr>
                        <td>⚖️ Legal Status Analysis</td>
                        <td>Understand how many patents are active, granted, expired, opposed, etc.</td>
                      </tr>
                      <tr>
                        <td>🔁 R&D Timeline Analysis</td>
                        <td>Compare filing dates and innovation cycles</td>
                      </tr>
                      <tr>
                        <td>🧩 Key Assignee & Inventor Analysis</td>
                        <td>Identify top contributors and innovation hubs within organizations</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>

          {/* Optional pagination block (currently commented out)
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details__pagination-box">
                <ul className="project-details__pagination list-unstyled clearfix">
                  <li className="next">
                    <div className="icon">
                      <a href="/" aria-label="Previous">
                        <i className="far fa-arrow-left" />
                      </a>
                    </div>
                    <div className="content">Previous</div>
                  </li>
                  <li className="previous">
                    <div className="content">Next</div>
                    <div className="icon">
                      <a href="/" aria-label="Next">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          */}

        </div>
      </div>
    </section>
  );
}

export default PatentCompetitiveBenchmarking;
