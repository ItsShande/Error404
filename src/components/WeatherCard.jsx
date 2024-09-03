import React from "react";

function WeatherCard() {
    return (
        <>
            <div className="cardContainer">
                <div className="cardItem">12:00</div>
                <img className="cardItem" src="./src/assets/Mañana.png" alt="Hora" width="45px"/>
                <div className="cardItem">Lluvioso</div>
                <img className="cardItem" src="./src/assets/Lluvia.png" alt="Estado" width="45px" />
                <div className="cardItem">Normal</div>
                <img className="cardItem" src="./src/assets/Relámpagos.png" alt="Eléctrica" width="45px" />
                <div className="cardItem">20°</div>
                <img className="cardItem" src="./src/assets/Frío.png" alt="Temperatura" width="45px" />
            </div>
        </>
    )
}

export default WeatherCard