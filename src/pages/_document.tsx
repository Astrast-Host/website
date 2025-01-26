import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Astrast Host offers free & premium hosting services with a focus on security, uptime, and affordability. Join us for the best hosting experience." />
        <meta name="keywords" content="web hosting, game server hosting, customizable hosting, affordable hosting, secure hosting, free hosting" />
        <meta name="author" content="Astrast Host"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Astrast Host: Free & Finest Host" />
        <meta property="og:description" content="Astrast Host offers free & premium hosting services with a focus on security, uptime, and affordability. Join us today!" />
        <meta property="og:image" content="https://astrast.com/images/astrast_1.png" />
        <meta property="og:url" content="https://astrast.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Astrast Host: Free & Finest Host" />
        <meta name="twitter:description" content="Astrast Host offers free & premium hosting services with a focus on security, uptime, and affordability. Join us today!" />
        <meta name="twitter:image" content="https://astrast.com/images/astrast_1.png" />
        <link rel="icon" href="/images/astrast_1.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
