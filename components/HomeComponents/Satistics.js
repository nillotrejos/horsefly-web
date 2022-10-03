import React from 'react'
const Satistics = ({statistics}) => {
  return (
    <section className="blue bg-01">
        <div className="wrap">
          <div className="col-lg-12">
            <div className="content">
              <h2 className="mw-960 ahc">
                {statistics.title}
              </h2>
            </div>
          </div>
          <div className="row facts">
            {statistics.data.map(el => (
                <div className="col-lg-4 col-md-12" key={el.title}>
              <div className="content ahc">
                <div className="centered">
                  <p className="avb">{el.title}</p>
                </div>
                <big>{el.statisticsData.toLocaleString()}</big>
                <div className="centered">
                  <p className="avt">{el.description}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Satistics