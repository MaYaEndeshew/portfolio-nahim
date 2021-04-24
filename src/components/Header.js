import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        
        <div className ="header-wrapper">
            <div className="headertxt">

             <h2>Hey,I am Nahom.A</h2>
                <h3>An Expert</h3>
             <Typed
               className ="typed-text"
                    strings={["Graphics Design","UI/Ux Designer"," Web Designer"]}
               typeSpeed={40}
               backSpeed={60}
               loop
             />
             
            </div>
            <div className="btn1">
                <a href="#" className="btn-maincls"> Contact Me </a>

            </div>
            
        </div>
    )
}

export default Header
