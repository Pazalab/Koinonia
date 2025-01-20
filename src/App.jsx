import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import Donation from './pages/Donation'

function App() {
  return (
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/who-we-are" element={<About />} />
            <Route path='/what-we-do' element={<Programs />}/>
            <Route path='/articles' element={<Articles />} />
            <Route path='/get-in-touch' element={<Contact />} />
            <Route path='/donate-today' element={<Donation />} />
    </Routes>
  )
}

export default App
