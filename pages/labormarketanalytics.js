import { fetchContent } from '../utils/contentful';
import { LaborMarketAnalyticsQuery } from '../queries/laborMarketQuery'
import Header from "../components/LaborMarketAnalyticsComponents/Header";
import Banners from "../components/TalentMarketDataComponents/Banner";
import Notes from "../components/LaborMarketAnalyticsComponents/Notes";
import MarketProvide from "../components/LaborMarketAnalyticsComponents/MarketProvide";
import MarketTools from "../components/LaborMarketAnalyticsComponents/MarketTools";
import MarketData from "../components/LaborMarketAnalyticsComponents/MarketData";
import FindLaborData from "../components/LaborMarketAnalyticsComponents/FindLaborData";
import Banner from "../components/LaborMarketAnalyticsComponents/Banner";
export default function LabourMarketAnalytics({TopBannerData,BannerData,NotesData,MarketProvides,LaborMarketTool,UseOFLaborMarket,FindLaborMarketData,Contact}) {
  return (
    <main>
      <Header data={TopBannerData} />
      <Banners data={BannerData} />
      <Notes data={NotesData} />
      <MarketProvide data={MarketProvides} />
      <MarketTools data={LaborMarketTool} />
      <MarketData data={UseOFLaborMarket} />
      <FindLaborData data={FindLaborMarketData} />
      <Banner data={Contact} />
    </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(LaborMarketAnalyticsQuery);
  return {
    props: {
      TopBannerData: response.laborMarketAnalyticsPage.topHeader,
      BannerData: response.laborMarketAnalyticsPage.banner,
      NotesData: response.laborMarketAnalyticsPage.notes,
      MarketProvides: {
        title: response.laborMarketAnalyticsPage.laborMarketAnalyticsProvide.title,
        description: response.laborMarketAnalyticsPage.laborMarketAnalyticsProvide.description,
        data: response.laborMarketAnalyticsPage.laborMarketAnalyticsProvide.talentDataRefCollection.items,
      },
      LaborMarketTool: {
        title: response.laborMarketAnalyticsPage.laborMarketAnalyticsAndTools.title,
        description: response.laborMarketAnalyticsPage.laborMarketAnalyticsAndTools.description,
        data: response.laborMarketAnalyticsPage.laborMarketAnalyticsAndTools.laborMarketAnalyticsAndItemsCollection.items,
      },
      UseOFLaborMarket: {
        title: response.laborMarketAnalyticsPage.usesOfLaborMarketData.title,
        data: response.laborMarketAnalyticsPage.usesOfLaborMarketData.laborMarketDataCollection.items,
      },
      FindLaborMarketData: response.laborMarketAnalyticsPage.findLaborMarketData,
      Contact: response.laborMarketAnalyticsPage.contactHorsefly
    },
    revalidate: 5, 
  }
}