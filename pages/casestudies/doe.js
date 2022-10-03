import Link from "next/link";

export default function Doe() {
  return (
    <main>
      <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <small className="mh-s-sm">Horsefly case studies</small>
              <h2 className="ahc bold">Department For Education</h2>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-6">
              <div className="customer-logo">
                <img
                  src="/webp/case-studies/department-education-logo.webp"
                  alt="Department for Education"
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
                The Department for Education (DfE) is a department of Her
                Majesty&apos;s Government responsible for child protection,
                education (compulsory, further and higher education),
                apprenticeships and broader skills in England.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Situation</h3>
              <p>
                DfE&apos;s model was previously a self-service based function,
                therefore, there was no central HR & Talent team dedicated to
                operations work. They are now moving to a new model to better
                support the business strategically and proactively.
              </p>
            </div>
          </div>

          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>After Implementing Horsefly</h3>
              <p>
                The team transitions into a business partner approach, where
                they could support future workforce planning decisions. They are
                also reviewing their go-to-market strategy using Horsefly to
                understand the optimum job titles to use and improving job copy
                by using the top associated skills keywords linked to their
                target talent pool.
              </p>
              <p>
                Having a deeper understanding of the real-time language of the
                candidate market has had a positive impact on attraction as they
                now connect and resonate better with their target audience.
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
