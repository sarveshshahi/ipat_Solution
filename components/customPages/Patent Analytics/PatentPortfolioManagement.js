import React from 'react'

function PatentPortfolioManagement() {
  return (
    <section className="project-details pt-30 pb-120">
      <div className="container-lg">
        <div className="project-two__wrp">
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-12">
                <div className="project-details__content-left">

                  <h3 className="mb-4 mt-5">Patent Portfolio Management</h3>
                  <p>
                    Patent Portfolio Management refers to the systematic organization, evaluation, maintenance, 
                    and strategic utilization of a company's or individual’s group of patents and patent applications. 
                    It ensures that the intellectual property (IP) assets are aligned with business goals, provide 
                    competitive advantage, and deliver maximum return on investment. A well-managed portfolio helps 
                    an organization protect innovation, reduce legal risk, monetize IP assets, and make informed 
                    R&D and investment decisions.
                  </p>

                  <h4 className="mt-4 mb-3">📦 What Is a Patent Portfolio?</h4>
                  <p>
                    A patent portfolio consists of all patents and patent applications owned by an entity, such as:
                  </p>
                  <ul className="list-style-two mb-0">
                    <li>Utility patents, design patents, and plant patents</li>
                    <li>National and international (PCT) applications</li>
                    <li>Patents in various jurisdictions (US, EP, CN, JP, etc.)</li>
                    <li>Patents acquired through mergers, acquisitions, or licensing</li>
                  </ul>

                  <h4 className="mt-4 mb-3">🎯 Objectives of Patent Portfolio Management</h4>
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Objective</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>🛡️ Protect Core Innovations</td>
                        <td>Ensure key products and technologies are protected through robust IP coverage</td>
                      </tr>
                      <tr>
                        <td>💸 Optimize IP Costs</td>
                        <td>Manage filing, prosecution, maintenance, and enforcement costs effectively</td>
                      </tr>
                      <tr>
                        <td>📈 Enhance Business Value</td>
                        <td>Strengthen company valuation, especially for startups and tech-driven firms</td>
                      </tr>
                      <tr>
                        <td>⚖️ Reduce Legal Risk</td>
                        <td>Avoid infringement and align with Freedom to Operate (FTO) strategies</td>
                      </tr>
                      <tr>
                        <td>💡 Support R&D and Innovation</td>
                        <td>Align patenting activities with technological direction and market demand</td>
                      </tr>
                      <tr>
                        <td>🤝 Enable Licensing & Monetization</td>
                        <td>Use IP assets for licensing, collaboration, or sale opportunities</td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="mt-4 mb-3">🧰 Key Elements of Patent Portfolio Management</h4>
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Element</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>📋 Portfolio Audit</td>
                        <td>Assess the current state, value, and relevance of patents</td>
                      </tr>
                      <tr>
                        <td>🗺️ Strategic Alignment</td>
                        <td>Align IP portfolio with business strategy and market priorities</td>
                      </tr>
                      <tr>
                        <td>🌍 Geographic Coverage</td>
                        <td>Evaluate jurisdictions for filing based on market and competitor presence</td>
                      </tr>
                      <tr>
                        <td>🔄 Lifecycle Management</td>
                        <td>Monitor deadlines, annuities, and prosecution status</td>
                      </tr>
                      <tr>
                        <td>📊 Performance Metrics</td>
                        <td>Track ROI, citation counts, legal status, enforcement activity</td>
                      </tr>
                      <tr>
                        <td>💼 Monetization Planning</td>
                        <td>Identify opportunities for licensing, cross-licensing, or asset sale</td>
                      </tr>
                      <tr>
                        <td>🔍 Risk Management</td>
                        <td>Mitigate infringement risks and manage litigation exposure</td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="mt-4 mb-3">📊 Portfolio Evaluation Criteria</h4>
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Metric</th>
                        <th>What It Tells You</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>🧠 Technological Relevance</td>
                        <td>Is the patent aligned with current and future products or tech roadmaps?</td>
                      </tr>
                      <tr>
                        <td>💰 Commercial Value</td>
                        <td>Does the patent contribute to revenue or provide licensing leverage?</td>
                      </tr>
                      <tr>
                        <td>📌 Jurisdiction</td>
                        <td>Is it filed in key markets or manufacturing hubs?</td>
                      </tr>
                      <tr>
                        <td>🔗 Citations and Impact</td>
                        <td>How often is the patent cited (forward citations)? Is it foundational?</td>
                      </tr>
                      <tr>
                        <td>📅 Lifecycle Stage</td>
                        <td>Is the patent active, nearing expiry, or abandoned?</td>
                      </tr>
                      <tr>
                        <td>⚖️ Legal Status</td>
                        <td>Is it granted, pending, opposed, or under litigation?</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>

          {/* Pagination block (optional)
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details__pagination-box">
                <ul className="project-details__pagination list-unstyled clearfix">
                  <li className="next">
                    <div className="icon">
                      <Link href="/" aria-label="Previous">
                        <i className="far fa-arrow-left" />
                      </Link>
                    </div>
                    <div className="content">Previous</div>
                  </li>
                  <li className="previous">
                    <div className="content">Next</div>
                    <div className="icon">
                      <Link href="/" aria-label="Next">
                        <i className="far fa-arrow-right" />
                      </Link>
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
  )
}

export default PatentPortfolioManagement
