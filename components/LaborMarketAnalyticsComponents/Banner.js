import React from 'react'
import Link from "next/link";

const Banner = ({data}) => {
  return (
    <section className="blue bg-04">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content cta-block">
              <h2 className="mw-960 ahc">
                {data.title}
              </h2>
              <div className="cta-button">
                <Link href={data.buttonUrl} title={data.buttonName} className="btn btn-green">
                  <a className="btn btn-green">{data.buttonName}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner