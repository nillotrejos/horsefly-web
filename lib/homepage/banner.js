import fetchAPI from "../../pages/api/api";
export async function getPosts() {
  const data = await fetchAPI(
    `query AllPosts {
          posts(first: 20) {
            edges {
              node {
                title
                featuredImage{
                    node{
                      sourceUrl
                    }
                  }
                excerpt
              }
            }
          }
        }
      `,
    {
      variables: {},
    }
  );
  return data?.posts?.edges;
}
