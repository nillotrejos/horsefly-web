import { fetchContent } from '../utils/contentful';
import { DiversityDataQuery } from '../queries/diversitydata'
import Header from "../components/DiversityComponents/Header";
import BannerInfo from "../components/DiversityComponents/BannerInfo";
import IncreaseDiversity from "../components/DiversityComponents/IncreaseDiversity";
import KeyInnovation from "../components/DiversityComponents/KeyInnovation";
import BannerSection from "../components/DiversityComponents/BannerSection";
import EthnicityData from "../components/DiversityComponents/EthnicityData";
 
export default function DiversityData({TopBannerData,Info,IncreaseDiversityData,KeysData,Section,ethencity}) {
  return (
    <main>
      <Header data={TopBannerData} />
      <BannerInfo data={Info} />
      <IncreaseDiversity data={IncreaseDiversityData} />
      <KeyInnovation data={KeysData} />
      <BannerSection data={Section} />
      <EthnicityData data={ethencity} />
    </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(DiversityDataQuery);
  return {
    props: {
     Info: response.diversityDataPage.bannerInfo,
     TopBannerData: response.diversityDataPage.diversityHeader,
     IncreaseDiversityData: response.diversityDataPage.increaseDiversityData,
     KeysData: {
      title: response.diversityDataPage.keyInnovationHeading,
      description: response.diversityDataPage.keyInnovationDescription,
      data: response.diversityDataPage.keyInnovationItemsCollection.items,
     },
     Section: response.diversityDataPage.horseflysDiversitySection,
     ethencity: {
      title: response.diversityDataPage.ethnicityDiversitySection.title,
      description: response.diversityDataPage.ethnicityDiversitySection.description,
      data: response.diversityDataPage.ethnicityDiversitySection.steamlineItemsCollection.items
    }
    },
    revalidate: 5, 
  }
}