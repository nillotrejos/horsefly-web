import React from 'react'
import Link from "next/link";
import ReactHtmlParser from 'react-html-parser'

const ClientsCard = ({data}) => {
  return (
    <section className="testimonials gray">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">
                {ReactHtmlParser(data.title)}
              </h2>
            </div>
          </div>
          <div className="row clients ahc">
            {data.data.map((el,i) => (
                <div className="col-lg-4 col-md-12" key={i}>
              <div className="content card-white">
                <h3>{el.name}</h3>
                <p className="title">
                 {el.designation}
                </p>
                <p className="quote">
                  {el.description}
                </p>
                {el.url == null ? null : (
                    <p className="link">
                  <Link
                    href={el.url}
                    title={el.urlName}
                    rel="nofollow noreferrer noopener"
                  >
                    <a>{el.urlName}</a>
                  </Link>
                </p>
                )}
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ClientsCard