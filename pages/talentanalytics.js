import { fetchContent } from '../utils/contentful';
import { TalentAnalyticsQuery } from '../queries/talentanalyticsQuery'
import Header from "../components/TalentAnalyticsComponents/Header";
import RPOBlogs from "../components/RPOComponents/RPOBlogs";
import AboutHorsefly from "../components/TalentAnalyticsComponents/AboutHorsefly";
import Banners from "../components/TalentMarketDataComponents/Banner";
import WhoCanBenefits from "../components/TalentAnalyticsComponents/WhoCanBenefits";
import Benefits from "../components/TalentAnalyticsComponents/Benefits";
import Strategic from "../components/TalentAnalyticsComponents/Strategic";
import Plateform from "../components/TalentAnalyticsComponents/Plateform";
import FAQ from "../components/TalentAnalyticsComponents/FAQ";
import Banner from "../components/LaborMarketAnalyticsComponents/Banner";
export default function TalentAnalytics({TopBannerData,BlogsData,ToolsData,BannerData,WhocanBenefitsdata,BenefitsData,StratigicData,AnalyticsBannerData,FAQData,ContactData}) {
  return (
    <main>
      <Header data={TopBannerData} />
      <RPOBlogs data={BlogsData} />
      <AboutHorsefly data={ToolsData} />
      <Banners data={BannerData} />
      <WhoCanBenefits  data={WhocanBenefitsdata} />
      <Benefits data={BenefitsData} />
      <Strategic data={StratigicData} />
      <Plateform data={AnalyticsBannerData} />
      <FAQ data={FAQData} />
      <Banner data={ContactData} />
    </main>
  );
}

export async function getStaticProps() {
  const response = await fetchContent(TalentAnalyticsQuery);
  return {
    props: {
      TopBannerData: response.talentAnalyticsPage.topHeader,
      BlogsData: response.talentAnalyticsPage.blogsCollection.items,
      ToolsData: {
        title: response.talentAnalyticsPage.talentAnalyticsTools.title,
        description: response.talentAnalyticsPage.talentAnalyticsTools.description,
        data: response.talentAnalyticsPage.talentAnalyticsTools.talentDataRefCollection.items,
      },
      BannerData: response.talentAnalyticsPage.banner,
      WhocanBenefitsdata: {
        title: response.talentAnalyticsPage.whoCanBenefit.title,
        description: response.talentAnalyticsPage.whoCanBenefit.description,
        data: response.talentAnalyticsPage.whoCanBenefit.laborMarketAnalyticsAndItemsCollection.items,
      },
      BenefitsData: {
        title: response.talentAnalyticsPage.benefitsOfHorsefly.title,
        data: response.talentAnalyticsPage.benefitsOfHorsefly.benefitsDataCollection.items
      },
      StratigicData: {
        title: response.talentAnalyticsPage.strategicBusinessUses.title,
        data: response.talentAnalyticsPage.strategicBusinessUses.laborMarketDataCollection.items
      },
      AnalyticsBannerData: response.talentAnalyticsPage.horseflyAnalyticsPlatformBanner,
      FAQData: {
        title: response.talentAnalyticsPage.faqTitle,
        data: response.talentAnalyticsPage.faqsCollection.items
      },
      ContactData: response.talentAnalyticsPage.contactHorseflyBanner
    },
    revalidate: 5, 
  }
}