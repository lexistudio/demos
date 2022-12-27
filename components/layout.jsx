import TopTools from './TopTools'
import Header from './Headers'

const Layout = ({ children }) =>  {
  return(
    <>
      <TopTools />
      <Header />
      {children}
    </>
  )
}

export default Layout