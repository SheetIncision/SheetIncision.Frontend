import './App.scss';
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import {useState} from "react";

const App = () => {

  let [N, setN] = useState(2)
  let [M, setM] = useState(2)

  return (
      <div className="App">
        <Navbar setN={setN} setM={setM}/>
        <Home N={N} M={M}/>
      </div>
  );
}

export default App;
