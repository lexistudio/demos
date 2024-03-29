import '../styles/normolize.css'
import '../styles/globals.css'
import '../styles/column.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
