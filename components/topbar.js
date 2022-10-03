import React from "react";
import Link from "next/link";
export const TopBar = () => {
  return (
    <div id="top-bar">
      <div className="wrap">
        <div className="col-lg-12">
          <ul className="contact">
            <li>
              <Link href="mailto:info@horseflyanalytics.co.uk" target="_blank">
                <a>info@horseflyanalytics.co.uk</a>
              </Link>
            </li>

            <li>
              <Link href="tel:+44 (0)20 7193 0220" target="_blank">
                <a>UK: +44 (0)20 7193 0220</a>
              </Link>
            </li>

            <li>
              <Link href="tel:+1 (315) 636 0483" target="_blank">
                <a>US: +1 (315) 636 0483</a>
              </Link>
            </li>
          </ul>

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
  );
};
