import Link from "next/link";

export default function Accenture() {
  return (
    <main>
      <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <small className="mh-s-sm">Horsefly case studies</small>
              <h2 className="ahc bold">Accenture</h2>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-6">
              <div className="customer-logo">
                <img
                  src="/webp/case-studies/accenture-logo.webp"
                  alt="Accenture"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="customer-details">
                <p>
                  Industry: Consulting
                  <br />
                  Headquarters: Global
                </p>
              </div>
            </div>
          </div>

          <div className="row customer-block ahc border-s">
            <div className="col-lg-12">
              <p>
                Accenture is a multinational professional services company that
                provides services in strategy, consulting, digital, technology
                and operations.
              </p>
              <p>
                A Fortune Global 500 company, it has been incorporated in
                Dublin, Ireland since September 1st, 2009. In 2018, the company
                reported net revenues of $39.6 billion, with more than 459,000
                employees serving clients in more than 200 cities in 120
                countries.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Situation</h3>
              <p>
                A recruitment transformation project meant separate teams needed
                to come together using real-time talent market data to provide
                insights back to the business, allowing them to make informed
                strategic decisions and build a stronger and unified approach to
                their challenges.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Result</h3>
              <p>
                By implementing Horsefly, real-time analytics on gender and
                geography has supported evidence-based conversations to help
                tell a story and ultimately make key location and talent
                attraction decisions.
              </p>
              <p>
                They no longer spend time manually gathering data. Horsefly now
                enables more effective discussions to take action quicker and
                build more trust and credibility with other functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog gray">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">Explore More Case Studies</h2>
            </div>
          </div>

          <div className="row blog-item ahc mh-n-lg">
            <div className="col-lg-4 col-md-12">
              <div className="content">
                <img
                  src="/webp/case-studies/department-education.webp"
                  alt="Department for Education"
                />

                <div className="blog-content border-n">
                  <h3 className="mh-s-sm">
                    <Link href="/casestudies/doe">
                      <a>Department for Education</a>
                    </Link>
                  </h3>

                  <p>
                    Horsefly helped the UK Department for Education better
                    connect with candidates.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="content">
                <img
                  src="/webp/case-studies/nationwide.webp"
                  alt="Nationwide Building Society"
                />

                <div className="blog-content border-n">
                  <h3 className="mh-s-sm">
                    <Link href="/casestudies/nationwide">
                      <a>Nationwide Building Society</a>
                    </Link>
                  </h3>

                  <p>
                    Undertaking a large IT Transformation Project meant mapping
                    the UK for specific skil-sets and understanding the national
                    market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="content">
                <img
                  src="/webp/case-studies/virgin-media.webp"
                  alt="Virgin Media"
                />

                <div className="blog-content border-n">
                  <h3 className="mh-s-sm">
                    <Link href="/casestudies/virginmedia">
                      <a>Virgin Media</a>
                    </Link>
                  </h3>

                  <p>
                    Virgin needed to become more proactive start identifying and
                    attracting certain groups of talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blue bg-world bg-filter">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content cta-block">
              <h2 className="mw-960 ahc">
                Get Started with Horsefly Analytics Today
              </h2>
              <p>Take 30 minutes to find out how!</p>

              <div className="cta-button">
                <Link href="/contact" title="Get a Demo!" className="btn btn-green">
                  <a className="btn btn-green">Get a Demo!</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
