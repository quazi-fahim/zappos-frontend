import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Pages/Home'
import Signin from '../Component/Pages/login/signin'
import Register from '../Component/Pages/login/Register'

const Allroute = () => {
  return (
   <>
   <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/signin" element={<Signin/>}/>
 <Route path='/register' element={<Register/>}/>
   </Routes>

   </>
  )
}

export default Allroute