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

function Baseball() {
  return (
    <div className="about-container">
      <h2 className="about-me">
        <span>Wins based on Team's Strike Outs Per Game</span>
        <img src={mlbtest1} alt="Logo" />
        <br />
        <span>Losses based on Team's WHIP Per Game</span>
        <hr />

        <span>Wins based on Team's HR per 9</span>
        <img src={mlbtest2} alt="Logo" />
        <span>Losses based on Team's BB Per Game</span>
        <hr />

        <span> Strike Outs based on Team's WHIP Per Game</span>
        <img src={mlbtest3} alt="Logo" />
        <span> ERA based on Team's WHIP Per Game</span>
        <hr />

        <img src={mlbtest4} alt="Logo" />
      </h2>
    </div>
  );
}

export default Baseball;
