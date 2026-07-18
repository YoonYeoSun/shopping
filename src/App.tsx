import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './layouts/Home'
import ProductList from './products/ProductList'
import ProductInfo from './products/ProductInfo'
import AddProduct from './products/AddProduct'
import SignIn from './users/SignIn'
import { useState } from 'react'
import SignUp from './users/SignUp'

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [userId, setUserId] = useState<string | null>(null);

  const handleLogin = (userName: string) => {
    setIsLoggedIn(true);
    setUserId(userName);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header 
            isLoggedIn={isLoggedIn}
            userId={userId}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/signIn" element={<SignIn onLogin={handleLogin} />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
