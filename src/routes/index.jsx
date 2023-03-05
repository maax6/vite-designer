import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import LayoutDefault from '../layouts/Default'

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LayoutDefault />}>
               <Route exact path="/" element={<Home />} />
               <Route path="/Collection" element={<Collection />} />
               <Route path="/About" element={<About />} />
               <Route path="/Contact" element={<Contact />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default Router
