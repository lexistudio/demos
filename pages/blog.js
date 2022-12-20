import Head from 'next/head'
import Link from 'next/link'

export default function News() {
  return (
    <div>
      <Head>
        <title>blog</title>
      </Head>

      <main>
        <h1 className='title'>
          blogs
        </h1>
      </main>
    </div>
  )
}