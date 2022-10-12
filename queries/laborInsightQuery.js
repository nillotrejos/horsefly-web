export const LaborInsightsQuery = `query laborInsightsEntryQuery {
    laborInsights(id: "FjAEycjUnIYEfOhN4Duuy") {
      topBanner{
        title
        description
        image{
          url
          title
        }
      }
      labourMarketInsights{
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
      banner{
        json
      }
        labourInsights{
        title
        description
        steamlineItemsCollection{
          items{
            title
            description
          }
        }
      }
      whoNeedsLaborInsights{
        title
        description
        laborMarketAnalyticsAndItemsCollection{
          items{
            title
            image{
              title
              url
            }
          }
        }
      }
      usesOfLaborMarketData{
        title
        laborMarketDataCollection{
          items{
            title
            description
            image{
              url
              title
            }
          }
        }
      }
      findLaborMarketData{
        title
        description
      }
      contactHorseflyBanner{
        title
        buttonName
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
        schemaQuestionAnswerCollection{
          items{
            question
            answer
          }
        }
    }
  }`