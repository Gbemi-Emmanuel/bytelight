import React from 'react';


const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <a className="navbar-brand" href="#"><img src="../img/Logo2.png" alt="logo"/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Products <i className="fa-solid fa-angle-down"></i><span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Company</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Industries</a>
                  </li>
                </ul>
                <button>Contact sales <i className="fa-solid fa-angle-right"></i></button>
              </div>
            </nav>
        </header>
    )
}

export default Header;