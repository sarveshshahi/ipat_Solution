import Link from 'next/link';
import React from 'react';

function ValiditySearch() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">Invalidity / Validity Search</h3>
                    <p>
                      An Invalidity Search (or Validity Search) is a specialized type of patent search conducted to assess whether 
                      a particular granted patent (or patent application) is legally valid and enforceable. The goal is to uncover prior art 
                      that may challenge the novelty or inventive step (non-obviousness) of the patent in question.
                    </p>

                    <h4 className="mt-4 mb-3">✅ Purpose of an Invalidity Search</h4>
                    <p>
                      The primary goal is to disprove the validity of a patent by showing that it should not have been granted due to 
                      existing knowledge or publications.
                    </p>

                    <h4 className="mt-4 mb-3">Common Scenarios for Performing an Invalidity Search</h4>
                   <ul className="list-style-two mb-4">
  <li><strong>Patent litigation</strong> – To defend against a patent infringement lawsuit.</li>
  <li><strong>Post-grant proceedings</strong> – Such as inter partes review (IPR), reexamination, or opposition (e.g., in the EPO).</li>
  <li><strong>Patent licensing or acquisition</strong> – To assess the strength of a patent portfolio.</li>
  <li><strong>Competitive strategy</strong> – To neutralize a competitor’s blocking or overly broad patent.</li>
</ul>

                    <h4 className="mt-4 mb-3">📑 Invalidity Search Report – Typical Contents</h4>
                    <ul className="list-style-two mb-0">
                      <li><b>Executive Summary</b></li>
                      <li><b>Target Patent Information </b>(number, title, priority date, claims)</li>
                      <li><b>Search Strategy</b> (keywords, classifications, databases used)</li>
                      <li><b>List of Identified Prior Art</b></li>
                      <li><b>Claim Mapping </b>(side-by-side comparison of claims and prior art)</li>
                      <li><b>Legal Status of Prior Art</b></li>
                      <li><b>Conclusions and Recommendations</b></li>
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

export default ValiditySearch;
