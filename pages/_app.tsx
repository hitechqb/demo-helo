import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>

        <Script src="https://h5.zdn.vn/jssdk/1.7.18/lib.js"></Script>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
