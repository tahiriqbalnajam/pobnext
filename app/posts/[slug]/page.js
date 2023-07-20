import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api'

export default function Post({ params }) {
    return  <>
            <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
            </>
}

export const getStaticProps = async ({
    params,
    preview = false,
    previewData
  }) => {
    const data = await getPostAndMorePosts(params?.slug, preview, previewData)
  
    return {
      props: {
        preview,
        post: data.post,
        posts: data.posts
      },
      revalidate: 10
    }
  }
  
  export const getStaticPaths = async () => {
    const allPosts = await getAllPostsWithSlug()
  
    return {
      paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
      fallback: true
    }
  }

