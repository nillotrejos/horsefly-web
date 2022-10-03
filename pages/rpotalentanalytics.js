import { fetchContent } from '../utils/contentful';
import { RPOPageQuery } from '../queries/rpoTalentQuery';
import Header from "../components/TalentAcquisitionComponents/Header";
import ClientsCard from "../components/RPOComponents/ClientsCard";
import RpoBannerData from "../components/RPOComponents/RpoBannerData";
import ExpertVoiceComponent from "../components/RPOComponents/ExpertVoiceComponent";
import Features from "../components/RPOComponents/Features";
import Info from "../components/RPOComponents/Info";
import RPOBlogs from "../components/RPOComponents/RPOBlogs";
import GetStartedHubspot from "../components/TalentAcquisitionComponents/GetStartedHubspot";

export default function RPOTalentAnalysis({TopHeader,ClientCards,BannerData,ExpertVoice,ToolsForRPO,InfoBanner,Blog,getStartedBanner}) {
  return (
    <main>
      <Header data={TopHeader} />
      <ClientsCard data={ClientCards} />
      <RpoBannerData data={BannerData} />
      <ExpertVoiceComponent data={ExpertVoice} />
      <Features data={ToolsForRPO} />
      <Info data={InfoBanner} />
      <RPOBlogs data={Blog} />
      <GetStartedHubspot data={getStartedBanner} />
     </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(RPOPageQuery);
  return {
    props: {
      TopHeader: response.rpoRecruitmentPage.topHeader,
      ClientCards: {
        title: response.rpoRecruitmentPage.rpoClientTitle,
        data: response.rpoRecruitmentPage.rpoClientsCollection.items,
      },
      BannerData: response.rpoRecruitmentPage.bannerInfo.json,
      ExpertVoice: {
        title: response.rpoRecruitmentPage.theExpertVoice.title,
        description: response.rpoRecruitmentPage.theExpertVoice.description,
        data: response.rpoRecruitmentPage.theExpertVoice.steamlineItemsCollection.items,
      },
      ToolsForRPO: {
        title: response.rpoRecruitmentPage.toolForRpOsRecruitmentTeams.title,
        description: response.rpoRecruitmentPage.toolForRpOsRecruitmentTeams.description,
        ToolsRef: response.rpoRecruitmentPage.toolForRpOsRecruitmentTeams.talentDataRefCollection.items,
      },
      InfoBanner: response.rpoRecruitmentPage.infoBanner,
      Blog: response.rpoRecruitmentPage.blogsCollection.items,
      getStartedBanner: response.rpoRecruitmentPage.getStartedBanner
      
    },
    revalidate: 5, 
  }
}