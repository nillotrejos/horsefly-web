import { fetchContent } from '../utils/contentful';
import { LaborMarketPlatformQuery } from '../queries/labormarketplatformQuery';
import TopHeader from "../components/LaborMarketPlatformComponents/TopHeader";
import Carousel from "../components/LaborMarketPlatformComponents/Carousel";
import LabourDescription from "../components/LaborMarketPlatformComponents/LabourDescription";
import LaborBlogs from "../components/LaborMarketPlatformComponents/LaborBlogs";
import GetStarted from '../components/LabourDatabaseComponents/GetStarted'
import NextSEO from '../components/NextSEO';

export default function LaborMarketPlatform({MetaTags,FAQSchema,TopBanner,Carousels,Blogs,Banner,info,path}) {
  return (
    <main>
      <NextSEO MetaTags={MetaTags} QuestionAnswer={FAQSchema} path={path} />
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
      MetaTags: {
        title: response.laborMarketPlatform.metaTags.title,
        data: response.laborMarketPlatform.metaTags.metaTagsCollection.items,
      },
      FAQSchema: response.laborMarketPlatform.schemaQuestionAnswerCollection.items
    },
    revalidate: 5, 
  }
}