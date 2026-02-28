import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/movieCard'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/favourites' element={<Favourites></Favourites>}></Route>

        </Routes>
      </main>
    </div>
  )
}

// component
function Text({display}){
  return <div>
    <p>{display}</p>
  </div>
}

export default App
