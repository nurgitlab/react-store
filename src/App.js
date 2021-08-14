import React, { useEffect, useState } from 'react';
import { Header } from './components';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route } from "react-router-dom";
import axios from "axios";


function App() {
  const [shavas, setShavas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setShavas(data.shavas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path="/" render={() => <Home items={shavas}/>} exact/>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  );
}

export default App;
