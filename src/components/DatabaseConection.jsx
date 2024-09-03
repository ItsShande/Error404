import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIKey = "b5e1cd8f5f604e27c863e45c9613c9e4";

const DataButton = () => {
    const [ubicacion, setUbicacion] = useState("");
    const [latitud, setLatitud] = useState("-31.42");
    const [longitud, setLongitud] = useState("-64.13");
    const [dia, setDia] = useState("");
    const [hora, setHora] = useState("");
    const [data, setData] = useState([]);

    let AirPolutionLink = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitud}&lon=${longitud}&appid=${APIKey}`;
    let ApiLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&exclude=${hora},${dia}&appid=${APIKey}`;

    const obtenerDatos = async () => {
        try {
            const response = await axios.get(AirPolutionLink);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error al obtener los datos: ", error);
        }
    };

    return (
        <div>
            <button onClick={obtenerDatos}>Buscar</button>
        </div>
    );
};

export default DataButton;
