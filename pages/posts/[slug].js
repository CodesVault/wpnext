import Image from 'next/image'
import Layout from '../../src/components/layouts/layout';
import { POST_QUERY } from '../../src/quries/post';
import { POSTS_QUERY } from '../../src/quries/posts';
import wpFetch from '../../src/utils/wpFetch';
import styles from '../../styles/singlepost.module.css'

const Post = ({post}) => {
    // console.log(post)
    let featuredImage;
    if (post.featuredImage) {
        featuredImage = <Image
            src={post.featuredImage.node?.sourceUrl}
            alt={post.featuredImage.node?.altText}
            width="800"
            height="400" />
    }
    return (
        <Layout title={post.title}>
            <div className={styles.wrapper}>
                {featuredImage}
                <h1 className={styles.title}>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </Layout>
    );
}
export default Post;

// set context params
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

export async function getStaticProps(context) {
    const url = process.env.APIURL
    const json = await wpFetch(url, {
        body: JSON.stringify({
            query: POST_QUERY,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    return {
        props: { post: json?.data?.post }
    }
}
