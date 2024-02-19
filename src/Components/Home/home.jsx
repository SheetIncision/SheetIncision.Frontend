import React, {useRef} from 'react';
import './home.scss'
import Sheet from "../Sheet/sheet";
import Counter from "../Counter/counter";

const Home = (props) => {
    const table = useRef([]);

    return(
        <div className="home">
            <Sheet N={props.N} M={props.M} table={table}></Sheet>
            <Counter table={table}/>
        </div>
    );
}

export default Home