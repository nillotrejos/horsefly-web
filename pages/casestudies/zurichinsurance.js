import Link from "next/link";

export default function ZurichInsurance() {
  return (
    <main>
      <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <small className="mh-s-sm">Horsefly case studies</small>
              <h2 className="ahc bold">Zurich Insurance</h2>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-6">
              <div className="customer-logo">
                <img
                  src="/webp/case-studies/zurich-logo.webp"
                  alt="Zurich Insurance"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="customer-details">
                <p>
                  Industry: Insurance
                  <br />
                  Headquarters: Zurich, Switzerland
                </p>
              </div>
            </div>
          </div>

          <div className="row customer-block ahc border-s">
            <div className="col-lg-12">
              <p>
                Zurich is a global insurance company which is organized into
                three core business segments: General Insurance, Global Life and
                Farmers. Zurich employs almost 54,000 people serving customers
                in more than 170 countries and territories around the globe.
              </p>
              <p>
                The company is Switzerland&apos;s largest insurer. As of 2017,
                the group is the world&apos;s 91st largest public company
                according to Forbes&apos; Global 2000s list, and in 2011 it
                ranked 94th in Interbrand&apos;s top 100 brands.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Situation</h3>
              <p>
                Zurich were considering a new business contract for a new client
                that needed resources skilled in various niches and based in a
                specific location.
              </p>

              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/dQN3HW4yJGE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <small>
                Watch the Video to see how Zurich Insurance Utilizes Horsefly
              </small>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Result</h3>
              <p>
                By using Horsefly,they were able to conduct a review of those
                skills mapped to location which revealed quickly that the
                required action needed that worked for the client.
              </p>
              <p>
                This information was vital in making an informed decision on the
                new project, this resulted in cost avoidance and any further
                implications later on as they anticipated challenges with the
                right talent due to availability and location.
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
