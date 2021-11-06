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
      </Head>
      <TipCalculator />
    </>
  )
}

export default Home
