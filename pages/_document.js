import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <script defer src="/js/jquery-3.5.1.min.js"></script>
        <script defer src="/js/main.js"></script>
        <script defer src="/js/lite-yt-embed.js"></script>
        <script defer src="/js/splide.min.js"></script>

        {/* Favicons */}
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/favicon/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/assets/favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/favicon/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="196x196" href="/assets/favicon/favicon-196x196.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/assets/favicon/favicon-128.png" />
        <meta name="application-name" content="Horsefly | Talent Market Analytics"/>
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/assets/favicon/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/assets/favicon/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/assets/favicon/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/assets/favicon/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/assets/favicon/mstile-310x310.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
