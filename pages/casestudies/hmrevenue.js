import Link from "next/link";

export default function HMRevenue() {
  return (
    <main>
      <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <small className="mh-s-sm">Horsefly case studies</small>
              <h2 className="ahc bold">HM Revenue and Customs</h2>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-6">
              <div className="customer-logo">
                <img
                  src="/webp/case-studies/hm-revenue-logo.webp"
                  alt="HM Revenue and Customs"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="customer-details">
                <p>
                  Industry: Government
                  <br />
                  Headquarters: London, United Kingdom
                </p>
              </div>
            </div>
          </div>

          <div className="row customer-block ahc border-s">
            <div className="col-lg-12">
              <p>
                Her Majesty&apos;s Revenue and Customs is a non-ministerial
                department of the UK Government responsible for the collection
                of taxes, the payment of some forms of state support and the
                administration of other regulatory regimes including the
                national minimum wage.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Situation</h3>
              <p>
                They are currently undergoing an estate rationalisation project.
                One aspect involves assessing their current office locations and
                reducing these to 13 strategic regional centres across the UK
                using talent insights.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>After Implementing Horsefly</h3>
              <p>
                Using Horsefly, they are able to map out specific skill-sets to
                understand supply and demand, length of experience, job titles
                and target companies. This data has enabled HMRC to understand
                the regional variances in talent and make effective choices with
                their go-to-market strategy.
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
