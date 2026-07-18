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
import DashBoard from './users/DashBoard'

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [userId, setUserId] = useState<string | null>(null);

  const [userRole, setUserRole] = useState<string | null>(null);

  const handleLogin = (userName: string, role: string) => {
    setIsLoggedIn(true);
    setUserId(userName);
    setUserRole(role);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserRole(null);
    // window.location.href = "/";
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header 
            isLoggedIn={isLoggedIn}
            userId={userId}
            userRole={userRole}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/signIn" element={<SignIn onLogin={handleLogin} />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
