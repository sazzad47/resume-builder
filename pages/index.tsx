import Head from 'next/head'
import HomeUI from "../components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Craft Your Professional Resume with Ease" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main>
         <HomeUI/>
       </main>
    </>
  )
}
