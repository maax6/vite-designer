import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'
// import Footer from '../components/Footer/Footer'

export default function LayoutDefault() {
   return (
      <>
         <Nav />
         <Outlet />
         {/* <Footer /> */}
      </>
   )
}
