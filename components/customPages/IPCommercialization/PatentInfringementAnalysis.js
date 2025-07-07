import React from "react";

function PatentInfringementAnalysis() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">Patent Infringement Analysis</h3>
                    <p>
                      Patent Infringement Analysis is the detailed process of
                      determining whether a product, process, or technology
                      unlawfully uses or embodies the claimed features of a
                      patent without authorization from the patent owner. This
                      analysis is vital in enforcing intellectual property
                      rights, defending against infringement lawsuits, and
                      ensuring Freedom to Operate (FTO). It involves claim
                      interpretation, product analysis, and detailed comparison.
                    </p>

                    <h4 className="mt-4 mb-3">
                      ✅ Purpose of Patent Infringement Analysis
                    </h4>
                    <table className="table table-bordered mb-4">
                      <thead>
                        <tr>
                          <th>Use Case</th>
                          <th>Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Patent enforcement (by owner)</td>
                          <td>
                            To assess if someone is infringing your patent
                            rights
                          </td>
                        </tr>
                        <tr>
                          <td>Defense (by accused infringer)</td>
                          <td>
                            To analyze if a product is wrongly accused of
                            infringement
                          </td>
                        </tr>
                        <tr>
                          <td>Pre-launch product risk check</td>
                          <td>
                            To avoid infringement before launching a new product
                            (FTO check)
                          </td>
                        </tr>
                        <tr>
                          <td>Due diligence in M&A/licensing</td>
                          <td>
                            To assess litigation risks or enforceability of a
                            target’s patents
                          </td>
                        </tr>
                        <tr>
                          <td>Litigation support</td>
                          <td>
                            To serve as evidence in court cases or negotiations
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 className="mt-4 mb-3">
                      🔍 Claim Chart (or Infringement Chart)
                    </h4>
                    <p>
                      A claim chart is the key tool used in infringement
                      analysis. It maps each element of a patent claim to
                      corresponding components or features in the allegedly
                      infringing product.
                    </p>
                    <table className="table table-bordered mb-4">
                      <thead>
                        <tr>
                          <th>Patent Claim Element</th>
                          <th>Corresponding Feature in Product X</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>“A wireless device with a sensor”</td>
                          <td>
                            Product X contains a Bluetooth-enabled motion sensor
                          </td>
                        </tr>
                        <tr>
                          <td>“A processor configured to...”</td>
                          <td>
                            Product X includes a microcontroller with the same
                            logic as claimed
                          </td>
                        </tr>
                        <tr>
                          <td>“A storage unit storing data”</td>
                          <td>
                            Product X includes a flash memory unit used in
                            similar fashion
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 className="mt-4 mb-3">
                      📊 Deliverables from a Patent Infringement Analysis
                    </h4>
                    <ul className="list-style-two mb-0">
                      <li>
                        <strong>Claim Construction Summary</strong>
                      </li>
                      <li>
                        <strong>Infringement Claim Chart</strong>
                      </li>
                      <li>
                        <strong>Technical Mapping Report</strong>
                      </li>
                      <li>
                        <strong>Legal Analysis</strong> (if conducted by a
                        patent attorney)
                      </li>
                      <li>
                        <strong>Risk Assessment</strong> (for defense or
                        licensing negotiations)
                      </li>
                      <li>
                        <strong>Evidence Bundle</strong> (e.g., product
                        brochures, specifications, teardown photos)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row">
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
                    <li><Link href="/"></Link></li>
                    <li><Link href="/"></Link></li>
                    <li><Link href="/"></Link></li>
                    <li><Link href="/"></Link></li>
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default PatentInfringementAnalysis;
