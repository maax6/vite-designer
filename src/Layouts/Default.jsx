import { Outlet } from 'react-router-dom'
import { Nav } from '../Components/Nav'
import { Footer } from '../Components/Footer'
// import Footer from '../components/Footer/Footer'

export function LayoutDefault() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
