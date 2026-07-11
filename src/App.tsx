import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './layouts/Home'
import ProductList from './products/ProductList'
import ProductInfo from './products/ProductInfo'
import AddProduct from './products/AddProduct'

function App() {
  
  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/products/add" element={<AddProduct />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
