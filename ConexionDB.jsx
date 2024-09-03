import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIKey = "b5e1cd8f5f604e27c863e45c9613c9e4";

const ConexionDB = () => {
    const [ubicacion, setUbicacion] = useState("");
    const [latitud, setLatitud] = useState("-31.42");
    const [longitud, setLongitud] = useState("-64.13");
    const [dia, setDia] = useState("");
    const [hora, setHora] = useState("");
    const [dataClima, setDataClima] = useState([]);
    const [dataAire, setDataAire] = useState([]);

    let AirPolutionLink = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitud}&lon=${longitud}&appid=${APIKey}&units=metric`;
    let ApiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${APIKey}&units=metric`;

    const obtenerCalidadAire = async () => {
        try {
            const response = await axios.get(AirPolutionLink);
            setDataAire(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };
    const obtenerDatosClima = async () => {
        try {
            const response = await axios.get(ApiLink);
            setDataClima(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    return (
        <div>
            <button onClick={obtenerCalidadAire}>Aire</button>
            <button onClick={obtenerDatosClima}>Clima</button>
        </div>
    );
};

export default ConexionDB;
