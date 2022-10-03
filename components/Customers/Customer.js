import React from 'react'
import Link from "next/link";
const Customer = ({data}) => {
  return (
    <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">{data.title}</h2>
              <p className="mw-960 ahc">
                {data.description}
              </p>
            </div>
          </div>

          <div className="row customer-list ahc last">
            {data.customerdata.map((el,i) => (
                <div className="col-lg-4 col-md-12" key={i}>
              <div className="content">
                <div className="customer-logo">
                  <img
                    src={el.logo.url}
                    alt={el.logo.title}
                    width="300"
                    height="300"
                  />
                </div>

                <h3>
                  <Link href={el.buttonUrl}>
                    {el.title}
                  </Link>
                </h3>

                <p>
                  {el.description}
                </p>
                <Link
                  href={el.buttonUrl}
                  className="btn btn-green"
                >
                  <a className="btn btn-green">{el.buttonName}</a>
                </Link>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Customer