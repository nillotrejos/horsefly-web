import Link from "next/link";

export default function ResourceSolutions() {
  return (
    <main>
      <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <small className="mh-s-sm">Horsefly case studies</small>
              <h2 className="ahc bold">Resource Solutions</h2>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-6">
              <div className="customer-logo">
                <img
                  src="/webp/case-studies/resource-solutions-logo.webp"
                  alt="Resource Solutions"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="customer-details">
                <p className="ph-ns-sm">
                  Industry: Recruitment Outsourcing
                  <br />
                  Founded: 1986
                  <br />
                  Headquarters: United Kingdom
                </p>
              </div>
            </div>
          </div>

          <div className="row customer-block ahc border-s">
            <div className="col-lg-12">
              <p>
                Resource Solutions is a provider of Recruitment Process
                Outsourcing (RPO) and Managed Service Provider (MSP) solutions.
              </p>
              <p>
                With a global footprint across 29 countries, they work in close
                partnership with organisations and manage everything from global
                accounts with demanding resourcing strategies to single sites
                with lower recruitment volumes.
              </p>
              <p>
                The company currently source and recruit for clients in over 60
                countries, manage a recruitment budget of over £2 billion and
                hire tens of thousands of employees each year.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Situation</h3>
              <p>
                A financial services client wanted to understand the market for
                Financial Advisors throughout five different locations to
                understand the demographics and demand for this talent.
              </p>

              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/S9SQ3dfF0bY"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <small>
                Watch the Video to see how Resource Solutions Utilizes Horsefly
              </small>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Result</h3>
              <p>
                The insights helped Resource Solutions identify optimum
                locations to source this talent based on the numerous criteria.
              </p>
              <p>
                The analytics resulted in a significant saving on cost per hire
                and time to hire.
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
                    the UK for specific skill-sets and understanding the
                    national market.
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
