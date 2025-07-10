import React from 'react'

function DesignPatentDrawings() {
  return (
    <section className="project-details pt-30 pb-120">
      <div className="container-lg">
        <div className="project-two__wrp">
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-12">
                <div className="project-details__content-left">

                  <h3 className="mb-4 mt-5">Design Patent Drawings</h3>
                  <p>
                    Design Patent Drawings are the visual backbone of a design patent application, providing the primary means 
                    of conveying the ornamental appearance of an invention. Unlike utility patents, which protect functionality, 
                    design patents protect how a product looks—its shape, surface pattern, or configuration—and the drawings are 
                    the only way to legally define that appearance.
                  </p>

                  <h4 className="mt-4 mb-3">🧩 What Is a Design Patent?</h4>
                  <p>
                    A design patent grants exclusive rights to the visual ornamental characteristics of a product. It covers:
                  </p>
                  <ul className="list-style-two mb-4">
                    <li>Configuration or shape</li>
                    <li>Surface ornamentation</li>
                    <li>Combination of the two</li>
                  </ul>
                  <p>
                    Since design patents do not include written claims, drawings serve as the sole “claim” and must meet strict 
                    standards of accuracy, clarity, and consistency.
                  </p>

                  <h4 className="mt-4 mb-3">📚 Key Features of Design Patent Drawings</h4>
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Element</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Consistent Views</td>
                        <td>Multiple perspectives of the same object (e.g., front, back, top, bottom)</td>
                      </tr>
                      <tr>
                        <td>Surface Contours and Details</td>
                        <td>Solid lines show claimed elements; broken lines (dashed) show unclaimed features</td>
                      </tr>
                      <tr>
                        <td>Shading</td>
                        <td>May be used to show contours, curvature, or depth</td>
                      </tr>
                      <tr>
                        <td>Line Quality</td>
                        <td>Lines must be crisp, uniform, and clear</td>
                      </tr>
                      <tr>
                        <td>No Color (Unless Required)</td>
                        <td>Typically black-and-white; color is only used if absolutely essential</td>
                      </tr>
                      <tr>
                        <td>No Dimensions or Annotations</td>
                        <td>No text, scales, or measurements on design drawings</td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="mt-4 mb-3">🎯 What Should Be Claimed?</h4>
                  <p>
                    In a design drawing, solid lines indicate the parts that are claimed, and broken/dashed lines show parts 
                    that are not claimed (but provide context).
                  </p>
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th>Line Type</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Solid lines</td>
                        <td>Claimed features (protected design)</td>
                      </tr>
                      <tr>
                        <td>Dashed lines</td>
                        <td>Unclaimed features (background or environment)</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-3">
                    This allows inventors to claim only a portion of a product design if needed 
                    (e.g., just the screen layout of a phone, not the entire phone).
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* Pagination block (optional)
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
  )
}

export default DesignPatentDrawings
