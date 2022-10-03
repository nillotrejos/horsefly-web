import React from 'react'
import Link from "next/link";
const GetStarted = ({data}) => {
  return (
    <section className="blue bg-world bg-filter">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content cta-block">
              <h2 className="mw-960 ahc">
                {data.title}
              </h2>
              <p>{data.description}</p>
              <div className="cta-button">
                <Link href={data.buttonUrl} title={data.buttonTitle} className="btn btn-green">
                  <a className="btn btn-green">{data.buttonTitle}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default GetStarted