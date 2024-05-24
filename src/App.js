import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from './Form';
import Courosal from './Courosal';
import Home from './Home';


function App() {


  return (
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/courosal" element={<Courosal/>}></Route>       
        <Route path="/form" element={<Form/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;