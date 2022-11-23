import Head from 'next/head'
import Header from '../components/Header'
import React from 'react'



export default function Home() {

  return (
    <div>
      <Head>
        <title>Nenothing Space</title>
        <meta name="description" content="Just some personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
    </div>
  )
}
