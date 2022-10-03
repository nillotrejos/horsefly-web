import React from 'react'

const LaborInsights = ({data}) => {
    
  return (
    <section className="features light-gray">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="ahc bold">{data.title}</h2>
              <p>
                {data.description}
              </p>
            </div>
          </div>

          <div className="row feature-list ahc">
            {data.data.map((el,i) => (
                <div className="col-lg-12 mh-ns-lg" key={i}>
              <div className="content">
                <div className="feature-check">
                  <svg
                    style={{ width: "55px", height: "55px" }}
                    fill="#3470AC"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31.8 31.8"
                  >
                    <path d="M.9 14.5C5.2 19.4 9.8 24 14.1 29c.4.5 1.3.3 1.6-.2 5.1-8.4 10.1-16.8 15-25.4.7-1.2-.5-2.1-1.3-.9C19.3 18 19 18.4 13.9 26.7c.5-.1 1.1-.1 1.6-.2-4.4-4.8-8.9-8.6-13.9-12.8-.4-.4-1.1.3-.7.8z"></path>
                  </svg>
                </div>

                <div className="feature-description">
                  <h3>{el.title}</h3>
                  <p>
                    {el.description}
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

export default LaborInsights