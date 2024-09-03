import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import DataButton from './components/DatabaseConection.jsx'
import WeatherCard from './components/WeatherCard.jsx'

function App() {
    return (
        <>
            <Navbar />
            <div className='main'>
                <div className='inputsContainer'>
                    <input className="inputCiudad inputClass" type="text" placeholder='Ciudad' />
                    <input className="inputEstado inputClass" type="text" placeholder='Estado' />
                    <input className="inputPais inputClass" type="text" placeholder='País' />
                </div>
                <DataButton />
                <div className='dataContainer'>
                    <WeatherCard/>
                    <WeatherCard/>
                    <WeatherCard/>
                    <WeatherCard/>
                    <WeatherCard/>
                    <WeatherCard/>
                </div>
            </div>
        </>
    )
}

export default App
