import React from 'react';

function Assignee_Search() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">Assignee Search</h3>
                    <p>
                      An Assignee Search is a focused type of patent or intellectual property (IP) search that identifies all the 
                      patents and patent applications owned or filed by a particular individual, company, or organization (called the assignee). 
                      This search provides insights into a party’s R&D focus, technology interests, IP strength, and strategic direction. 
                      Assignee searches are frequently used for competitive intelligence, due diligence, licensing, and merger & acquisition (M&A) activities.
                    </p>

                    <h4 className="mt-4 mb-3">✅ Purpose of an Assignee Search</h4>
                    <ul className="list-style-two mb-0">
                      <li>
                        <strong>Track a company's innovation activity:</strong> Understand what technologies a company is developing or protecting.
                      </li>
                      <li>
                        <strong>Monitor competitors or partners:</strong> Analyze competitors’ R&D focus or IP strength.
                      </li>
                      <li>
                        <strong>Support M&A or investment:</strong> Assess the IP assets of a company before acquisition or investment.
                      </li>
                      <li>
                        <strong>Identify licensing opportunities:</strong> Discover owners of technologies that could be licensed.
                      </li>
                      <li>
                        <strong>Uncover subsidiaries or hidden filers:</strong> Many companies file under different names or subsidiaries.
                      </li>
                      <li>
                        <strong>Portfolio management:</strong> Analyze, track, and manage internal or external patent holdings.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional pagination can be uncommented if needed */}
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

export default Assignee_Search;
