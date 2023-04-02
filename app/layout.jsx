import Header from '@/components/Headers'
import Footer from './Footer'

const Layout = ({ children }) =>  {
  return(
    <>
      <div className='wrapper'>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout