import '../styles/normolize.css'
import '../styles/globals.css'
import Headers from '../components/Headers'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headers />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
