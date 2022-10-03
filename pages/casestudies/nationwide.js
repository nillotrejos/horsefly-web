import Link from "next/link";

export default function NationWide() {
  return (
    <main>
      <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <small className="mh-s-sm">Horsefly case studies</small>
              <h2 className="ahc bold">Nationwide Building Society</h2>
            </div>
          </div>
          <div className="row customer-block ahc">
            <div className="col-lg-6">
              <div className="customer-logo">
                <img
                  src="/webp/case-studies/nationwide-logo.webp"
                  alt="Nationwide Building Society"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="customer-details">
                <p className="ph-ns-sm">
                  Industry: Financial Services
                  <br />
                  Founded: 1846
                  <br />
                  Headquarters: Swindon, United Kingdom
                </p>
              </div>
            </div>
          </div>
          <div className="row customer-block ahc border-s">
            <div className="col-lg-12">
              <p>
                Nationwide Building Society is a British mutual financial
                institution, the seventh-largest cooperative financial
                institution and the most well-known building society in the
                world with over 15 million members.
              </p>
              <p>
                Nationwide is now the second-largest provider of household
                savings and mortgages in the UK. For the financial year
                2015/2016, Nationwide had assets of around £208.9 billion
                compared to £331 billion for the entire building society sector,
                making it more extensive than the remaining 44 British building
                societies combined.
              </p>
            </div>
          </div>
          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Situation</h3>
              <p>
                Undertaking a large IT Transformation Project meant mapping the
                UK for specific skill-sets to understand the location, gender,
                demand, experience, job titles, skills and companies to identify
                the talent market nationally.
              </p>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/V3YqHKiX9TE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <small>
                Watch the Video to see how National Building Society Utilizes
                Horsefly
              </small>
            </div>
          </div>
          <div className="row customer-block ahc">
            <div className="col-lg-12">
              <h3>Result</h3>
              <p>
                By Implementing Horsefly and mapping out the talent landscape
                across the UK and specifically in 12 different locations- they
                provided supply and demand analysis along with salary and
                company data in those specific areas. Also, it allowed them to
                analyse the gender splits for technical talent so they could
                create some realistic goals for attraction, allowing
                evidence-based discussions between business functions.
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
