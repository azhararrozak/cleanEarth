import Navbar from './Navbar'
import Notify from './Notify'
import Modal from './Modal'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='d-flex flex-column min-vh-100'>
        <Navbar />
        <Notify />
        <Modal />
        {children}   
        <Footer />     
    </div>
  )
}

export default Layout