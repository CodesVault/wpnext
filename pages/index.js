import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/post.module.css'

export default function Home({ posts }) {
    // console.log('posts', posts)
    return (
        <div className={styles.container}>
            <Head>
                <title>WP NextJS</title>
                <meta name="description" content="Template for creating NextJS app for Headless WordPress" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

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
    )
}

export async function getStaticProps() {
    const url = process.env.APIURL
    const res = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
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
        })
    });

    const json = await res.json()
    return{
        props: { posts: json.data.posts }
    }
}
