import Head from 'next/head'
import Image from 'next/image'
import Meteo from './meteo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Shower.png" />
      </Head>
      <div>
        <Meteo/>
      </div>
    </div>
  )
}
