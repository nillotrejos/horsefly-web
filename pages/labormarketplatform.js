import { fetchContent } from '../utils/contentful';
import { LaborMarketPlatformQuery } from '../queries/labormarketplatformQuery';
import TopHeader from "../components/LaborMarketPlatformComponents/TopHeader";
import Carousel from "../components/LaborMarketPlatformComponents/Carousel";
import LabourDescription from "../components/LaborMarketPlatformComponents/LabourDescription";
import LaborBlogs from "../components/LaborMarketPlatformComponents/LaborBlogs";
import GetStarted from '../components/LabourDatabaseComponents/GetStarted'
export default function LaborMarketPlatform({TopBanner,Carousels,Blogs,Banner,info}) {
  return (
    <main>
      <TopHeader data={TopBanner} />
      <Carousel data={Carousels} />
      <LabourDescription info={info} />
      <LaborBlogs data={Blogs} />
      <GetStarted data={Banner} />
    </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(LaborMarketPlatformQuery);
  return {
    props: {
      TopBanner: response.laborMarketPlatform.topBanner,
      Carousels: {
        title: response.laborMarketPlatform.carouselTitle,
        images: response.laborMarketPlatform.carouselImageCollection.items,
      },
      Blogs: {
        title: response.laborMarketPlatform.blogTitle,
        data: response.laborMarketPlatform.blogaCollection.items,
      },
      Banner: response.laborMarketPlatform.banner,
      info: response.laborMarketPlatform.infoBanner.json,
    },
    revalidate: 5, 
  }
}