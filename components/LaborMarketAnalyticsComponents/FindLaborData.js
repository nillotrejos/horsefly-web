import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const FindLaborData = ({data}) => {
  return (
    <section className="features">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">{data.title}</h2>
              <p className="mw-560 ahc">
               {ReactHtmlParser(data.description)}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FindLaborData