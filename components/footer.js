import React from "react";
import { useEffect, useCallback, useState } from "react";
import Link from "next/link";

export const Footer = () => {
  const [state, setState] = useState(false);
  const form = useCallback(() => {
    setState(true);
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: "9017550",
          formId: "0f82a4cd-092b-4680-ba1a-164e045381c0",
          target: "#hubspotForm",
        });
      }
    });
    return null;
  }, []);
  useEffect(() => {
    if (state !== true) form();
  }, []);
  return (
    <footer>
      <div className="wrap">
        <div className="row footer-nav">
          <div className="col-lg-6 col-md-12 footer-logo">
            <div className="content">
              <Link href="/" className="logo">
                <a className="logo">
                  <img
                    src="/webp/common/horsefly-logo-white.webp"
                    alt="Horsefly Analytics"
                    width="252"
                    height="50"
                  />
                </a>
              </Link>

              <div className="subscribe">
                <p>
                  Subscribe to our newsletter
                  <span className="break-xxs">&nbsp;</span>and stay up-to-date
                </p>
                <div id="hubspotForm"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-xs-12 footer-sitemap">
            <div className="content">
              <h4>Sitemap</h4>

              <ul className="bullets">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>

                <li>
                  <Link href="/talentacquisitionplatform">
                    <a>Global Talent Sourcing</a>
                  </Link>
                </li>

                <li>
                  <Link href="/labormarketplatform">
                    <a>Talent Data Platform</a>
                  </Link>
                </li>

                <li>
                  <Link href="/labormarketdata">
                    <a>Labor Market Data</a>
                  </Link>
                </li>

                <li>
                  <Link href="/labormarketanalytics">
                    <a>Labor Market Analytics</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://blog.horseflyanalytics.com/"
                    target="_blank"
                  >
                    <a>Blog</a>
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-xs-12 footer-contact">
            <div className="content">
              <h4>Contact</h4>

              <p>
                <strong>UK:</strong>
                <Link href="tel:+44 (0)20 7193 0220" target="_blank">
                  <a>+44 (0)20 7193 0220</a>
                </Link>
              </p>
              <p>
                <strong>US:</strong>
                <Link href="tel:+1 (315) 636 0483" target="_blank">
                  <a>+1 (315) 636 0483</a>
                </Link>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <Link href="mailto:info@horseflyanalytics.com" target="_blank">
                  <a>info@horseflyanalytics.com</a>
                </Link>
              </p>

              <ul className="social">
                <li>
                  <Link
                    href="https://www.facebook.com/horseflyanalytics"
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    <a>
                      Facebook <i className="icon icon-facebook"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://twitter.com/HorseflyInsight"
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    <a>
                      Twitter <i className="icon icon-twitter"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.linkedin.com/company/jobstheword/"
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    <a>
                      LinkedIn <i className="icon icon-linkedin"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row copyright">
          <div className="col-lg-12">
            <div className="content">
              <p>
                &copy; 2022 <strong>Horsefly</strong> is a trademark of AI
                Recruitment Technologies Ltd. All rights reserved.
              </p>
              <p>
                <Link href="/terms-conditions" title="Terms and Conditions">
                  <a>Terms and Conditions</a>
                </Link>
                <span>|</span>
                <Link href="/cookies" title="Cookies">
                  <a>Cookies</a>
                </Link>
                <span>|</span>
                <Link href="/privacy-policy" title="Privacy Policy">
                  <a>Privacy Policy</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
