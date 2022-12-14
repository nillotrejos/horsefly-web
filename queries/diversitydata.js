export const DiversityDataQuery = `query diversityDataPageEntryQuery {
    diversityDataPage(id: "7jJjZ76N6vzJHxuj83F8uu") {
      diversityHeader{
        title
        description
        buttonName
        buttonUrl
        image{
          url
          title
        }
      }
      bannerInfo{
        json
      }
      increaseDiversityData{
        title
        description
      }
      keyInnovationHeading
      keyInnovationDescription
      keyInnovationItemsCollection{
        items{
          title
          subTitle
          description
          listNumber
        }
      }
      horseflysDiversitySection{
        title
        description
        image{
          url
          title
        }
      }
      ethnicityDiversitySection{
        title
        description
        steamlineItemsCollection{
          items{
            title
            description
          }
        }
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