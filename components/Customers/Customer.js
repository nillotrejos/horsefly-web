import React from 'react'
import Link from "next/link";
const Customer = ({Cases}) => {
  const filterCases = Cases.casesCollection.items.filter(el => el.customer.showOnCustomerPage == "Yes" ? true : false)
  return (
    <section className="case-studies">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">{Cases.title}</h2>
              <p className="mw-960 ahc">
                {Cases.description}
              </p>
            </div>
          </div>

          <div className="row customer-list ahc last">
            {filterCases.map((el,i) => (
                <div className="col-lg-4 col-md-12" key={i}>
              <div className="content">
                <div className="customer-logo">
                  <img
                    src={el.customer.logo.url}
                    alt={el.customer.logo.title}
                    width="300"
                    height="300"
                  />
                </div>

                {el.caseStudyName == null ? (
                    <h3>
                    <Link href={el.customer.buttonUrl}>
                      {el.customer.title}
                    </Link>
                  </h3>
                ): (
                  
                    <h3>
                    <Link href={`casestudies/${el.slug}`}>
                      {el.customer.title}
                    </Link>
                  </h3>
                )}
                <p>
                  {el.customer.description}
                </p>
                {el.caseStudyName == null ? (
                    <Link
                    href={el.customer.buttonUrl}
                    className="btn btn-green"
                    >
                    <a className="btn btn-green">{el.customer.buttonName}</a>
                    </Link>
                ): (
                  <Link
                    href={`casestudies/${el.slug}`}
                    className="btn btn-green"
                    >
                    <a className="btn btn-green">{el.customer.buttonName}</a>
                    </Link>
                )}
               
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Customer