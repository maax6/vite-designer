import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from 'src/Pages/Home/index.jsx'
import { Error } from 'src/Components/Error'
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
