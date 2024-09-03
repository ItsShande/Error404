import React, { useState, useEffect } from 'react';
import axios from 'axios';
const APIKey = "42ac4246c5640f479a5b83cb316eff1b";

const ConexionDB = () => {
    const [ubicacion, setUbicacion] = useState("");
    const [latitud, setLatitud] = useState("");
    const [longitud, setLongitud] = useState("");
    const [dia, setDia] = useState();
    const [hora, setHora] = useState();
    const [data, setData] = useState([]);

    let AirPolutionLink = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitud}&lon=${longitud}&appid=${APIKey}`;
    let ApiLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&exclude=${hora},${dia}&appid=${APIKey}`;


    const obtenerDatos = (latitud, longitud) => {
        axios.get(AirPolutionLink)
            .then(response => setData(response.data))
        console.log(data);
    };
    const adminData = (latitud, longitud) => {
        setLatitud("-31.42");
        setLongitud("-64.13");
        obtenerDatos(latitud, longitud);
    };
    adminData(latitud, longitud);
    return;
};

export default ConexionDB;
