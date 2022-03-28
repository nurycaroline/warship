import Head from 'next/head'
import HomePage from '../src/container/HomePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Warship</title>
        <meta name="description" content="Warships - Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  )
}
