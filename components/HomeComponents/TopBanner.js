import ReactHtmlParser from 'react-html-parser'

 const TopBanner = ({HomeBannerData}) => {
    return(
        <section className="hero">
        <div className="wrap centered">
          <div className="col-lg-7 col-md-12">
            <img
              src={HomeBannerData.image.url}
              alt={HomeBannerData.image.title}
              width="600"
              height="305"
            />
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="content">
              <h1
                className="mh-s-md">
                {ReactHtmlParser(HomeBannerData.title)}
              </h1>
              <p>
                {HomeBannerData.description}
              </p>
            </div>
          </div>
        </div>
        </section>
    )
 }
 export default TopBanner