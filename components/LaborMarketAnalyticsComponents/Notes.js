import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const Notes = ({data}) => {
  return (
    <section className="impact-text">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <p className="text-wrap">
                {ReactHtmlParser(data.note)}
              </p>
              <p className="mw-960">
                {ReactHtmlParser(data.descriptionOverview)}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Notes