import "../App.css";
import React from "react";
import mlbtest1 from "../mlbtest1.png";
import mlbtest2 from "../mlbtest2.png";
import mlbtest3 from "../mlbtest3.png";
import mlbtest4 from "../mlbtest4.png";
import NBAtest1 from "../NBAtest1.png";
import NBAtest2 from "../NBAtest2.png";
import NBAtest4 from "../NBAtest4.png";
import NBAtest6 from "../NBAtest6.png";
import test1 from "../test1.png";
import test2 from "../test2.png";
import test3 from "../test3.png";
import test4 from "../test4.png";
import playerChart from "../playerChart.png";

function Soccer() {
  return (
    <div className="about-container">
      <h2 className="about-me">
        <img src={playerChart} alt="Logo" />
        <span>League Leaders by Expected Goals</span>
        <hr />

        <img src={test1} alt="Logo" />

        <span>Goals vs Assists </span>
        <hr />

        <img src={test2} alt="Logo" />

        <span>Goals vs Possession</span>
        <hr />

        <span>Expected Goals vs Actual Goals</span>
        <img src={test3} alt="Logo" />
        <span>Expected Assists vs Actual Assists Dotplot</span>
        <hr />

        <img src={test4} alt="Logo" />
        <span>Linear Regression for Team Goal Output per Game</span>
        <hr />
      </h2>
    </div>
  );
}

export default Soccer;
