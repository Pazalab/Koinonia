import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import Donation from './pages/Donation'
import SingleProgram from './pages/SingleProgram'
import { useEffect } from 'react'

function App() {
  const location = useLocation();

  useEffect(() => {
        window.scrollTo(0, 0);
  }, [location])
  return (
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/who-we-are" element={<About />} />
            <Route path='/what-we-do' element={<Programs />}/>
            <Route path="/what-we-do/:name" element={<SingleProgram/>} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/get-in-touch' element={<Contact />} />
            <Route path='/donate-today' element={<Donation />} />
    </Routes>
  )
}

export default App
