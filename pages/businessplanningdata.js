import { fetchContent } from '../utils/contentful';
import { BusinessPageQuery } from '../queries/businessesDataQuery';
import Header from "../components/BusinessData/Header";
import TalentBanner from "../components/TalentAcquisitionComponents/TalentBanner";
import BlogsData from "../components/BusinessData/BlogsData";
import Tools from "../components/TalentAcquisitionComponents/Tools";
import Explore from "../components/BusinessData/Explore";
import Blogs from "../components/HomeComponents/Blogs";
import GetStarted from "../components/LabourDatabaseComponents/GetStarted";


export default function BusinessPlanningData({TopHeader,BannerData,BusinessData,Diversity,Exploredata,BlogData,GetStartedBanner}) {
  return (
    <main>
      <Header data={TopHeader} />
      <TalentBanner data={BannerData} />
      <BlogsData data={BusinessData} />
      <Tools data={Diversity} />
      <Explore data={Exploredata} />
      <Blogs blog={BlogData} />
      <GetStarted data={GetStartedBanner} />
    </main>
  );
}

export async function getStaticProps() {
  const response = await fetchContent(BusinessPageQuery);
  return {
    props: {
      TopHeader: response.businessPlanningPage.topHeader,
      BannerData: response.businessPlanningPage.bannerInfo.json,
      BusinessData: response.businessPlanningPage.businessDataCollection.items,
      Diversity: {
        title: response.businessPlanningPage.diversityLaborMarketData.title,
        description: response.businessPlanningPage.diversityLaborMarketData.description,
        data: response.businessPlanningPage.diversityLaborMarketData.talentDataRefCollection.items,
      },
      Exploredata: response.businessPlanningPage.exploreOur,
      BlogData: response.businessPlanningPage.blogsCollection.items,
      GetStartedBanner: response.businessPlanningPage.getStartedBanner
    },
    revalidate: 5, 
  }
}