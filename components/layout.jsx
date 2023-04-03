import Header from './Headers'
import Footer from './Footer'

const Layout = ({ children }) =>  {
  return(
    <>
      <div className='wrapper grid'>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout