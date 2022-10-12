export const WorkForcePageQuery = `query workForcePlaningDataPageEntryQuery {
    workForcePlaningDataPage(id: "7hOi1Cl3Wn8FTlOWykxNWL") {
           title
           topBanner{
            title
            subTitle
            description
            image{
              url
              title
            }
          }
          marketBanner{
            json
          }
          topReasons{
            title
            description
          buttonName
          buttonUrl
          reasonsCollection{
            items{
              title
              description
              reasonNumber
            }
          }
              
          }
     
      laborMarketDataAnalytics{
        title
        description
        talentDataRefCollection{
          items{
            title
            description
            logo{
              url
              title
            }
            
          }
        }
      }
      blogsCollection{
        items{
          title
          subTitle
          listItems
          image{
            url
            title
          }
          imageDirection
        }
      }
      getStarted{
        title
        description
        buttonTitle
        buttonUrl
      }
      metaTags{
        title
        metaTagsCollection{
          items{
            name
            content
            mataTagFor
          }
        }
      }
      faqSchemaCollection{
        items{
          question
          answer
        }
      }
    }
  }`