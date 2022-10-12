import "../public/css/reset.css";
import "../public/css/base.css";
import { useRouter } from 'next/router'
import "../public/css/lite-yt-embed.css";
import "../public/css/splide.min.css";
import "../public/css/layout.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopBar, Header, Footer } from "../components/index";


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <TopBar />
      <Header />
      <Component {...pageProps} path={router.pathname} />
      <Footer />
      <div id="overlay" className="backdrop"></div>
      </>
  )
}

export default MyApp;
