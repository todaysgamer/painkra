import Head from 'next/head'
import styles from '../../styles/BlogPost.module.css';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";
import React from 'react'
const BlockContent = require('@sanity/block-content-to-react')



const Post = ({ post, authorName }) => {


  return (

    <div>

      <Head>
        <title>{`${post?.title} - Painkra`}</title>
        <meta name="description" content={post?.metadesc} />
        <meta name="keywords" content="Painkra, Android Device, tab, Ipad, iphone, social media, AI, gaming leptop, pc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/painkra.svg" />
      </Head>

      {post?.mainImage ? <Image
        src={builder.image(post.mainImage).width(300).height(300).url()}
        width={600}
        height={300}
        alt={post?.mainImage?.alt}
      /> : null}

      <div className={styles.container}>

        <article className={styles.post}>
          <h1 className={styles.title}>{post?.title}</h1>
          <p className={styles.meta}>
            {post?.lastModified} - By {authorName}
          </p>
          <div className={styles.content}>  <BlockContent
            blocks={post?.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          />
          </div>
        </article>
      </div>

    </div>


  )
}

export default Post

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false
  });
  const query = `*[_type == "techblog" && slug.current == '${slug}'][0]{slug, Image, body, title, lastModified, metadesc}`;
  const post = await client.fetch(query);
  const authorquery = `*[_type == "author"]{name}[0]`;
  const author = await client.fetch(authorquery);
  context.res.setHeader("Cache-Control", "no-store, must-revalidate");

  return {
    props: {
      post, authorName: author.name,
    }
  }
}