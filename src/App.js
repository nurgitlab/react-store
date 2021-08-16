import React, { Component, useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { Header } from './components';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { setShavas as setShavasAction } from "./redux/actions/shavas";


// function App() {
//
//
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setShavas(data.shavas);
//     });
//   }, []);
//
//   return (
//
//   );
// }

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      this.props.setShavas(data.shavas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
          <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.shavas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShavas: (items) => dispatch(setShavasAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);