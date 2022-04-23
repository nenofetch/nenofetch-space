import Head from 'next/head'
import React from 'react'

export default function Home() {
  React.useEffect(() => {
    import("lottie-interactive/dist/lottie-interactive.js")
  })
  return (
    <div>
      <Head>
        <title>Nenothing Space</title>
        <meta name="description" content="Just some personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <lottie-interactive
        path="/animations/coming_soon.json"
        autoplay
        loop
      />
    </div>
  )
}
