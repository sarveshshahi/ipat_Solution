import React from 'react';

function EvidenceOfUseChartPreparation() {
  return (
    <>
      <section className="project-details pt-30 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">

                    <h3 className="mb-4 mt-5">Evidence of Use (EoU) Chart Preparation</h3>
                    <p>
                      Evidence of Use (EoU) Chart Preparation is the process of creating a visual and detailed comparison 
                      between the elements of a patent claim and the features of a potentially infringing product, process, 
                      or service. The resulting chart provides structured evidence to support claims of patent infringement 
                      — whether for licensing, litigation, or negotiation.
                    </p>

                    <h4 className="mt-4 mb-3">✅ Purpose of an Evidence of Use (EoU) Chart</h4>
                    <table className="table table-bordered mb-4">
                      <thead>
                        <tr>
                          <th>Objective</th>
                          <th>Why It’s Important</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Support infringement analysis</td>
                          <td>Documents how a product reads onto a patent claim</td>
                        </tr>
                        <tr>
                          <td>Enable patent enforcement</td>
                          <td>Used in demand letters, litigation, or licensing negotiations</td>
                        </tr>
                        <tr>
                          <td>Strengthen licensing programs</td>
                          <td>Show prospective licensees the relevance of your patents</td>
                        </tr>
                        <tr>
                          <td>Evaluate monetization opportunities</td>
                          <td>Helps prioritize patents with clear infringement potential</td>
                        </tr>
                        <tr>
                          <td>Assist in pre-litigation strategy</td>
                          <td>Supports decision-making before initiating lawsuits or settlements</td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 className="mt-4 mb-3">🔍 What is an EoU Chart?</h4>
                    <p>
                      An Evidence of Use Chart (also called a Claim Mapping Chart or Infringement Chart) is a side-by-side table 
                      where each claim limitation (i.e., element of a patent claim) is matched with a corresponding feature or 
                      component in the alleged infringing product, supported by factual evidence (e.g., text, images, manuals, links).
                    </p>

                    <h4 className="mt-4 mb-3">📋 Structure of an EoU Chart</h4>
                    <table className="table table-bordered mb-4">
                      <thead>
                        <tr>
                          <th>Patent Claim Element</th>
                          <th>Corresponding Product Feature</th>
                          <th>Evidence / Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>“A wireless sensor configured to...”</td>
                          <td>Product includes a Wi-Fi enabled motion sensor</td>
                          <td>[Product Manual, p. 6]; [Teardown Image, Fig. 2]</td>
                        </tr>
                        <tr>
                          <td>“A control unit executing...”</td>
                          <td>Microcontroller runs embedded firmware with control logic</td>
                          <td>[Technical Spec PDF, Section 3.2]</td>
                        </tr>
                        <tr>
                          <td>“A display module to render status”</td>
                          <td>LCD screen shows system status indicators</td>
                          <td>[Product Video Timestamp: 1:12]; [Datasheet Screenshot]</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Each row shows how a claim element is matched to a product feature, along with documentation to prove it.
                    </p>

                    <h4 className="mt-4 mb-3">🧰 Key Components of EoU Chart Preparation</h4>
                    <ul className="list-style-two mb-0">
                      <li><strong>Patent Selection:</strong> Choose patents with strong, enforceable claims and clear legal status.</li>
                      <li><strong>Claim Selection:</strong> Focus on independent claims or key dependent claims with broad coverage.</li>
                      <li><strong>Claim Interpretation:</strong> Perform claim construction to understand technical and legal scope.</li>
                      <li><strong>Product/Technology Research:</strong> Gather details of the accused product or service.</li>
                      <li><strong>Feature Mapping:</strong> Carefully compare product functions to claim limitations.</li>
                      <li><strong>Evidence Gathering:</strong> Collect datasheets, user manuals, teardown images, demos, websites.</li>
                      <li><strong>Chart Drafting:</strong> Structure all findings into a clear, legally defensible chart.</li>
                      <li><strong>Legal Review (optional):</strong> For litigation readiness, get review by IP attorneys.</li>
                    </ul>

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
    </>
  );
}

export default EvidenceOfUseChartPreparation;
