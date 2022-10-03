import { fetchContent } from '../utils/contentful';
import { TalentAquisitionQuery } from '../queries/talentaquisitionQuery'
import Header from "../components/TalentAcquisitionComponents/Header";
import TalentBanner from "../components/TalentAcquisitionComponents/TalentBanner";
import SteamLine from "../components/TalentAcquisitionComponents/SteamLine";
import Tools from "../components/TalentAcquisitionComponents/Tools";
import AcquisitionAnalytics from "../components/TalentAcquisitionComponents/AcquisitionAnalytics";
import WorkBlogs from "../components/WorkForcePlanningDataComponents/WorkBlog";
import GetStartedHubspot from "../components/TalentAcquisitionComponents/GetStartedHubspot";


export default function TalentAcquisitionPlatform({TopBanner,Banner,StreamlineData,AnalyticsData,Blog,Getstarted,ToolsDataobj}) {
  return (
    <main>
      <Header data={TopBanner} />
      <TalentBanner data={Banner} />
      <SteamLine data={StreamlineData} />
      <Tools data={ToolsDataobj} />
      <AcquisitionAnalytics data={AnalyticsData} />
      <WorkBlogs data={Blog} />
      <GetStartedHubspot data={Getstarted} />
    </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(TalentAquisitionQuery);
  return {
    props: {
      TopBanner: response.talentAcquisitionPlatform.topBanner,
      Banner: response.talentAcquisitionPlatform.banner.json,
      StreamlineData: response.talentAcquisitionPlatform.streamlineYourTalent,
      ToolsDataobj: {
        title: response.talentAcquisitionPlatform.toolsForRecruitment.title,
        description: response.talentAcquisitionPlatform.toolsForRecruitment.description,
        data: response.talentAcquisitionPlatform.toolsForRecruitment.talentDataRefCollection.items
      },
      AnalyticsData: response.talentAcquisitionPlatform.alentAcquisitionAnalytics,
      Blog: response.talentAcquisitionPlatform.blogsCollection.items,
      Getstarted: response.talentAcquisitionPlatform.getStartedBanner
    },
    revalidate: 5, 
  }
}