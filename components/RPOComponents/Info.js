import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const Info = ({data}) => {
  return (
    <section className="blue bg-02 bg-filter">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content cta-block">
              <h2 className="mw-960 ahc">
                {ReactHtmlParser(data.title)}
              </h2>
              <p>
              {ReactHtmlParser(data.description)}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Info