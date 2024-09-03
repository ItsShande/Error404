import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
    return (
        <>
            <Navbar />
            <div className='dataContainer'>
                <div className='weatherContainer'>
                </div>
            </div>
        </>
    )
}

export default App
