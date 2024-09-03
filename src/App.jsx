import React from 'react'
import './App.css'
import Navbar from './Navbar'
import InicioSesion from './InicioSesion'

function App() {
    return (
        <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
        <Navbar/>
        <InicioSesion/>
        </>
    )
}

export default App
