import React from 'react'
import Link from "next/link";
import ReactHtmlParser from 'react-html-parser'
const Header = ({data}) => {
  return (
    <section className="hero">
        <div className="wrap">
          <div className="col-lg-6 col-md-12">
            <img
              src={data.image.url}
              alt={data.image.title}
              width="560"
              height="335"
            />
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="content">
              <h1 className="mh-s-md">{data.title}</h1>
              <p>
                {ReactHtmlParser(data.description)}
              </p>
              <div className="cta-button">
                <Link
                  href={data.buttonUrl}
                  title="Get a Demo of Ethnicity Data"
                  className="btn btn-blue"
                >
                  <a className="btn btn-blue">{data.buttonName}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Header