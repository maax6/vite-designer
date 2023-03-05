import { Outlet } from 'react-router-dom'
import { Nav } from '../Components/Nav/index.jsx'
// import Footer from '../components/Footer/Footer'

export function LayoutDefault() {
      <>
         <Nav />
         <Outlet />
         {/* <Footer /> */}
      </>
}
