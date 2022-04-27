import Layout from '../../src/components/layouts/layout';
import { POST_QUERY } from '../../src/quries/post';
import { POSTS_QUERY } from '../../src/quries/posts';
import wpFetch from '../../src/utils/wpFetch';

const Post = ({ post, params }) => {
    return (
        <Layout>
            {/* <div className="wp-content">
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div> */}
        </Layout>
    );
}

export default Post;

export async function getStaticPaths() {
    const url = process.env.APIURL
    const json = await wpFetch(url, { 
        body: JSON.stringify({ query: POSTS_QUERY })
    })

    const paths = json.data.posts.nodes.map(post => ({
        params: { slug: post.slug }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    console.log('params', params)
    const url = process.env.APIURL
    const json = await wpFetch(url, {
        body: JSON.stringify({
            query: POST_QUERY,
            variables: {
                id: params.slug,
                idType: 'SLUG'
            }
        })
    })

    return {
        props: { post: json }
    }
}
