import Link from 'next/link';
import React from 'react';

function FreedomToOperate() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">Freedom to Operate (FTO) Search (or Clearance Search)</h3>
                    <p>
                      A Freedom to Operate (FTO) Search is a specialized legal and technical investigation that determines whether 
                      a product, process, or technology can be legally commercialized without infringing existing patents in a specific jurisdiction. 
                      This search is crucial before launching, manufacturing, or selling a product, especially in highly regulated or competitive 
                      industries such as pharmaceuticals, electronics, or biotechnology.
                    </p>

                    <h4 className="mt-4 mb-3">✅ Primary Purpose of an FTO Search</h4>
                    <ul className="list-style-two mb-4">
                      <li>
                        <strong>Assess Legal Risk:</strong> Identify active, enforceable patents that may block commercialization 
                        and avoid patent infringement lawsuits.
                      </li>
                      <li>
                        <strong>Plan Business Strategy:</strong> Understand the intellectual property (IP) landscape around your product 
                        to make informed decisions on licensing, design changes, or geographic rollout.
                      </li>
                      <li>
                        <strong>Enable Investment or M&A:</strong> Investors and acquirers often require FTO clearance before funding 
                        or purchasing a company or product.
                      </li>
                      <li>
                        <strong>Support Regulatory Compliance:</strong> In industries like medical devices or chemicals, proof of FTO 
                        is often required during regulatory approval.
                      </li>
                    </ul>

                    <h4 className="mt-4 mb-3">🧰 Scope and Coverage</h4>
                    <ul className="list-style-two mb-4">
                      <li>Jurisdiction-specific (e.g., valid only in the U.S., EU, or China).</li>
                      <li>Focused on granted and enforceable patents, not expired or abandoned ones.</li>
                      <li>Tailored to the specific features of your product or process.</li>
                      <li>Does <strong>not</strong> assess whether your invention is patentable — that’s the role of a Patentability Search.</li>
                    </ul>

                    <h4 className="mt-4 mb-3">🧾 What Is Searched?</h4>
                    <ul className="list-style-two mb-0">
                      <li>Granted patents and active patent applications in the target markets.</li>
                      <li>Patent claims, especially independent claims.</li>
                      <li>Legal status of patents (granted, expired, abandoned, or in force).</li>
                      <li>Assignments and ownership to check who holds the rights.</li>
                      <li>Patent family information (global equivalents of a patent).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional pagination - uncomment and customize if needed */}
            {/*
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
            </div>
            */}
          </div>
        </div>
      </section>
    </>
  );
}

export default FreedomToOperate;
