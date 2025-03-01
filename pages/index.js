import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {

  return (
    <div>
      <Head>
        <title>Painkra</title>
        <meta name="description" content="This website is for people who are wanted to explore more about the tech world, such as mobile, tab, laptop, gaming, AI and social media platforms" />
        <meta name="keywords" content="Painkra, Android Device, tab, Ipad, iphone, social media, AI, gaming leptop, pc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/painkra.svg" />
      </Head>
      <Hero />
      <p class="secation"></p>
      <section className={styles.blog}>
        <div className={styles.blogContainer}>
          <div className={styles.blogPost}>
          <Image
              src="/mobile.jpg"
              width={500}
              height={500}
              alt="Image of Mobile Category"
              className={styles.blogImage}
            />
            <div className={styles.blogContent}>
              <h2 className={styles.blogTitle}>Mobile</h2>
              <p className={styles.blogText}>Anyone who wishes to learn more about mobile, tab, android and iOS devices, then this is a spot for you.</p>
              <Link href="/mobile" className={styles.blogButton}>Read More</Link>
            </div>
          </div>
          <div className={styles.blogPost}>
            <Image
              src="/computer.jpg"
              width={500}
              height={500}
              alt="Image of Computer Category"
              className={styles.blogImage}
            />
            
            <div className={styles.blogContent}>
              <h2 className={styles.blogTitle}>Computer</h2>
              <p className={styles.blogText}>Having incredible knowledge about laptops and pc is great because sometimes it helps us with problems that we face in real life.</p>
              <Link href="/computer" className={styles.blogButton}>Read More</Link>
            </div>
          </div>
          <div className={styles.blogPost}>
          <Image
              src="/tech.jpg"
              width={500}
              height={500}
              alt="Image of Tech Category"
              className={styles.blogImage}
            />
            <div className={styles.blogContent}>
              <h2 className={styles.blogTitle}>Tech</h2>
              <p className={styles.blogText}>
                For Anyone passionate about tech, gadgets, social media and AI platforms, then this place is for you.</p>
              <Link href="/tech" className={styles.blogButton}>Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutUs}>
        <div className={styles.aboutUsContainer}>
          <div className={styles.aboutUsContent}>
            <h2 className={styles.aboutUsTitle}>About Us</h2>
            <p className={styles.aboutUsText}>
            Hey there, I'm Deepak Painkra. I was an Electronics & Telecommunications engineering student. Who is passionate about technology. On this website, you'll see mobile, computer and tech-related articles. Also, check out some articles on this site.
            </p>
            <Link href="/mobile" className={styles.aboutUsButton}>Explore Blogs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
