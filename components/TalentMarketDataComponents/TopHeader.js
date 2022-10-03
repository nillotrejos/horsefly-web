import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const TopHeader = ({data}) => {
  return (
    <section className="hero">
        <div className="wrap centered">
          <div className="col-lg-7 col-md-12">
            <img
              src={data.image.url}
              alt={data.image.title}
              width="600"
              height="305"
            />
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="content">
              <h1 className="mh-s-md">
                {ReactHtmlParser(data.title)}
              </h1>
              <p>
                {ReactHtmlParser(data.description)}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TopHeader