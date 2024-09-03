import React from "react";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src="./src/assets/Mañana.png" alt="" width="24" height="24" />
                    <a className="navbar-brand" href="#">ERROR 404</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Concientisación</a></li>
                                    <li><a className="dropdown-item" href="#">Modo Oscuro </a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar