import React from 'react'
import Head from 'next/head';
import styles from '../styles/Blog.module.css';
import { createClient } from 'next-sanity'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'

export const runttime = 'experimemtal-edge';

const Mobile = ({ posts, authorName }) => {

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false

  });

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }
  return (

    <div className={styles.blogContainer}>
      <Head>
        <title>Tech - Painkra</title>
        <meta name="For Anyone passionate about tech, gadgets, social media and AI platforms, then this place is for you." />
        <meta name="keywords" content="Painkra, Android Device, tab, Ipad, iphone, social media, AI, gaming leptop, pc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/painkra.svg" />
      </Head>
      <>
      {posts.map((post) => (<>
        <div className={styles.blogPost}>

          <Link key={post.slug.current} href={"/techblog/" + post.slug.current}>
            <h2 className={styles.blogPostTitle}>{post.title}</h2>
            <p className={styles.blogPostText}>
              {post.metadesc}
            </p>
            <div className={styles.blogPostMeta}>
              <small>Published on: {post.publishedAt}</small>
              <p>Author: {authorName}</p>
            </div>
            <button className={styles.blogPostButton}>Read More</button>
          </Link>
        </div>
      </>
      ))}
      </>
    </div>

  )
}

export default Mobile

export async function getServerSideProps({ res }) {
  try {
    res.setHeader("Cache-Control", "no-store, must-revalidate"); 
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
      useCdn: false
    });

    const query = `*[_type == "techblog" &&  "Tech" in categories[]->title]{slug, metadesc, title, publishedAt, mainImage} `;
    const posts = await client.fetch(query);

    const authorquery = `*[_type == "author"]{name}[0]`;
    const author = await client.fetch(authorquery);

    return {
      props: {
        posts, authorName: author.name,
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        posts: [],
        authorName: "",
      },
    };
  }
}
