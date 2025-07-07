import React from 'react';

function Chemical_Structure_Search() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">Chemical Structure Search</h3>
                    <p>
                      A Chemical Structure Search is a specialized method of retrieving information about chemical compounds 
                      from databases by using a chemical structure diagram (rather than text or identifiers). It is essential for 
                      identifying known compounds, related molecules, or patent documents disclosing similar chemical structures.
                      This type of search is widely used in the pharmaceutical, biotech, chemical, agrochemical, and materials 
                      science industries, especially in patent analysis, R&D, regulatory compliance, and competitive intelligence.
                    </p>

                    <h4 className="mt-4 mb-3">✅ Purpose of a Chemical Structure Search</h4>
                    <ul className="list-style-two mb-0">
                      <li>
                        <strong>Find prior art for a compound:</strong> To assess novelty and patentability.
                      </li>
                      <li>
                        <strong>Avoid infringing existing patents:</strong> For Freedom to Operate (FTO) analysis.
                      </li>
                      <li>
                        <strong>Track competitor compounds:</strong> For competitive monitoring or litigation.
                      </li>
                      <li>
                        <strong>Locate known analogues or derivatives:</strong> For drug discovery or lead optimization.
                      </li>
                      <li>
                        <strong>Retrieve physical, chemical, or toxicology data:</strong> For regulatory or safety evaluations.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional pagination section - can be used if needed */}
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

export default Chemical_Structure_Search;
