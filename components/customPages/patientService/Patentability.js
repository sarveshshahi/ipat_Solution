import Link from 'next/link';
import React from 'react';

function Patentability() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">Patentability Search (or Novelty Search)</h3>
                    <p>
                      A Patentability Search, also known as a Novelty Search, is a comprehensive investigation conducted 
                      to determine whether an invention is new and non-obvious — the two primary criteria for obtaining a patent. 
                      It is typically performed before filing a patent application to evaluate the likelihood of receiving patent protection.
                    </p>

                    <h4 className="mt-4 mb-3">Process of Conducting a Patentability Search</h4>
                    <ul className="list-style-two mb-4">
                      <li>
                        <strong>1. Understand the Invention:</strong> Detailed review of technical features, novelty, and intended use.
                      </li>
                      <li>
                        <strong>2. Define Search Keywords:</strong> Use of synonyms, technical terms, and classifications (IPC/CPC codes).
                      </li>
                      <li>
                        <strong>3. Search Patent Databases:</strong> Look for similar inventions in global patent databases using Boolean logic.
                      </li>
                      <li>
                        <strong>4. Analyze Prior Art:</strong> Review documents found and compare their claims to the invention.
                      </li>
                      <li>
                        <strong>5. Prepare a Report:</strong> Summary of relevant prior art, legal status, and assessment of patentability.
                      </li>
                    </ul>

                    <h4 className="mt-4 mb-3">⚖️ Patentability Criteria (General Guidelines)</h4>
                    <ul className="list-style-two mb-0">
                      <li><strong>Novelty:</strong> Must not have been disclosed publicly before the filing date.</li>
                      <li><strong>Inventive Step / Non-Obviousness:</strong> Should not be an obvious modification of existing technology.</li>
                      <li><strong>Industrial Applicability:</strong> Must be capable of being used in some kind of industry.</li>
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

export default Patentability;
