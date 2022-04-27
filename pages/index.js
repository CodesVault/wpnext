// import Image from 'next/image'
import Link from 'next/link'
import Layout from '../src/components/layouts/layout'
import { POSTS_QUERY } from '../src/quries/posts'
import styles from '../styles/post.module.css'

export default function Home({ posts }) {
    // console.log('posts', posts)
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {posts.nodes.map(post => {
                        const date = new Date(post.date).toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit'})
                        
                        return(
                            <div className={styles.post} key={post.slug}>
                                <h2 className={styles.title}>
                                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <div className={styles.date}>{date}</div>
                                <div dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const url = process.env.APIURL
    const res = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: POSTS_QUERY
        })
    });

    const json = await res.json()
    return{
        props: { posts: json.data.posts }
    }
}
