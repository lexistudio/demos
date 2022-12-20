import Header from './Headers'

const Layout = ({ children }) =>  {
  return(
    <>
      <Header />
      <div className='container'>
        {children}
      </div>
    </>
  )
}

export default Layout