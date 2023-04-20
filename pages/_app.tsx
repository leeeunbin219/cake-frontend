import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Link } from "react-router-dom";

const App = ({ Component, pageProps }: AppProps) => {
    return (
    <>
    <Head>
        <title>너꾸케</title>
        {/* 카카오 초기화  */}
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
