import { fetchContent } from '../utils/contentful';
import { WorkForcePageQuery } from '../queries/workforceQuery'
import Headers from "../components/WorkForcePlanningDataComponents/Header";
import BannerSec from "../components/WorkForcePlanningDataComponents/BannerSec";
import TopReasons from "../components/WorkForcePlanningDataComponents/TopReasons";
import AccurateWorkforce from "../components/WorkForcePlanningDataComponents/AccurateWorkforce";
import WorkBlogs from "../components/WorkForcePlanningDataComponents/WorkBlog";
import GetStarted from "../components/LabourDatabaseComponents/GetStarted";
import NextSEO from '../components/NextSEO';

export default function WorkForcePlanningData({QuestionAnswer,MetaTags,path,Header,Info,MarketAnalyticsBanner,Reasons,MarketData,Blog,Banner}) {
  return (
    <main>
      <NextSEO MetaTags={MetaTags} QuestionAnswer={QuestionAnswer} path={path} />
      <Headers data={Header} />
      <BannerSec data={MarketAnalyticsBanner} info={Info} />
      <TopReasons data={Reasons} />
      <AccurateWorkforce data={MarketData} />
      <WorkBlogs data={Blog} />
      <GetStarted data={Banner}/>
    </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(WorkForcePageQuery);
  return {
    props: {
      Header: response.workForcePlaningDataPage.topBanner,
      Info: response.workForcePlaningDataPage.marketBanner.json,
      Reasons: {
        title: response.workForcePlaningDataPage.topReasons.title,
        description: response.workForcePlaningDataPage.topReasons.description,
        data: response.workForcePlaningDataPage.topReasons.reasonsCollection.items,
        buttonName: response.workForcePlaningDataPage.topReasons.buttonName,
        buttonUrl: response.workForcePlaningDataPage.topReasons.buttonUrl,
      },
      MarketData: response.workForcePlaningDataPage.laborMarketDataAnalytics,
      Blog: response.workForcePlaningDataPage.blogsCollection.items,
      Banner: response.workForcePlaningDataPage.getStarted,
      MetaTags: {
        title: response.workForcePlaningDataPage.metaTags.title,
        data: response.workForcePlaningDataPage.metaTags.metaTagsCollection.items
      },
      QuestionAnswer: response.workForcePlaningDataPage.faqSchemaCollection.items
    },
    revalidate: 5, 
  }
}