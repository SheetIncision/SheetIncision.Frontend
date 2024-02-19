import "./navbar.scss";
import React from 'react';
import {validateInput} from "./validateInput";

function Navbar(props) {

    const inputHandlerN = (event) => {
        validateInput(event)
        props.setN(parseInt(event.target.value))
    }
    const inputHandlerM = (event) => {
        validateInput(event)
        props.setM(parseInt(event.target.value))
    }

    return (
        <div className="navbar">
            <a href="/">
                <h1>Sheet incision</h1>
            </a>

            <div className="dimensions">
                Dimensions:
                <input id="dimensionN" type="text" placeholder="N" size="1" defaultValue="2" onInput={inputHandlerN}/>
                x
                <input id="dimensionM" type="text" placeholder="M" size="1" defaultValue="2" onInput={inputHandlerM}/>
            </div>
        </div>
    );
}

export default Navbar;