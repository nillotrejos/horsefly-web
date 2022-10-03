import React from 'react'
import Link from "next/link";
const TopReasons = ({data}) => {
  return (
    <section className="features">
            <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">{data.title}</h2>
              <p>
                {data.description}
              </p>
            </div>
          </div>
          <div className="row feature ahc">
          {data.data.map((item,index) => (
            <div className="col-lg-4 col-md-12" key={index}>
            <div className="content numbered">
              <div className={`text num-${item.reasonNumber}`}>
                <h3>{item.title}</h3>
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
            ))}
          </div>
          <div className="cta-button">
            <Link href={data.buttonUrl} title={data.buttonName} className="btn btn-green">
              <a className="btn btn-green">{data.buttonName}</a>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default TopReasons