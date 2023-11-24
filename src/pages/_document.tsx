import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" />
      </Head>
      <body className="min-h-[100vh] w-screen flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}