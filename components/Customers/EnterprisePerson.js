import React from 'react'
import Link from "next/link";

const EnterprisePerson = ({data}) => {
  return (
    <section className="testimonials no-pad-n">
        <div className="wrap">
          <div className="row clients ahc">
          {data.map((el,i) => (
            <div className="col-lg-6 col-md-12" key={i}>
            <div className="content">
              <img
                src={el.personImage.url}
                alt={el.personImage.title}
                width="120"
                height="120"
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

export default EnterprisePerson