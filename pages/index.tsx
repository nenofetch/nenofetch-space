import Head from 'next/head'
import React from 'react'



export default function Home() {

  return (
    <div>
      <Head>
        <title>Nenothing Space</title>
        <meta name="description" content="Just some personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='font-bold text-4xl text-center hover:underline hover:decoration-indigo-500'>Coming Soon</h1>
    </div>
  )
}
