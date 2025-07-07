import React from 'react';

function Non_Patent_Literature_Search() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">Non-Patent Literature Search</h3>
                    <p>
                      A Non-Patent Literature (NPL) Search is a comprehensive examination of technical and scientific publications 
                      that are not part of patent databases, conducted to identify prior art, support novelty and validity assessments, 
                      or supplement intellectual property and R&D analysis. Since not all technological disclosures are patented, 
                      NPL searches are critical complements to patent searches — especially in academic, scientific, or fast-moving 
                      tech domains where innovation may be shared through journals, conferences, or open-source platforms rather 
                      than filed as patents.
                    </p>

                    <h4 className="mt-4 mb-3">✅ Purpose of a Non-Patent Literature Search</h4>
                    <ul className="list-style-two mb-4">
                      <li>
                        <strong>Assess novelty of an invention:</strong> To identify prior public disclosures outside patent literature.
                      </li>
                      <li>
                        <strong>Support invalidity or opposition cases:</strong> To find NPL that predates and can challenge a patent's claims.
                      </li>
                      <li>
                        <strong>Strengthen a patent application:</strong> To cite relevant background art for examination.
                      </li>
                      <li>
                        <strong>Understand technical background:</strong> For better patent drafting, product development, or licensing.
                      </li>
                      <li>
                        <strong>Support Freedom to Operate (FTO) analysis:</strong> To determine if unpatented technologies may affect commercialization.
                      </li>
                    </ul>

                    <h4 className="mt-4 mb-3">🧾 Types of Non-Patent Literature</h4>
                    <ul className="list-style-two mb-0">
                      <li><strong>Scientific journals:</strong> Nature, Science, IEEE Transactions, ACS Publications</li>
                      <li><strong>Conference proceedings:</strong> IEEE, ACM, SPIE, ASME conferences</li>
                      <li><strong>Academic theses/dissertations:</strong> University repositories, ProQuest, Shodhganga (India)</li>
                      <li><strong>Technical books & handbooks:</strong> CRC Handbook of Chemistry, engineering manuals, textbooks</li>
                      <li><strong>Standards & specifications:</strong> ISO, IEC, ASTM, ITU, IETF, 3GPP documents</li>
                      <li><strong>Web-based publications:</strong> Blogs, GitHub repositories, archived web pages (e.g., via Wayback Machine)</li>
                      <li><strong>Datasheets & manuals:</strong> Product brochures, technical manuals from manufacturers</li>
                      <li><strong>Open-source documentation:</strong> Code documentation, white papers, forum discussions (StackOverflow, Reddit)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional pagination - enable if needed */}
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

export default Non_Patent_Literature_Search;
