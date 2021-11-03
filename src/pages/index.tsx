import Head from 'next/head'
import type { NextPage } from 'next'
import { TipCalculator } from 'src/features/tip-calulator'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Splitter - Tip Calculator</title>
      </Head>
      <TipCalculator />
    </>
  )
}

export default Home
