import Link from "next/link";

export default function VirginMedia() {
  return (
    <main>
      <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <small className="mh-s-sm">Horsefly case studies</small>
              <h2 className="ahc bold">Virgin Media</h2>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-6">
              <div className="customer-logo">
                <img
                  src="/webp/case-studies/virgin-media-logo.webp"
                  alt="Virgin Media"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="customer-details">
                <p>
                  Industry: Telecommunications Mass Media
                  <br />
                  Headquarters: Hock, United Kingdom
                </p>
              </div>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Situation</h3>
              <p>
                Virgin need to become more proactive across emerging and niche
                skills and start identifying and attracting certain groups of
                talent.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Result</h3>
              <p>
                By implementing Horsefly they were able to map the market across
                a variety of different skill-sets, enabling them to work out
                their go-to-market strategy to support their business
                objectives. It also allowed them to understand the national
                landscape and regional differences for various groups of talent.
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
                  src="/webp/case-studies/zurich.webp"
                  alt="Zurich Insurance"
                />

                <div className="blog-content border-n">
                  <h3 className="mh-s-sm">
                    <Link href="/casestudies/zurichinsurance">
                      <a>Zurich Insurance</a>
                    </Link>
                  </h3>

                  <p>
                    Horsefly helped Zurich with strategic location initiatives
                    and with a project for an important client.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="content">
                <img
                  src="/webp/case-studies/home-office.webp"
                  alt="Home Office"
                />

                <div className="blog-content border-n">
                  <h3 className="mh-s-sm">
                    <Link href="/casestudies/homeoffice">
                      <a>Home Office</a>
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
                  src="/webp/case-studies/network-rail.webp"
                  alt="Network Rail"
                />
                <div className="blog-content border-n">
                  <h3 className="mh-s-sm">
                    <Link href="/casestudies/networkrail">
                      <a>Network Rail</a>
                    </Link>
                  </h3>

                  <p>
                    Network Rail needed to examine the rail industry at a skill
                    level and expand beyond using current data sources.
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
