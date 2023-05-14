import React from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'

//Layuts
import Rootlayout from './layouts/Rootlayout'

//Pages
import Dashboard from './pages/Dashboard'
import Notfound from './pages/Notfound'
import Adduser from './pages/Adduser'
import Accounts from './pages/Accounts'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='accounts' element={<Accounts/>}/>
      <Route path='adduser' element={<Adduser/>}/>

      <Route path='*' element={<Notfound/>}/>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App