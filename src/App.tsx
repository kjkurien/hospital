import './App.css'
import Footer from './components/Layout/FixedBottomNavigation'
import Home from './components/Home'
import Rating from './components/Rating'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = 'Health';
  }, []);

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rating' element={<Rating />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer/>
    </>
  )
}


export default App
