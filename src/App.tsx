import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import Header from './components/Header'

function App() {

    return (
        <div className='flex flex-col font-sans'>
            <NavBar />
            <Header />
        </div>
    )
}

export default App
