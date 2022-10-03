import { fetchContent } from '../utils/contentful';
import TopBanner from "../components/HomeComponents/TopBanner";
import PartnerLogo from "../components/HomeComponents/PartnersLogo";
import Blogs from "../components/HomeComponents/Blogs";
import Video from "../components/HomeComponents/Video";
import { HomePageQuery } from '../queries/hompageQuery'
import Satistics from "../components/HomeComponents/Satistics";
import Enterprises from "../components/HomeComponents/Enterprises";
import Explore from "../components/HomeComponents/Explore";

export default function Home({HomeBannerData, PartnerLogos, BlogsCollections, statistics, VideoID, TopEnterprises, ExploreBanner }) {
  return (
    <main>
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
      ExploreBanner: response.homePage.exploreHorseflyBanner
    },
    revalidate: 5, 
  }
}