import React, {useState} from 'react';
import "./cell.scss"

const Cell = props => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    return (
        <div className={isActive ? 'cell selected' : 'cell'} onClick={handleClick}></div>
    );
};

export default Cell;