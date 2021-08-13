import React, {useEffect, useState} from 'react';
import { Header } from './components';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route } from "react-router-dom";


function App() {
  const [shavas, setShavas] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/db.json')
      .then((resp)=>resp.json())
      .then(json=>{
      setShavas(json.shavas)
    })
  },[])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path="/" render={()=><Home items={shavas}/>} exact/>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  );
}

export default App;
