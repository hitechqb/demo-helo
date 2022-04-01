import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect} from "react";

const Home: NextPage = () => {
  useEffect(()=> {
      window.location.href = "snssdk3817://webview?biz_id=AWUAABNGzPCzPUiltceOAgo6EAcD&hide_nav_bar=1&url=https://docs.zalopay.vn/";
  });

  async function handleOpenDeeplink() {
      window.open("snssdk3817://webview?biz_id=AWUAABNGzPCzPUiltceOAgo6EAcD&hide_nav_bar=1&url=https://docs.zalopay.vn/", "_blank")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Hello</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Open App</h2>
            <button onClick={handleOpenDeeplink}>Back To Helo App</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
