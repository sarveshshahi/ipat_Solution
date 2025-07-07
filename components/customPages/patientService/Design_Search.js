import React from 'react';

function Design_Search() {
  return (
    <>
      <section className="project-details pt-120 pb-120">
        <div className="container-lg">
          <div className="project-two__wrp">
            <div className="project-details__content">
              <div className="row">
                <div className="col-xl-12">
                  <div className="project-details__content-left">
                    <h3 className="mb-4 mt-5">Design Search</h3>
                    <p>
                      A Design Search is a specialized type of intellectual property search focused on identifying existing 
                      registered designs that may be similar or identical to a new industrial design (such as the shape, appearance, 
                      or ornamentation of a product). It is essential when seeking protection for or evaluating the registrability, 
                      novelty, or infringement risk of a visual design.
                    </p>
                    <p>
                      Unlike a patent search (which focuses on functional aspects) or a trademark search (which protects brand identifiers), 
                      a design search deals purely with aesthetic features.
                    </p>

                    <h4 className="mt-4 mb-3">✅ Purpose of a Design Search</h4>
                    <ul className="list-style-two mb-4">
                      <li><strong>Assess novelty:</strong> To determine if a design is new enough to be registered.</li>
                      <li><strong>Avoid infringement:</strong> Ensure your design doesn’t infringe existing registered designs.</li>
                      <li><strong>Support legal proceedings:</strong> For defending or invalidating design registrations.</li>
                      <li><strong>Monitor competitors:</strong> Track visual trends and new designs by rival companies.</li>
                      <li><strong>Portfolio management:</strong> Identify opportunities or risks in a company’s design assets.</li>
                    </ul>

                    <h4 className="mt-4 mb-3">🎯 Key Features of a Design Search</h4>
                    <ul className="list-style-two mb-4">
                      <li><strong>Subject Matter:</strong> Appearance or aesthetic elements (shape, configuration, pattern, ornamentation).</li>
                      <li><strong>Not Covered:</strong> Functional features (those are covered under utility patents).</li>
                      <li><strong>Protected Rights:</strong> Exclusive use of the design for products in specific classes.</li>
                      <li><strong>Search Basis:</strong> Visual similarity + classification + product category.</li>
                    </ul>

                    <h4 className="mt-4 mb-3">🧰 How a Design Search is Conducted</h4>
                    <ul className="list-style-two mb-4">
                      <li><strong>1. Define the Product Category:</strong> E.g., "smartwatch", "furniture", or "automobile headlights".</li>
                      <li><strong>2. Use Locarno Classification:</strong> International classification system for industrial designs.</li>
                      <li><strong>3. Search by Keywords or Descriptions:</strong> Product names, common terms, etc.</li>
                      <li><strong>4. Search by Image (if available):</strong> Some tools allow visual/image-based searching using design drawings.</li>
                      <li><strong>5. Review Similarity:</strong> Compare the key visual elements (shape, surface patterns, contours, etc.).</li>
                      <li><strong>6. Check Legal Status:</strong> Confirm if the design is active, expired, or invalidated.</li>
                    </ul>

                    <h4 className="mt-4 mb-3">🧭 Locarno Classification – What Is It?</h4>
                    <p>
                      The Locarno Classification is an international system that organizes designs into 32 classes based on product type.
                    </p>
                    <ul className="list-style-two mb-0">
                        <li> <b> Examples:</b></li>
                      <li><strong>Class 02:</strong> Articles of clothing and haberdashery.</li>
                      <li><strong>Class 12:</strong> Means of transport or hoisting.</li>
                      <li><strong>Class 14:</strong> Recording, telecommunication, or data processing equipment.</li>
                    </ul>
                    <p className="mt-3">
                      This classification is essential for filtering relevant prior designs in a search.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional pagination section (keep commented or customize later)
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

export default Design_Search;
