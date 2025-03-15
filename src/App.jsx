import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import PostCreate from './pages/PostCreate'
import ErrorPage from './pages/ErrorPage'

const App = () => {


  return (
   <BrowserRouter>

   <Routes>

    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="create" element={<PostCreate />} />
    <Route path='*' element={<ErrorPage />}/>
    </Route>

   </Routes>

   </BrowserRouter>
  )
}

export default App
