import React from 'react';

function PatentDrafting() {
  return (
    <section className="project-details pt-30 pb-120">
      <div className="container-lg">
        <div className="project-two__wrp">
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-12">
                <div className="project-details__content-left">

                  <h3 className="mb-4 mt-5">Patent Drafting</h3>
                  <p>
                    Patent Drafting is the process of preparing a detailed and legally enforceable document that describes an invention clearly, 
                    accurately, and in a way that meets the requirements of patent offices. The resulting document, called a patent application, 
                    is submitted to secure exclusive rights over the invention.
                  </p>
                  <p>
                    High-quality patent drafting is crucial to the strength, scope, and enforceability of a patent. A poorly drafted patent 
                    may be rejected, easily circumvented, or invalidated in litigation.
                  </p>

                  <h4 className="mt-4 mb-3">✅ Purpose of Patent Drafting</h4>
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
                          <td>Legal Protection</td>
                          <td>Defines the legal scope and boundaries of the invention</td>
                        </tr>
                        <tr>
                          <td>Technical Disclosure</td>
                          <td>Clearly explains how the invention works to a person skilled in the art</td>
                        </tr>
                        <tr>
                          <td>Monopoly Enforcement</td>
                          <td>Enables the patent holder to exclude others from making, using, or selling the invention</td>
                        </tr>
                        <tr>
                          <td>Commercial Value</td>
                          <td>Builds a defensible IP asset for licensing, sale, or enforcement</td>
                        </tr>
                        <tr>
                          <td>Global Filing Readiness</td>
                          <td>Drafting suitable for filing in multiple jurisdictions (e.g., PCT, USPTO, EPO)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="mt-4 mb-3">🔍 The Most Critical Part: The Claims</h4>
                  <ul className="list-style-two mb-4">
                    <li>The claims define the legal boundaries of the invention.</li>
                    <li>Think of them as the "property lines" of the patent.</li>
                    <li>There are two types:
                      <ul>
                        <li><strong>Independent Claims:</strong> Broad and stand-alone</li>
                        <li><strong>Dependent Claims:</strong> Narrower, adding further features to the independent claim</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    💡 <strong>If something isn't claimed, it's not protected</strong> — no matter how well it's described!
                  </p>

                  <h4 className="mt-4 mb-3">🧠 Skills Required for High-Quality Patent Drafting</h4>
                  <div className="table-responsive mb-4">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Skill Area</th>
                          <th>Explanation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Technical Expertise</td>
                          <td>Understand the invention deeply (e.g., software, biotech, electronics)</td>
                        </tr>
                        <tr>
                          <td>Legal Knowledge</td>
                          <td>Familiarity with patent law, claim formats, and office requirements</td>
                        </tr>
                        <tr>
                          <td>Strategic Thinking</td>
                          <td>Balance breadth (for coverage) and specificity (to avoid invalidation)</td>
                        </tr>
                        <tr>
                          <td>Attention to Detail</td>
                          <td>Precision in terminology, logic, and structure</td>
                        </tr>
                        <tr>
                          <td>Writing Clarity</td>
                          <td>Clear, concise language suitable for examiners and courts</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="mt-4 mb-3">📈 Impact of Good Patent Drafting</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>Positive Impact</th>
                          <th>Outcome</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Broader Legal Protection</td>
                          <td>More market coverage, harder to design around</td>
                        </tr>
                        <tr>
                          <td>Higher Valuation</td>
                          <td>Investors and licensees value well-drafted, enforceable IP</td>
                        </tr>
                        <tr>
                          <td>Stronger Litigation Position</td>
                          <td>Clear claims and strong support enhance enforceability</td>
                        </tr>
                        <tr>
                          <td>Global Filing Efficiency</td>
                          <td>Eases translation and adaptation for international prosecution</td>
                        </tr>
                        <tr>
                          <td>Faster Prosecution</td>
                          <td>Reduces objections and office actions from patent examiners</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Optional pagination */}
        </div>
      </div>
    </section>
  );
}

export default PatentDrafting;
