export const POSTS_QUERY = `
    query AllPosts {
        posts {
            nodes {
                slug
                title
                excerpt
                date
            }
        }
    }
`
