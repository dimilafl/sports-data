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

function Basketball() {
  return (
    <div className="about-container">
      <h2 className="about-me">
        <img src={NBAtest6} alt="Logo" />

        <span>Points Per Game for Top 4 Scoring Teams </span>
        <hr />

        <img src={NBAtest4} alt="Logo" />
        <span>Linear Regression for Points Per Game</span>
        <hr />
        <img src={NBAtest1} alt="Logo" />
        <span>Points Per Game vs Field Goal % </span>
        <hr />
        <img src={NBAtest2} alt="Logo" />
        <span>3-Pointer% vs 2-Pointer% </span>
        <hr />
      </h2>
    </div>
  );
}

export default Basketball;
