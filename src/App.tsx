import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

const [isSearchBar, setIsSearchBar] = useState(false);


    return (
        <div className='font-sans'>
            <NavBar />
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default App
