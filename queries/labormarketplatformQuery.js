export const LaborMarketPlatformQuery = `query laborMarketPlatformEntryQuery {
    laborMarketPlatform(id: "61VU10gUZufOxMjk9sQ9ND") {
        carouselTitle
        carouselImageCollection{
          items{
            title
            url
          }
        }
        infoBanner{
          json
        }
        topBanner{
          title
          description
          image{
            url
            title
          }
        }
        blogTitle
    blogaCollection{
      items{
        title
        listItems
        image{
          url
          title
        }
        imageDirection
      }
    }
      banner{
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
      schemaQuestionAnswerCollection{
        items{
          question
           answer
        }
      }
    }
  }`