import Head from 'next/head'
import { LandingPage } from '../components/LandingPage/Landing.component'
import { MenuSection } from '../components/Section/MenuSection.component'
import { Global } from '../styles/global.style'

export default function Home() {
  return (
    <div>
      <Head>
        <title>OKIDO sushi</title>
        <meta name="description" content="Best sushi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global />
      <LandingPage />
      <MenuSection />
      

    </div>
  )
}
