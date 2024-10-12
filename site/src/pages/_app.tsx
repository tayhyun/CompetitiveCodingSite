import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Component {...pageProps} />
    <Head>
      <title>SMC Coding Club</title>
      <link rel='icon' href='/favicon.ico'/>
      <meta name ='description' content = "Website that SMC Coding Club will use to solve problems."/>
    </Head>
  
  </>
  )
}
