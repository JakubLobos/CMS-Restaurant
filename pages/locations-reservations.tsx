import Head from 'next/head'
import { LandingPage } from '../components/LandingPage/Landing.component'
import { LocationSection } from '../components/Section/LocationSection.component'
import { Global } from '../styles/global.style'

export default function LocationsAndReservations() {
  return (
    <>
      <Head>
        <title>OKIDO sushi | reservations</title>
        <meta name="description" content="Best sushi!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global />
          <LandingPage />
          <LocationSection />
    </>
  )
}