import { fetchContent } from '../utils/contentful';
import TopBanner from "../components/HomeComponents/TopBanner";
import PartnerLogo from "../components/HomeComponents/PartnersLogo";
import Blogs from "../components/HomeComponents/Blogs";
import Video from "../components/HomeComponents/Video";
import { HomePageQuery } from '../queries/hompageQuery'
import Satistics from "../components/HomeComponents/Satistics";
import Enterprises from "../components/HomeComponents/Enterprises";
import Explore from "../components/HomeComponents/Explore";
import NextSEO from '../components/NextSEO';

export default function Home({MetaTags,path,QuestionAnswer,HomeBannerData, PartnerLogos, BlogsCollections, statistics, VideoID, TopEnterprises, ExploreBanner }) {
  return (
    <main>
      <NextSEO MetaTags={MetaTags} QuestionAnswer={QuestionAnswer} path={path} />
      <TopBanner HomeBannerData={HomeBannerData} />
      <PartnerLogo data={PartnerLogos} />
      <Video id={VideoID} />
      <Blogs blog={BlogsCollections} />
      <Satistics statistics={statistics} />
      <Enterprises TopEnterprises={TopEnterprises} />
      <Explore data={ExploreBanner} />
    </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(HomePageQuery);
  return {
    props: {
      HomeBannerData: response.homePage.topHeader,
      PartnerLogos: response.homePage.partnersLogoCollection.items,
      BlogsCollections: response.homePage.blogsCollection.items,
      statistics:{
        title: response.homePage.statisticsTitle,
        data:  response.homePage.statisticsItemsCollection.items
      },
      VideoID: response.homePage.videoId,
      TopEnterprises: {
        title: response.homePage.topEnterprisesTitle,
        data: response.homePage.topEnterprisesClientsCollection.items
      },
      ExploreBanner: response.homePage.exploreHorseflyBanner,
      MetaTags: {
        title: response.homePage.metaTag.title,
        data: response.homePage.metaTag.metaTagsCollection.items
      },
      QuestionAnswer: response.homePage.schemaQuestionAnswerCollection.items
    },
    revalidate: 5, 
  }
}