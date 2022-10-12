import React from 'react'
import Head from 'next/head'

const NextSEO = ({MetaTags,QuestionAnswer,path}) => {
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
    <>
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
      </>
  )
}

export default NextSEO