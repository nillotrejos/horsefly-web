import React from 'react'
import Link from "next/link";

const Enterprises = ({TopEnterprises}) => {
  const split = TopEnterprises.title.split('.')
  return (
    <section className="testimonials">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">
                {split[0]}<span className='blue'>{split[1]}</span>
              </h2>
            </div>
          </div>
          <div className="row clients ahc">
            {TopEnterprises.data.map(el => (
                <div className="col-lg-6 col-md-12" key={el.name}>
              <div className="content">
                <img
                  src={el.personImage.url}
                  alt={el.personImage.title}
                  width="120px"
                  height="120px"
                />
                <h3>{el.name}</h3>
                <p className="bold">
                  {el.designation}{" "}
                  <Link
                    href={el.url}
                    target="_blank"
                    title={el.urlName}
                    rel="nofollow noreferrer noopener"
                  >
                    <a>{el.urlName}</a>
                  </Link>
                </p>
                <p>
                  {el.description}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Enterprises