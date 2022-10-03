import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const IncreaseDiversity = ({data}) => {
  return (
    <section className="features bordered">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="mw-960 ahc bold">
                <span>{data.title}</span>
              </h2>
              <p className="mw-960 ahc">
                {ReactHtmlParser(data.description)}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default IncreaseDiversity