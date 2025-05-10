import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Create_Product from './Pages/Create_Product'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Create_Product" element={<Create_Product/>} />
      </Routes>
    </Router>
  )
}

export default App
