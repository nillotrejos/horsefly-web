import { fetchContent } from '../utils/contentful';
import { LaborInsightsQuery } from '../queries/laborInsightQuery';
import TopHeader from "../components/TalentMarketDataComponents/TopHeader";
import HowHorsefly from "../components/LaborInsightsComponents/HowHorsefly";
import RichText from "../components/LaborInsightsComponents/RichText";
import LaborInsights from "../components/LaborInsightsComponents/LaborInsights";
import WhoCanBenefits from "../components/TalentAnalyticsComponents/WhoCanBenefits";
import UsesLaborData from "../components/LaborInsightsComponents/UsesLaborData";
import FindLaborDataa from "../components/LaborInsightsComponents/FindLaborData";
import Banner from "../components/LaborMarketAnalyticsComponents/Banner";

export default function LaborMarketData({TopHeaderData,MarketInsights,BannerJSON,LaborInsightsData,WhoNeedsInsights,UsesLabordata,FindLaborDatas,ContactBanner}) {
  return (
    <main>
      <TopHeader data={TopHeaderData} />
      <HowHorsefly data={MarketInsights} />
      <RichText data={BannerJSON} />
      <LaborInsights data={LaborInsightsData} />
      <WhoCanBenefits data={WhoNeedsInsights} />
      <UsesLaborData data={UsesLabordata} />
      <FindLaborDataa data={FindLaborDatas} />
      <Banner data={ContactBanner} />
    </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(LaborInsightsQuery);
  return {
    props: {
      TopHeaderData: response.laborInsights.topBanner,
      MarketInsights: {
        title: response.laborInsights.labourMarketInsights.title,
        description: response.laborInsights.labourMarketInsights.description,
        data: response.laborInsights.labourMarketInsights.talentDataRefCollection.items,
      },
      BannerJSON: response.laborInsights.banner.json,
      LaborInsightsData: {
        title: response.laborInsights.labourInsights.title,
        description: response.laborInsights.labourInsights.description,
        data: response.laborInsights.labourInsights.steamlineItemsCollection.items
      },
      WhoNeedsInsights: {
        title: response.laborInsights.whoNeedsLaborInsights.title,
        description: response.laborInsights.whoNeedsLaborInsights.description,
        data: response.laborInsights.whoNeedsLaborInsights.laborMarketAnalyticsAndItemsCollection.items,
      },
      UsesLabordata: {
        title: response.laborInsights.usesOfLaborMarketData.title,
        data: response.laborInsights.usesOfLaborMarketData.laborMarketDataCollection.items
      },
      FindLaborDatas: response.laborInsights.findLaborMarketData,
      ContactBanner: response.laborInsights.contactHorseflyBanner
    },
    revalidate: 5, 
  }
}