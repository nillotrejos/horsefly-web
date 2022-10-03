import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <>
      <header>
        <div className="wrap">
          <div className="col-lg-12">
            <Link href="/" className="logo">
              <a className="logo">
                <img
                  src="/webp/common/horsefly-logo.webp"
                  alt="Horsefly Analytics"
                  width="200"
                  height="40"
                />
              </a>
            </Link>

            <ul className="main-nav">
              <li>
                <Link
                  href="/labordatabase"
                  title="Why Horsefly?"
                  className="link"
                >
                  <a className="link">Why Horsefly?</a>
                </Link>
              </li>

              <li>
                <Link
                  href="/labormarketplatform"
                  title="Platform"
                  className="link"
                >
                  <a className="link">Platform</a>
                </Link>
              </li>

              <li className="has-child">
                <span>Solutions</span>

                <ul className="submenu">
                  <li>
                    <Link
                      href="/workforceplanningdata"
                      title="Workplace Planning and Development"
                      className="link"
                    >
                      <a className="link">
                        Workplace Planning &amp; Development
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/talentacquisitionplatform"
                      title="Talent Acquisition"
                      className="link"
                    >
                      <a className="link">Talent Acquisition</a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/businessplanningdata"
                      title="Business Planning"
                      className="link"
                    >
                      <a className="link">Business Planning</a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/rpotalentanalytics"
                      title="RPO and Recruitment"
                      className="link"
                    >
                      <a className="link">RPO &amp; Recruitment</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-child">
                <span>Data</span>

                <ul className="submenu">
                  <li>
                    <Link
                      href="/talentmarketdata"
                      title="About Our Data"
                      className="link"
                    >
                      <a className="link">About Our Data</a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/labormarketanalytics"
                      title="Labor Market Analytics"
                      className="link"
                    >
                      <a className="link">Labor Market Analytics</a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/talentanalytics"
                      title="Talent Analytics"
                      className="link"
                    >
                      <a className="link">Talent Analytics</a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/labormarketdata"
                      title="Labor Insights"
                      className="link"
                    >
                      <a className="link">Labor Insights</a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/talentacquisitionanalytics"
                      title="Talent Acquisition Analytics"
                      className="link"
                    >
                      <a className="link">Talent Acquisition Analytics</a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/diversitydata"
                      title="Diversity Data"
                      className="link"
                    >
                      <a className="link">Diversity Data</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/casestudies" title="Case Studies" className="link">
                  <a className="link">Customers</a>
                </Link>
              </li>

              <li className="button">
                <Link
                  href="/contact"
                  title="Get a Demo"
                  className="btn btn-green"
                >
                  <a className="btn btn-green">Get a Demo</a>
                </Link>
              </li>

              <li className="button">
                <Link href="/login" title="Login" className="btn btn-blue">
                  <a className="btn btn-blue">Login</a>
                </Link>
              </li>
            </ul>

            <div className="sidebar-toggle">
              <div className="toggle-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="mobile-menu">
        <div className="scroller">
          <ul>
            <li>
              <Link
                href="/labordatabase"
                title="Why Horsefly?"
                className="link"
              >
                <a className="link">Why Horsefly?</a>
              </Link>
            </li>

            <li>
              <Link
                href="/labormarketplatform"
                title="Platform"
                className="link"
              >
                <a className="link">Platform</a>
              </Link>
            </li>

            <li className="has-child">
              <span>Solutions</span>

              <ul className="submenu">
                <li>
                  <Link
                    href="/workforceplanningdata"
                    title="Workplace Planning and Development"
                    className="link"
                  >
                    <a className="link">Workplace Planning &amp; Development</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/talentacquisitionplatform"
                    title="Talent Acquisition"
                    className="link"
                  >
                    <a className="link">Talent Acquisition</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/businessplanningdata"
                    title="Business Planning"
                    className="link"
                  >
                    <a className="link">Business Planning</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/rpotalentanalytics"
                    title="RPO and Recruitment"
                    className="link"
                  >
                    <a className="link">RPO &amp; Recruitment</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="has-child">
              <span>Data</span>

              <ul className="submenu">
                <li>
                  <Link
                    href="/talentmarketdata"
                    title="About Our Data"
                    className="link"
                  >
                    <a className="link">About Our Data</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/labormarketanalytics"
                    title="Labor Market Analytics"
                    className="link"
                  >
                    <a className="link">Labor Market Analytics</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/talentanalytics"
                    title="Talent Analytics"
                    className="link"
                  >
                    <a className="link">Talent Analytics</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/labormarketdata"
                    title="Labor Insights"
                    className="link"
                  >
                    <a className="link">Labor Insights</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/talentacquisitionanalytics"
                    title="Talent Acquisition Analytics"
                    className="link"
                  >
                    <a className="link">Talent Acquisition Analytics</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/diversitydata"
                    title="Diversity Data"
                    className="link"
                  >
                    <a className="link">Diversity Data</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/casestudies" title="Case Studies" className="link">
                <a className="link">Customers</a>
              </Link>
            </li>

            <li className="button">
              <Link
                href="/contact"
                title="Get a Demo"
                className="btn btn-green"
              >
                <a className="btn btn-green">Get a Demo</a>
              </Link>
            </li>

            <li className="button">
              <Link href="/login" title="Login" className="btn btn-blue">
                <a className="btn btn-blue">Login</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
