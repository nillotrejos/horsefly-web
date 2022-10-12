import { fetchContent } from '../utils/contentful';
import { TalentMarketDataQuery } from '../queries/talentmarketdataQuery';
import Head from 'next/head'
import TopHeader from "../components/TalentMarketDataComponents/TopHeader";
import Banners from "../components/TalentMarketDataComponents/Banner";
import ProblemLeadingTalent from "../components/TalentMarketDataComponents/ProblemLeadingTalent";
import TalentData from "../components/LabourDatabaseComponents/TalentData";
import ExploreOurData from "../components/LabourDatabaseComponents/ExploreOurData";
import GetStartedBanner from "../components/LabourDatabaseComponents/GetStarted";
import WorkBlogs from "../components/WorkForcePlanningDataComponents/WorkBlog";

export default function TalentMarketData({MetaTags,path,QuestionAnswer,TopBanner,Banner,blogs,ExploreOur,GetStartedBanners,Question,talentdata}) {
  const data = QuestionAnswer.map(el => (
    {
      "@type": "Question",
      "name:": `${el.question}`, 
      "acceptedAnswer": {
            "@type": "Answer",
            "text": `${el.answer}`
        }
   }
  ))
  return (
    <main>
      <Head>
      <title>{MetaTags.title}</title>
        <link rel="canonical" href={`https://horseflyanalytics.com${path}`} /> 
		    <meta name="viewport" content="width=device-width, initial-scale=1" />
		    <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {MetaTags.data.map((el,i) => {
          if(el.mataTagFor == "Name"){
            return(
              <meta name={el.name} content={el.content} key={i} />
            )
          }else{
            return(
              <meta property={el.name} content={el.content} key={i} />
            )
          }
        })}
      <script type="application/ld+json">
      {`
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": ${JSON.stringify(data)}
      `}
      </script>
      </Head>
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
      MetaTags: {
        title: response.talentMarketDataPage.metaTags.title,
        data: response.talentMarketDataPage.metaTags.metaTagsCollection.items
      },
      QuestionAnswer: response.talentMarketDataPage.schemaQuestionAnswerCollection.items
    },
    revalidate: 5, 
  }
}