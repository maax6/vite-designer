import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import{ LayoutDefault } from '../layouts/Default'

export function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LayoutDefault />}>
               <Route exact path="/" element={<Home />} />
               <Route path="/Collection" element={<Home />} />
               <Route path="/About" element={<Home />} />
               <Route path="/Contact" element={<Home />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
