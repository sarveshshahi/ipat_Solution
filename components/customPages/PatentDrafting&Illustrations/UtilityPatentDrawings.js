import React from 'react';

function UtilityPatentDrawings() {
  return (
    <section className="project-details pt-30 pb-120">
      <div className="container-lg">
        <div className="project-two__wrp">
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-12">
                <div className="project-details__content-left">
                  <h3 className="mb-4 mt-5">Utility Patent Drawings</h3>
                  <p>
                    Utility Patent Drawings are technical illustrations submitted as part of a utility patent application.
                    They visually represent the functional and structural aspects of an invention and are required whenever
                    drawings are necessary to understand the invention. Utility patent drawings complement the written
                    description and are a legal requirement in most jurisdictions (such as the USPTO and EPO) unless the
                    invention can be fully understood without them.
                  </p>
                  <p>
                    Unlike design patents, which protect the ornamental appearance of a product, utility patents protect how
                    a product, system, or process works—and the drawings must illustrate this clearly and accurately.
                  </p>

                  <h4 className="mt-4 mb-3">🧩 When Are Drawings Required?</h4>
                  <ul className="list-style-two mb-0">
                    <li>To understand the structure or operation of the invention</li>
                    <li>To show components, connections, or internal workings</li>
                    <li>To illustrate sequences, flowcharts, or processes (e.g., in software or methods)</li>
                  </ul>
                  <p className="mt-3">
                    Drawings are generally mandatory; they are only omitted when the invention is purely conceptual and can
                    be fully described in text—which is extremely rare in practice.
                  </p>

                  <h4 className="mt-4 mb-3">📚 Key Features of Utility Patent Drawings</h4>
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Element</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Reference Numbers</td>
                        <td>Each part of the invention is labeled with a unique number, consistently used in the written specification.</td>
                      </tr>
                      <tr>
                        <td>Multiple Views</td>
                        <td>Include front, side, top, sectional, perspective, and exploded views as needed to fully describe the invention.</td>
                      </tr>
                      <tr>
                        <td>Sectional Views</td>
                        <td>Cutaway illustrations reveal internal components or mechanisms.</td>
                      </tr>
                      <tr>
                        <td>Flowcharts & Diagrams</td>
                        <td>Used to explain processes, software methods, or system architectures.</td>
                      </tr>
                      <tr>
                        <td>Shading & Line Types</td>
                        <td>Typically use solid lines; broken or dashed lines can indicate non-essential parts.</td>
                      </tr>
                      <tr>
                        <td>No Color</td>
                        <td>Drawings are usually in black and white; color is only permitted with special approval.</td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 className="mt-4 mb-3">🎨 Why Utility Patent Drawings Matter</h4>
                  <ul className="list-style-two mb-0">
                    <li>Improve clarity for patent examiners and third parties</li>
                    <li>Strengthen patent applications by ensuring all features are properly supported</li>
                    <li>Facilitate enforcement by providing clear visual evidence of claimed features</li>
                    <li>Support claim interpretation during litigation or licensing</li>
                  </ul>

                  <p className="mt-3">
                    High-quality, compliant utility patent drawings can significantly impact the strength and clarity of your
                    patent, reduce prosecution delays, and help protect your invention effectively.
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

export default UtilityPatentDrawings;
