import '../styles/normolize.css'
import '../styles/globals.css'
import Headers from '../components/Headers'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [nav, setNav] = useState([])

  useEffect(() => {
    fetch('/api/nav').then(async resp => setNav(await resp.json()))
  }, [])

  return (
    <>
      <Headers />
      <div className='container'>
        <Component {...pageProps} />

        {nav.map(({ name, href }, index) => (
          <p key={index}>
            <Link href={href}>{name}</Link>
          </p>
        ))}
      </div>
    </>
  )
}

export default MyApp
