
function InicioSesion(){

    return(
        <>
             <div>
      <form action="nombre">
        <i className="fa-solid fa-user"></i>
        <label id="nombre" htmlFor="name">Nombre</label>
        <input type="text" name="Nombre" />
      </form>
      <form action="contrasena">
        <i className="fa-solid fa-key"></i>
        <label id="contra" htmlFor="contra">Contraseña</label>
        <input type="password" name="Contraseña" />
      </form>
      <form action="ciudad">
        <i className="fa-solid fa-location-dot"></i>
        <label id="ubi" htmlFor="ubi">Ubicación</label>
        <input type="text" name="Ubicacion" />
      </form>
      <button>Siguiente</button>
    </div>
  </>
    )
}

export default InicioSesion