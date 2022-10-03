import Link from "next/link";

export default function NetworkRail() {
  return (
    <main>
      <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <small className="mh-s-sm">Horsefly case studies</small>
              <h2 className="ahc bold">Network Rail</h2>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-6">
              <div className="customer-logo">
                <img
                  src="/webp/case-studies/network-rail-logo.webp"
                  alt="Network Rail"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="customer-details">
                <p>
                  Industry: Transportation
                  <br />
                  Headquarters: London, United Kingdom
                </p>
              </div>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Situation</h3>
              <p>
                Network Rail needed to examine the rail industry at a skill
                level and expand beyond using current data sources that only
                recognised people that worked for them using their own job
                titles.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Result</h3>
              <p>
                By implementing Horsefly and using their strongest employees as
                a guide they reviewed a variety of profiles in existing social
                networking sites to gain a view of their internal workforce.
              </p>
              <p>
                Armed with this information they used Horsefly to map out
                important analysis on: salary alignment, length of experience,
                job titles by region, target list of companies and skills that
                this talent pool have. This information was presented to the HR
                Leadership team to provide insight for planning new roles.
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
                  src="/webp/case-studies/resource-solutions.webp"
                  alt="Resource Solutions"
                />

                <div className="blog-content border-n">
                  <h3 className="mh-s-sm">
                    <Link href="/casestudies/resourcesolutions">
                      <a>Resource Solutions</a>
                    </Link>
                  </h3>

                  <p>
                    Horsefly helped Resource Solutions identify optimum
                    locations for clients to source talent.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="content">
                <img src="/webp/case-studies/accenture.webp" alt="Accenture" />

                <div className="blog-content border-n">
                  <h3 className="mh-s-sm">
                    <Link href="/casestudies/accenture">
                      <a>Accenture</a>
                    </Link>
                  </h3>

                  <p>
                    See how Accenture used Horsefly to make informed strategic
                    decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="content">
                <img
                  src="/webp/case-studies/hm-revenue.webp"
                  alt="HM Revenue and Customs"
                />

                <div className="blog-content border-n">
                  <h3 className="mh-s-sm">
                    <Link href="/casestudies/hmrevenue">
                      <a>HM Revenue and Customs</a>
                    </Link>
                  </h3>

                  <p>
                    Horsefly helped HMRC to understand the regional variances in
                    talent and make effective choices with their go-to-market
                    strategy.
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
