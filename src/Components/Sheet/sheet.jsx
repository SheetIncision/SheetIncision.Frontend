import React from 'react';
import Cell from "../Cell/cell";
import "./sheet.scss"

const Sheet = props => {

    const renderSheet = () => {
        const tableRows = [];

        for (let i = 0; i < props.N; i++) {
            const cells = [];

            for (let j = 0; j < props.M; j++) {
                cells.push(<td key={j}><Cell/></td>);
            }

            tableRows.push(<tr key={i}>{cells}</tr>);
        }

        return (
            <tbody ref={props.table}>
            {tableRows}
            </tbody>
        );
    };

    return (
        <table id="sheet">
            {renderSheet()}
        </table>
    );
};

export default Sheet;