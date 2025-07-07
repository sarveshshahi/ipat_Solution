import React from 'react';

function PatentMining() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">Patent Mining</h3>
                    <p>
                      Patent Mining is the systematic process of analyzing and extracting valuable insights from large volumes of patent data. 
                      It involves identifying trends, technologies, competitors, opportunities, and actionable intelligence by using advanced data mining techniques on patent databases.
                      <br /><br />
                      Patent mining is commonly used in R&D strategy, technology forecasting, IP management, competitive intelligence, and portfolio optimization.
                    </p>

                    <h4 className="mt-4 mb-3">✅ Purpose of Patent Mining</h4>
                    <div className="table-responsive mb-4">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Objective</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Technology Landscape Mapping</td>
                            <td>Understand how a technology is evolving and who is innovating</td>
                          </tr>
                          <tr>
                            <td>Competitor Analysis</td>
                            <td>Discover competitors’ R&D focus and patent strategies</td>
                          </tr>
                          <tr>
                            <td>Innovation Gap Discovery</td>
                            <td>Identify areas with low patent density that may be ripe for invention</td>
                          </tr>
                          <tr>
                            <td>Patent Portfolio Optimization</td>
                            <td>Sort and classify internal portfolios to assess quality and commercial value</td>
                          </tr>
                          <tr>
                            <td>Freedom to Operate (FTO) Support</td>
                            <td>Detect patents that may block commercialization plans</td>
                          </tr>
                          <tr>
                            <td>M&A and Licensing Target Discovery</td>
                            <td>Find valuable patents or companies worth acquiring or partnering with</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h4 className="mt-4 mb-3">🔄 Patent Mining Process Overview</h4>
                    <div className="table-responsive mb-0">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Step</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1. Define Objective</td>
                            <td>Clarify the purpose (e.g., tech scouting, portfolio analysis, etc.)</td>
                          </tr>
                          <tr>
                            <td>2. Data Collection</td>
                            <td>Retrieve patents from global databases (USPTO, EPO, WIPO, etc.)</td>
                          </tr>
                          <tr>
                            <td>3. Data Cleaning & Structuring</td>
                            <td>Remove duplicates, correct metadata, standardize assignee names</td>
                          </tr>
                          <tr>
                            <td>4. Text Mining & NLP</td>
                            <td>Analyze titles, abstracts, and claims using keyword extraction or AI</td>
                          </tr>
                          <tr>
                            <td>5. Classification & Clustering</td>
                            <td>Group patents into themes (e.g., AI, EV batteries, wearable tech, etc.)</td>
                          </tr>
                          <tr>
                            <td>6. Trend and Gap Analysis</td>
                            <td>Identify growth areas, saturation zones, and whitespace opportunities</td>
                          </tr>
                          <tr>
                            <td>7. Visualization & Reporting</td>
                            <td>Use graphs, maps, and dashboards to communicate insights</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional pagination here if needed */}
          </div>
        </div>
      </section>
    </>
  );
}

export default PatentMining;
