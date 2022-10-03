import React from 'react'
import ReactHtmlParser from 'react-html-parser'
const SteamLine = ({data}) => {
  return (
    <section className="features">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">
                {data.title}
              </h2>
              <p>
                {data.description}
              </p>
            </div>
          </div>
          <div className="row feature ahc">
            {data.steamlineItemsCollection.items.map((el,i) => (
                <div className="col-lg-6 col-md-12" key={i}>
              <div className="content icon-left">
                <div className="icon green star"></div>

                <div className="text">
                  <h3>{el.title}</h3>
                  <p>
                    {ReactHtmlParser(el.description)}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default SteamLine