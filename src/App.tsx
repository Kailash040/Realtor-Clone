import "./App.css";
import Navbar from "./component/Navbar";
import Home from '../src/pages/Home' ;
import { Route, Routes } from "react-router-dom"
function App() {
  return <>
  <Navbar/>
  <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </>;
}

export default App;
