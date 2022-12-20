import Head from 'next/head'
import Link from 'next/link'

export default function News() {
  return (
    <div>
      <Head>
        <title>Video</title>
      </Head>

      <main>
        <h1 className='title'>
          Video pages
          <span>
            <Link href='/'>Back home</Link>
          </span>
        </h1>
      </main>
    </div>
  )
}