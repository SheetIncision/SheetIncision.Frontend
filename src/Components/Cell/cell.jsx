import React, {useState} from 'react';
import "./cell.scss"

const Cell = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    return (
        <div className={isActive ? 'cell selected' : 'cell'} onClick={handleClick}></div>
    );
};

export default Cell;