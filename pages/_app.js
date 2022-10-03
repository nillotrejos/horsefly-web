import "../public/css/reset.css";
import "../public/css/base.css";
import "../public/css/lite-yt-embed.css";
import "../public/css/splide.min.css";
import "../public/css/layout.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopBar, Header, Footer } from "../components/index";
import App from 'next/app';


class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <>
      <TopBar />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <div id="overlay" className="backdrop"></div>
      </>
    );
  }
}

export default MyApp;
