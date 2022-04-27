export const POST_QUERY = `
    query POST {
        post(id: ID!) {
        slug
        title
        content
        date
        }
    }
`
