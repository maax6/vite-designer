import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Error } from '../Components/Error'
import { Home } from '/src/pages/Home/index'
import{ LayoutDefault } from '../layouts/Default'

export function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LayoutDefault />}>
               <Route exact path="/" element={<Home />} />
               <Route path="/Home" element={<Home />} />
               <Route path="/Collection" element={<Error />} />
               <Route path="/About" element={<Error />} />
               <Route path="/Contact" element={<Error />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
