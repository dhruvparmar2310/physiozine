import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="assets/img/favicon.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://apis.google.com/js/api.js"></script>
      </body>
    </Html>
  );
}
