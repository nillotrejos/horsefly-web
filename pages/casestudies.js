import { fetchContent } from '../utils/contentful';
import { CustomerPageQuery } from '../queries/customerQuery'
import Customer from "../components/Customers/Customer";
import GetStarted from "../components/LabourDatabaseComponents/GetStarted";
import EnterprisePerson from "../components/Customers/EnterprisePerson";
export default function CaseStudies({TopHeader,TopEnterpriseDetails,Banner}) {
  return (
    <main>
      <Customer data={TopHeader} />
      <EnterprisePerson data={TopEnterpriseDetails} />
      <GetStarted data={Banner} />
    </main>
  );
}


export async function getStaticProps() {
  const response = await fetchContent(CustomerPageQuery);
  return {
    props: {
      TopHeader:{
        title: response.customers.title,
        description: response.customers.description,
        customerdata: response.customers.customerCollection.items
      },
      TopEnterpriseDetails: response.customers.topEnterprisePersonDetailsCollection.items,
      Banner: response.customers.banner
    },
    revalidate: 5, 
  }
}