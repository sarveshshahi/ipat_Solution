import React from 'react';

function OfficeActionResponse() {
  return (
    <section className="project-details pt-30 pb-120">
      <div className="container-lg">
        <div className="project-two__wrp">
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-12">
                <div className="project-details__content-left">

                  <h3 className="mb-4 mt-5">Office Action Response</h3>
                  <p>
                    An Office Action Response is a formal written reply submitted by a patent applicant 
                    to address objections, rejections, or requirements raised by a patent examiner during 
                    the examination process of a patent application.
                    Office actions are part of the normal back-and-forth during patent prosecution. 
                    How well an applicant responds can significantly influence whether the patent is granted, 
                    how broad the claims are, and how defensible the patent will be in the future.
                  </p>

                  <h4 className="mt-4 mb-3">✅ Purpose of an Office Action Response</h4>
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Objective</th>
                        <th>Explanation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Overcome Rejections</td>
                        <td>Argue against examiner's legal or technical basis for rejecting claims</td>
                      </tr>
                      <tr>
                        <td>Amend Claims</td>
                        <td>Narrow or clarify claims to distinguish from prior art or meet formal standards</td>
                      </tr>
                      <tr>
                        <td>Comply with Formalities</td>
                        <td>Resolve issues related to drawings, language, formatting, or documentation</td>
                      </tr>
                      <tr>
                        <td>Advance the Application</td>
                        <td>Improve the chances of patent allowance through compliance or negotiation</td>
                      </tr>
                      <tr>
                        <td>Preserve Rights</td>
                        <td>Maintain the application in good standing and avoid abandonment</td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="mt-4 mb-3">🧭 Office Action Response Process</h4>
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Step</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1. Review Office Action</td>
                        <td>Analyze all cited prior art, claim rejections, and examiner’s reasoning</td>
                      </tr>
                      <tr>
                        <td>2. Inventor Consultation</td>
                        <td>Clarify technical points and assess possible amendments</td>
                      </tr>
                      <tr>
                        <td>3. Legal Strategy Formation</td>
                        <td>Decide whether to argue, amend, or abandon the claim</td>
                      </tr>
                      <tr>
                        <td>4. Claim Amendment (if needed)</td>
                        <td>Modify claim language to overcome prior art or improve clarity</td>
                      </tr>
                      <tr>
                        <td>5. Draft Response Letter</td>
                        <td>Prepare arguments with references to case law, examiner guidelines, and claim charts</td>
                      </tr>
                      <tr>
                        <td>6. Final Review and Submission</td>
                        <td>Ensure all formal requirements are met before timely submission</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>

          {/* Optional Pagination block */}
          {/*
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details__pagination-box">
                <ul className="project-details__pagination list-unstyled clearfix">
                  <li className="next">
                    <div className="icon">
                      <a href="/" aria-label="Previous">
                        <i className="far fa-arrow-left" />
                      </a>
                    </div>
                    <div className="content">Previous</div>
                  </li>
                  <li className="previous">
                    <div className="content">Next</div>
                    <div className="icon">
                      <a href="/" aria-label="Next">
                        <i className="far fa-arrow-right" />
                      </a>
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
  );
}

export default OfficeActionResponse;
