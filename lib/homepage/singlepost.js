import fetchAPI from "../../pages/api";
export async function getSinglePost(id) {
  const data = await fetchAPI(
    `
    query getSinglePost($id:ID!){
        post(id:$id){           
          title
          excerpt
          content
          slug
          id
        }
      }
    `,
    { id }
  );

  return data?.post;
}
