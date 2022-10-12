import React from 'react'
import Slider from "react-slick";


const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "15%",
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    
  };

const Carousel = ({data}) => {
  return (
    <section className="slider border-n">
          <div className="wrap">
            <div className="col-lg-12">
              <div className="content" style={{marginBottom:'60px'}}>
                <h2  className="mw-960 ahc bold">
                 {data.title}
                </h2>
              </div>
            </div>
            <Slider {...settings}>
                {data.images.map((item,index)=> (
                    <div
                key={index}
                className="splide__slide is-active is-visible"
                id="image-slider-slide01"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: "720px" }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  width="720"
                  height="530"
                />
              </div>
                ))}
            </Slider>
          </div>
      </section>
  )
}

export default Carousel