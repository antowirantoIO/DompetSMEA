import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function AppLayout(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Head>
        <>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="theme-color" content="#000000" />
          <title>Home Page | Dompet SMEA</title>
          <meta name="description" content="Finapp HTML Mobile Template" />
          <meta
            name="keywords"
            content="bootstrap, wallet, banking, fintech mobile template, cordova, phonegap, mobile, html, responsive"
          />
          <link
            rel="icon"
            type="image/png"
            href="img/favicon.png"
            sizes="32x32"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="img/icon/192x192.png"
          />
        </>
      </Head>

      {loading ? (
        <div
          id="loader"
        >
          <img src="img/loading-icon.png" alt="icon" className="loading-icon" />
        </div>
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
}
