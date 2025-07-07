import React from 'react';

function State_of_the_Art_Search() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">State of the Art Search</h3>
                    <p>
                      A State of the Art Search, also known as a Landscape Search or Technology Landscape Analysis, is a comprehensive 
                      investigation into all publicly available information in a specific technical domain to understand the current level 
                      of technological development. Unlike other patent searches that focus on a particular invention or legal risk, 
                      a State of the Art Search provides a broad, strategic overview of a technology field — covering both patent and non-patent literature.
                    </p>

                    <h4 className="mt-4 mb-3">✅ Purpose of a State of the Art Search</h4>
                    <ul className="list-style-two mb-4">
                      <li>
                        <strong>Understand the current technological baseline:</strong> 
                        R&D planning, feasibility studies, or market entry assessment.
                      </li>
                      <li>
                        <strong>Identify trends and innovation gaps:</strong> 
                        Supports innovation strategy and product differentiation.
                      </li>
                      <li>
                        <strong>Monitor competitor activity:</strong> 
                        Track who’s doing what and where.
                      </li>
                      <li>
                        <strong>Discover potential collaboration or licensing opportunities:</strong> 
                        Open innovation or partner scouting.
                      </li>
                      <li>
                        <strong>Assess patent density and freedom to operate areas:</strong> 
                        Identify crowded vs. open tech spaces.
                      </li>
                    </ul>

                    <h4 className="mt-4 mb-3">🧭 Use Cases in Industry and Research</h4>
                    <ul className="list-style-two mb-0">
                      <li>
                        <strong>Academia:</strong> Conduct literature reviews for thesis or grant proposals.
                      </li>
                      <li>
                        <strong>Startups:</strong> Find white space and differentiate from existing solutions.
                      </li>
                      <li>
                        <strong>R&D departments:</strong> Identify technological trends and innovation opportunities.
                      </li>
                      <li>
                        <strong>Corporate strategy:</strong> Assess the competitive technology landscape to inform investments.
                      </li>
                      <li>
                        <strong>IP professionals:</strong> Analyze crowded vs. open areas of patent activity.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional pagination - keep commented or customize */}
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

export default State_of_the_Art_Search;
