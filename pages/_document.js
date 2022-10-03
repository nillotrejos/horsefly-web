import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
          rel="preload stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          as="style"
        /> */}
        <script defer src="/js/jquery-3.5.1.min.js"></script>
        <script defer src="/js/main.js"></script>
        <script defer src="/js/lite-yt-embed.js"></script>
        <script defer src="/js/splide.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
