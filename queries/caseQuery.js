  export const CaseQuery  = `query caseStudiesEntryQuery($id:String!) {
    caseStudies(id: $id) {
      customer{
          title
          description
          logo{
            url
            title
          }
          buttonName
          buttonUrl
        }
        caseStudyName
        industryInfo
        industryLogo{
          url
          title
        }
        companyDescription{
          json
        }
        situationTitle
        situationDescription{
          json
        }
        videoUrl
        videoThumbnail
        resultTitle
        resultDescription{
          json
        }
        getStartedBanner{
            title
            description
            buttonTitle
            buttonUrl
          }
          exploreMoreCaseStudiesCollection {
            items {
              title
              customer {
                title
                description
                logo {
                  url
                  title
                }
                buttonName
                buttonUrl
              }
              caseStudyName
              sys {
                id
              }
              slug
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