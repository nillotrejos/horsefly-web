import React from 'react'

const PartnerLogos = ({data}) => {
    return(
        <section className="partners blue">
        <div className="wrap">
          <ul className="logos">
            {data.map(el => (
                <li key={el.url}>
                <img 
                src={el.url}
                alt={el.title}
                width="120"
                height="82"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
}
export default PartnerLogos