import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return(
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&family=Exo:wght@400;600&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}