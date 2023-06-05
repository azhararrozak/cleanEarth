import Navbar from './Navbar'
import Notify from './Notify'
import Modal from './Modal'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <Notify />
        <Modal />
        {children}        
    </div>
  )
}

export default Layout