import React, {useState} from 'react';
import {Button} from "semantic-ui-react";
import "./counter.scss"

const Counter = props => {

    const [counter, setCounter] = useState(0);

    const countPieces = () => {
        const rows = props.table.current.children.length
        const cols = props.table.current.children[0].children.length
        const cells = props.table.current.getElementsByClassName("cell")

        const matrix = []

        for(let i = 0; i < rows; i++){
            const row = []
            for(let j = 0; j < cols; j++){
                if(cells[i*cols+j].className === "cell selected"){
                    row.push(1)
                }
                else{
                    row.push(0)
                }
            }
            matrix.push(row)
        }

        let allowDiagonals = false
        allowDiagonals = document.querySelector('input[name="diagonals"]:checked').value;

        let obj = {
            matrix: matrix,
            allowDiagonals: allowDiagonals
        }

        const localhost = "https://localhost:7231"
        const apiDomain = "https://sheet-incision-web-api.azurewebsites.net"

        fetch(
            apiDomain + "/api/SheetIncision/GetNumberOfPieces?data=" + JSON.stringify(obj), {
            method: "GET",
        })
            .then( response => response.json() )
            .then( data => setCounter(data))
            .catch((error) => console.log(error));
    }

    return (
        <div className="counter">
            <p>Use diagonals as a bridge?</p>
            <div className="options">
                <div className="option">
                    <input type="radio" value="true" name="diagonals" defaultChecked/>
                    <p className="inputLabel">Yes</p>
                </div>
                <div className="option">
                    <input type="radio" value="false" name="diagonals"/>
                    <p className="inputLabel">No</p>
                </div>
            </div>
            <Button onClick={countPieces} className="button">Count number of pieces</Button>
            <p id="counterDisplay">Amount of pieces: {counter}</p>
        </div>
    );
};

export default Counter;