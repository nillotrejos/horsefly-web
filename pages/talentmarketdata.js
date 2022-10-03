import { fetchContent } from '../utils/contentful';
import { TalentMarketDataQuery } from '../queries/talentmarketdataQuery';
import TopHeader from "../components/TalentMarketDataComponents/TopHeader";
import Banners from "../components/TalentMarketDataComponents/Banner";
import ProblemLeadingTalent from "../components/TalentMarketDataComponents/ProblemLeadingTalent";
import TalentData from "../components/LabourDatabaseComponents/TalentData";
import ExploreOurData from "../components/LabourDatabaseComponents/ExploreOurData";
import GetStartedBanner from "../components/LabourDatabaseComponents/GetStarted";
import WorkBlogs from "../components/WorkForcePlanningDataComponents/WorkBlog";

export default function TalentMarketData({TopBanner,Banner,blogs,ExploreOur,GetStartedBanners,Question,talentdata}) {
  return (
    <main>
      <TopHeader data={TopBanner} />
      <Banners data={Banner} />
      <ProblemLeadingTalent data={Question} />
      <TalentData datas={talentdata} />
      <ExploreOurData data={ExploreOur} />
      <WorkBlogs data={blogs} />
      <GetStartedBanner data={GetStartedBanners} />
    </main>
  );
}

export async function getStaticProps() {
  const response = await fetchContent(TalentMarketDataQuery);
  return {
    props: {
      TopBanner: response.talentMarketDataPage.topHeader,
      Banner: response.talentMarketDataPage.banner,
      blogs: response.talentMarketDataPage.blogCollection.items,
      ExploreOur: response.talentMarketDataPage.exploreBanner,
      GetStartedBanners: response.talentMarketDataPage.getStartedBanner,
      Question:{
        title: response.talentMarketDataPage.problemSectionTitle,
        description: response.talentMarketDataPage.problemSectionDescription,
        data: response.talentMarketDataPage.problemAndSolutionsCollection.items,
      },
      talentdata: {
        title:response.talentMarketDataPage.premierTalentAnalyticsPlatform.title,
        description: response.talentMarketDataPage.premierTalentAnalyticsPlatform.description,
        data: response.talentMarketDataPage.premierTalentAnalyticsPlatform.talentDataRefCollection.items
      },
    },
    revalidate: 5, 
  }
}