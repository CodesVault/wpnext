export const POST_QUERY = `
    query SINGLEPOST($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
            slug
            title
            content
            date
            featuredImage {
                node {
                    sourceUrl
                    altText
                }
            }
        }
    }
`
