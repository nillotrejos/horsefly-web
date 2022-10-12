import React from 'react'
import {CaseStudiesQuery} from '../../queries/caseStudies'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {CaseQuery} from '../../queries/caseQuery'
import { fetchContent } from '../../utils/contentful';
import { fetchContents } from '../../utils/DynamicPage';
import Link from "next/link";
import ReactHtmlParser from 'react-html-parser'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Case = ({ Cases }) => {
  const router = useRouter()
  const CaseStudy = Cases.caseStudies;
  const data = CaseStudy.schemaQuestionAnswerCollection.items.map(el => (
    {
      "@type": "Question",
      "name:": `${el.question}`, 
      "acceptedAnswer": {
            "@type": "Answer",
            "text": `${el.answer}`
        }
   }
  ))
  const Text = ({ children }) =>  <div className="col-lg-12"><p>{children}</p></div>;
  const SituationText = ({ children }) =>  <p>{children}</p>;
  const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node,children) =>  <Text>{children}</Text>,
      },
      renderText: text => text,
    };
    const situation = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node,children) =>  <SituationText>{children}</SituationText>,
      },
      renderText: text => text,
    };
    const split = CaseStudy.videoUrl != null && CaseStudy.videoUrl.split('/');
  return (
    <main>
      <Head>
      <title>{CaseStudy.metaTags.title}</title>
        <link rel="canonical" href={`https://horseflyanalytics.com/casestudies/${router.query.id}`} /> 
		    <meta name="viewport" content="width=device-width, initial-scale=1" />
		    <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {CaseStudy.metaTags.metaTagsCollection.items.map((el,i) => {
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
    <section className="case-studies">
      <div className="wrap">
        <div className="col-lg-12">
          <div className="content">
            <small className="mh-s-sm">Horsefly case studies</small>
            <h2 className="ahc bold">{CaseStudy.caseStudyName}</h2>
          </div>
        </div>

        <div className="row customer-block ahc">
          <div className="col-lg-6">
            <div className="customer-logo">
              <img
                src={CaseStudy.industryLogo.url}
                alt={CaseStudy.industryLogo.title}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="customer-details">
              <p className="ph-ns-sm">
                {ReactHtmlParser(CaseStudy.industryInfo)}
              </p>
            </div>
          </div>
        </div>
      {CaseStudy.companyDescription == null ? null :(
        <div className="row customer-block ahc border-s">
          <div className="col-lg-12">
          {documentToReactComponents(CaseStudy.companyDescription.json,options)}
          </div>
        </div>
      )}
        

        <div className="row customer-block ahc">
          <div className="col-lg-12">
            <h3>{CaseStudy.situationTitle}</h3>
            {documentToReactComponents(CaseStudy.situationDescription.json,situation)}
            {CaseStudy.videoUrl != null ? (
              <>
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${split[3]}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <small>
                {CaseStudy.videoThumbnail}
              </small>
              </>
            ): null}
            
          </div>
        </div>

        <div className="row customer-block ahc">
          <div className="col-lg-12">
            <h3>{CaseStudy.resultTitle}</h3>
            {documentToReactComponents(CaseStudy.resultDescription.json,situation)}
          </div>
        </div>
      </div>
    </section>
  
    <section className="blog gray">
      <div className="wrap">
        <div className="col-lg-12">
          <div className="content">
            <h2 className="ahc bold">Explore More Case Studies</h2>
          </div>
        </div>

        <div className="row blog-item ahc mh-n-lg">
          {CaseStudy.exploreMoreCaseStudiesCollection.items.map((el,i) => (
            <div className="col-lg-4 col-md-12" key={i}>
            <div className="content">
              <img
                src={el.customer.logo.url}
                alt={el.customer.logo.title}
              />

              <div className="blog-content border-n">
                {el.caseStudyName == null ? (
                  <h3 className="mh-s-sm">
                  <Link href={el.customer.buttonUrl}>
                    <a>{el.customer.title}</a>
                  </Link>
                </h3>
                ): (
                <h3 className="mh-s-sm">
                  <Link href={`/casestudies/${el.slug}`}>
                    <a>{el.customer.title}</a>
                  </Link>
                </h3>
                )}
                <p>
                  {el.customer.description}
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>

    <section className="blue bg-world bg-filter">
      <div className="wrap">
        <div className="col-lg-12">
          <div className="content cta-block">
            <h2 className="mw-960 ahc">
              {CaseStudy.getStartedBanner.title}
            </h2>
            <p>{CaseStudy.getStartedBanner.description}</p>

            <div className="cta-button">
              <Link href={CaseStudy.getStartedBanner.buttonUrl} title="Get a Demo!" className="btn btn-green">
                <a className="btn btn-green">{CaseStudy.getStartedBanner.buttonTitle}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Case

export async function getStaticPaths() {
    const CaseStudy = await fetchContent(CaseStudiesQuery);
    const filter = CaseStudy.caseStudyPages.casesCollection.items.filter(el => el.caseStudyName != null ? true : false)
    const paths = filter.map(post => ({ 
        params: { id: post.slug }
      }))
    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }

  export async function getStaticProps({ params }) {
    const CaseStudy2 = await fetchContent(CaseStudiesQuery);
    const newdata = CaseStudy2.caseStudyPages.casesCollection.items.filter(el => el.slug == params.id ? true : false)
    const CaseStudy = await fetchContents(CaseQuery,newdata.length && newdata[0].sys.id);
    return {
      props: {
        Cases: CaseStudy,
      },
      revalidate: 5, 
    }
  }
  