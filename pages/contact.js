import styles from '../styles/Contact.module.css';
import React, { useState } from 'react';
import Head from 'next/head';

const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [msg, setmsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {name, email, msg};

    fetch('api/postcontact', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(_data => {
        alert("Thanks for contacting us");
        setname('')
        setmsg('')
        setemail('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'msg') {
      setmsg(e.target.value)
    }
  }



  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Contact - Painkra</title>
        <meta name="description" content="Welcome to our blog. We always believe in providing quality content on our user-friendly website, which is also easier to read." />
        <meta name="keywords" content="Painkra, Android Device, tab, Ipad, iphone, social media, AI, gaming leptop, pc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/painkra.svg" />
      </Head>
      <div className={styles.contactForm}>
        <h2 className={styles.contactFormTitle}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.contactFormField}>
            <label className={styles.contactFormLabel} htmlFor="name">Name:</label>
            <input type="text" id="name" className={styles.contactFormInput} value={name}name="name"onChange={handleChange} required/>
          </div>
          <div className={styles.contactFormField}>
            <label className={styles.contactFormLabel} htmlFor="email">Email:</label>
            <input type="email" id="email" className={styles.contactFormInput} value={email} name="email" onChange={handleChange} required />
          </div>
          <div className={styles.contactFormField}>
            <label className={styles.contactFormLabel} htmlFor="msg">Message:</label>
            <textarea id="msg" className={styles.contactFormTextarea}  value={msg} onChange={handleChange} name='msg' ></textarea>
          </div>
          <div>
          <button type="submit" className={styles.contactFormButton}>Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
}


export default Contact;
