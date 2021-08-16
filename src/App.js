import React, { Component, useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Header } from './components';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { setShavas } from "./redux/actions/shavas";


function App() {
  const dispatch = useDispatch();
  const {items} = useSelector(({shavas, filters}) => {
    return {
      items: shavas.items,
      sortBy: filters.sortBy,
    };
  });

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      dispatch(setShavas(data.shavas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path="/" render={() => <Home items={items}/>} exact/>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  );
}

export default App;