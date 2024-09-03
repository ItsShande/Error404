import { useState } from "react"
function InicioSesion(){
    const [Nombre,setNombre] = useState ('')
    const [Contraseña,setContraseña] = useState ('')
    const [Ubicacion,setUbicacion] = useState ('')

    const agregarUsuario =()=>{
        console.log(`${Nombre} ${Contraseña}${Ubicacion}`);
    }
    const updateNombre =(evento) =>{
        setNombre(evento.target.value);
    }
    const updateContraseña =(evento) =>{
        setContraseña(evento.target.value);
    }
    const updateUbicacion =(evento) =>{
        setUbicacion(evento.target.value);
    }
    return(
        <>
             <div>
      <form action="nombre">
        <i className="fa-solid fa-user"></i>
        <label id="nombre" htmlFor="name">Nombre</label>
        <input onChange={updateNombre} type="text" name="Nombre" />
      </form>
      <form action="contraseña">
        <i className="fa-solid fa-key"></i>
        <label id="contra" htmlFor="contra">Contraseña</label>
        <input onChange={updateContraseña} type="password" name="Contraseña" />
      </form>
      <form action="ciudad">
        <i className="fa-solid fa-location-dot"></i>
        <label id="ubi" htmlFor="ubi">Ubicación</label>
        <input onChange={updateUbicacion} type="text" name="Ubicacion" />
      </form>
      <button onClick={agregarUsuario}>Siguiente</button>
    </div>
  </>
    )
}

export default InicioSesion