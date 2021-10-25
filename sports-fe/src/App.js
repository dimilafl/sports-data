import "./App.css";
import { Route, Link, RouterProps, Redirect } from "react-router-dom";
import About from "./components/About";
import Extra from "./components/Extra";
import Sports from "./components/Sports";
import Baseball from "./components/Baseball";
import Basketball from "./components/Basketball";
import Soccer from "./components/Soccer";

import mlbtest1 from "./mlbtest1.png";
import mlbtest2 from "./mlbtest2.png";
import mlbtest3 from "./mlbtest3.png";
import mlbtest4 from "./mlbtest4.png";

import NBAtest1 from "./NBAtest1.png";
import NBAtest2 from "./NBAtest2.png";
import NBAtest4 from "./NBAtest4.png";
import NBAtest6 from "./NBAtest6.png";

import test1 from "./test1.png";
import test2 from "./test2.png";
import test3 from "./test3.png";
import test4 from "./test4.png";

import playerChart from "./playerChart.png";

import Basedball from "./Basedball.jpeg";
import bball from "./bball.jpeg";
import soccer from "./soccer.jpg";

// import mlbtest1 from "./mlbtest1.png";
// import About from "./components/About";

// import list from "./"

import React, { useState, useEffect } from "react";
import axios from "axios";
// import Soccer from "./components/Soccer";

function App() {
  // const [symbolsData, setSymbolsData] = useState([]);

  //symbols
  // useEffect(() => {
  //   let url =
  //     "https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_f13dbb285b1e42fcbed4a2708a111494";

  //   // let url =
  //   //   "https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_6f321a57598f48c5a22e4537e20617b5";

  //   // old token = pk_6f321a57598f48c5a22e4537e20617b5
  //   // new token = pk_f13dbb285b1e42fcbed4a2708a111494

  //   // stocks.forEach((stock) => {
  //   //   url += `${stock},`;
  //   // });

  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setSymbolsData(response.data);
  //     })
  //     .catch((error) => console.error);
  // }, []);

  // console.log(symbolsData);

  return (
    //class names
    <div className="App">
      {/* class names */}
      <header className="nav-bar">
        {/* class names */}
        {/* <Link to="/stocks" className="navigation-items1">
          Home
        </Link> */}

        <br />

        {/* class names */}
        <Link to="/" className="navigation-items12">
          Home
        </Link>

        <br />

        <Link to="/about" className="navigation-items2">
          About
        </Link>

        <br />

        {/* class names */}
        <Link to="/extra" className="navigation-items3">
          Extra
        </Link>

        <br />

        {/* class names */}
        <Link to="/sports" className="navigation-items4">
          Sports
        </Link>

        <br />
        <br />

        <Link to="/MLB" className="navigation-items4">
          <img src={Basedball} alt="Baseball" width="100px" height="auto" />
          Baseball
        </Link>

        <br />
        <br />

        <Link to="/FIFA" className="navigation-items4">
          <img src={soccer} alt="ball " width="100px" height="auto" />
          Soccer
        </Link>

        <br />
        <br />

        <Link to="/NBA" className="navigation-items4">
          <img src={bball} alt="ball " width="100px" height="auto" />
          Basketball
        </Link>
      </header>
      <main className="main-section">
        {/* original */}
        {/* <Route path="/stocks" exact component={Stocks} /> */}
        <br />
        {/* <Route
          path="/stocks/:symbol"
          render={(routerProps) => (
            <StockInfo symbol={routerProps.match.params.symbol} />
          )}
        /> */}
        <br />
        <Route path="/about" component={About} />
        <Route path="/extra" component={Extra} />
        <Route path="/sports" component={Sports} />
        <Route path="/MLB" component={Baseball} />
        <Route path="/NBA" component={Basketball} />
        <Route path="/FIFA" component={Soccer} />
        <span />
        WELCOME TO MY SPORTS DATA SITE!!!
        <span height="50px" align="center" />
      </main>
    </div>
  );
}

export default App;
