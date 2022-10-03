import { fetchContent } from '../utils/contentful';
import { WhyHorseflyQuert } from '../queries/whyHorsefly';
import Header from "../components/LabourDatabaseComponents/Header";
import HorseflyBanner from "../components/LabourDatabaseComponents/HorseflyBanner";
import TalentData from "../components/LabourDatabaseComponents/TalentData";
import Questions from "../components/LabourDatabaseComponents/Questions";
import ExploreOurData from "../components/LabourDatabaseComponents/ExploreOurData";
import Blogs from "../components/HomeComponents/Blogs";
import GetStarted from "../components/LabourDatabaseComponents/GetStarted";

export default function LaborDatabase({BannerCollection,blogs,ExploreOur,GetStartedBanner,Question,talentdata,TopHeader}) { 
  return (
    <main>
      <Header data={TopHeader} />
      <HorseflyBanner data={BannerCollection} />
      <TalentData datas={talentdata} />
      <Questions data={Question} />
      <ExploreOurData data={ExploreOur} />
      <Blogs blog={blogs} />
      <GetStarted data={GetStartedBanner} />
    </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(WhyHorseflyQuert);
  return {
    props: {
      BannerCollection: response.whyHorsefly.bannerData,
      blogs: response.whyHorsefly.blogsCollection.items,
      ExploreOur: response.whyHorsefly.exploreOurData,
      GetStartedBanner: response.whyHorsefly.getStartedBanner,
      Question:{
        title: response.whyHorsefly.questionanswerTitle,
        description: response.whyHorsefly.questionanswerDescription,
        data: response.whyHorsefly.questionanswerListsCollection.items,
      },
      talentdata: {
        title:response.whyHorsefly.talentDataRef.title,
        description: response.whyHorsefly.talentDataRef.description,
        data: response.whyHorsefly.talentDataRef.talentDataRefCollection.items
      },
      TopHeader:response.whyHorsefly.topBanner
     
    },
    revalidate: 5, 
  }
}