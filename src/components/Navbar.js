import React from 'react'
import logo from "../logo192.jpg";

//React Fontawesome

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
      
         
      
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        
            <div className="container">
                <a className="navbar-brand" href="#"><img src ={logo} alt = "logo..."/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#dd7f14e8" }}/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li clclassName="nav-item">
                                        <a className="nav-link" href="#">About me</a>
                                    </li>
                                    <li clclassName="nav-item">
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li clclassName="nav-item">
                                        <a className="nav-link" href="#">Portflio</a>
                                    </li>
                                    <li clclassName="nav-item">
                                        <a className="nav-link" href="#">Contat me</a>
                                    </li>
                                
                            
                            </ul>
                            
                    </div>

              </div>
        </nav>



    )
}

export default Navbar
