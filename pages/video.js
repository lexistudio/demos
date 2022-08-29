import Head from 'next/head'
import Link from 'next/link'

export default function News() {
  return (
    <div>
      <Head>
        <title>Video</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Video pages <Link href='/'>Back home</Link>
        </h1>
      </main>
    </div>
  )
}