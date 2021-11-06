import Head from 'next/head'
import type { NextPage } from 'next'
import { TipCalculator } from 'src/features/tip-calculator'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Splitter - Tip Calculator</title>
        <meta
          name="description"
          content="Easily calculate the tip and payment share when out with a group of friends."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Easily calculate the tip and payment share when out with a group of friends.."
        />
        <meta name="twitter:title" content="Splitter - Tip Calculator" />
        <meta name="twitter:site" content="@alexkmarshall1" />
        <meta
          name="twitter:image"
          content="http://tip-calculator-navy.vercel.app/twitter-card.png"
        />
        <meta name="twitter:creator" content="@alexkmarshall1" />
      </Head>
      <TipCalculator />
    </>
  )
}

export default Home
