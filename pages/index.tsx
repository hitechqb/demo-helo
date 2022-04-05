import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Script from "next/script";

// @ts-ignore
const zpaJS: any = window.ZaloPay;
const Home: NextPage = () => {
  // useEffect(()=> {
  //     window.location.href = "snssdk3817://webview?biz_id=AWUAABNGzPCzPUiltceOAgo6EAcD&hide_nav_bar=1&url=https://docs.zalopay.vn/";
  // });

    function handleReKYC() {
        console.log(zpaJS.appInfo);
        zpaJS.call("launchDeeplink", { url: "zalopay://launch/f/user-level-migration" }, (data: any) => {
            console.log("data callback: ", JSON.stringify(data, null, 2));
        });

    }

  async function handleOpenDeeplink() {
      window.open("snssdk3817://webview?biz_id=AWUAABNGzPCzPUiltceOAgo6EAcD&hide_nav_bar=1&url=https://docs.zalopay.vn/", "_blank")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Hello</title>
        <meta name="description" content="Generated by create next app" />
          <script src="//cdn.jsdelivr.net/npm/eruda"></script>
          <script>eruda.init();</script>
        <link rel="icon" href="/favicon.ico" />
          <script src={"/js/zalopay.js"}/>
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Open App</h2>
            <button onClick={handleOpenDeeplink}>Back To Helo App</button>
          </div>
            <div className={styles.card}>
                <p>KYC</p>
                <button onClick={handleReKYC}>ReKYC</button>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Home
