import { fetchContent } from '../utils/contentful';
import { CaseStudiesQuery } from '../queries/caseStudies'
import Customer from "../components/Customers/Customer";
import GetStarted from "../components/LabourDatabaseComponents/GetStarted";
import EnterprisePerson from "../components/Customers/EnterprisePerson";
import NextSEO from '../components/NextSEO';
export default function CaseStudies({ MetaTags,path,QuestionAnswer, TopEnterpriseDetails,Banner,Cases }) {
  return (
    <main>
      <NextSEO MetaTags={MetaTags} QuestionAnswer={QuestionAnswer} path={path} />
      <Customer Cases={Cases} />
      <EnterprisePerson data={TopEnterpriseDetails} />
      <GetStarted data={Banner} />
    </main>
  );
}

export async function getStaticProps() {
  const CaseStudy = await fetchContent(CaseStudiesQuery);
  return {
    props: {
      TopEnterpriseDetails: CaseStudy.caseStudyPages.topEnterprisePersonDetailsCollection.items,
      Banner: CaseStudy.caseStudyPages.getStartedBanner,
      Cases: CaseStudy.caseStudyPages,
      MetaTags: {
        title: CaseStudy.caseStudyPages.metaTags.title,
        data: CaseStudy.caseStudyPages.metaTags.metaTagsCollection.items
      },
      QuestionAnswer: CaseStudy.caseStudyPages.schemaQuestionAnswerCollection.items
    },
    revalidate: 5, 
  }
}
