import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function StockInfo({ symbol }) {
  const [stockData, setStockData] = useState({});
  const [yesterdaysData, setYesterdaysData] = useState({});

  // console.log(symbol);

  useEffect(() => {
    const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_f13dbb285b1e42fcbed4a2708a111494`;
    // const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_f13dbb285b1e42fcbed4a2708a111494`;

    // old token = pk_6f321a57598f48c5a22e4537e20617b5
    // new token = pk_f13dbb285b1e42fcbed4a2708a111494

    axios
      .get(url)
      .then((response) => {
        setStockData(response.data);
      })
      .catch((error) => console.error);

    const previousUrl = `https://cloud.iexapis.com/stable/stock/${symbol}/previous?token=pk_f13dbb285b1e42fcbed4a2708a111494`;
    // const previousUrl = `https://cloud.iexapis.com/stable/stock/${symbol}/previous?token=pk_f13dbb285b1e42fcbed4a2708a111494`;

    // old token = pk_6f321a57598f48c5a22e4537e20617b5
    // new token = pk_f13dbb285b1e42fcbed4a2708a111494

    axios
      .get(previousUrl)
      .then((response) => {
        setYesterdaysData(response.data);
      })
      .catch((error) => console.error);
  }, []);

  //edit

  let openPrice = stockData.open;
  if (!openPrice) {
    openPrice = `${yesterdaysData.open} (from last trading day)`;
  }

  let highPrice = 0;
  if (!highPrice) {
    highPrice = `${yesterdaysData.high} (from last trading day)`;
  }

  let lowPrice = 0;
  if (!lowPrice) {
    lowPrice = `${yesterdaysData.low} (from last trading day)`;
  }

  return (
    <div
      className="container"
      style={stockData.change > 0 ? { color: "green" } : { color: "red" }}
    >
      <h1>
        {stockData.companyName} - {symbol}
      </h1>

      <p
      // style={stockData.change > 0 ? { color: "green" } : { color: "red" }}
      >
        <strong>Current Price:</strong> ${stockData.latestPrice}
      </p>

      <span>
        <strong>Last Updated:</strong> {stockData.latestTime}
      </span>

      <hr />

      <div class="container-1">
        <p>
          <strong>High:</strong> ${highPrice}
        </p>
        <p>
          <strong>Low:</strong> ${lowPrice}
        </p>
        <p>
          <strong>Open:</strong> ${openPrice}
        </p>
        <br />

        <span>
          <strong>Change:</strong> {stockData.change}
        </span>
        <br />

        <span>
          <strong>Percent Change:</strong> {stockData.changePercent}%
        </span>

        <br />

        <br />

        <span>52-Week High: ${stockData.week52High}</span>

        <br />

        <span>52-Week Low: ${stockData.week52Low}</span>

        <br />

        <span>
          52-Week Range: ${stockData.week52Low} - ${stockData.week52High}
        </span>

        <br />

        {/* <span>
          Stock Range:{" "}
          {(stockData.latestPrice - stockData.week52Low).toFixed(2)}
        </span> */}

        <br />
        <br />
        <br />

        <span>
          <strong>Primary Exchange:</strong>

          {stockData.primaryExchange}
        </span>

        <br />

        <span>
          <strong>Market Capitalization:</strong>

          {stockData.marketCap}
        </span>
        <br />

        <span>
          <strong>Average Total Volume:</strong>

          {stockData.avgTotalVolume}
        </span>

        <br />

        <span>
          <strong>PE ratio:</strong>

          {stockData.peRatio}
        </span>

        <br />

        <span>
          <strong>Ask Price:</strong> {stockData.iexAskPrice}
        </span>

        <br />

        <span>
          <strong>Bid Price:</strong> {stockData.iexBidPrice}
        </span>

        <br />

        <span>
          <strong>Last Price:</strong> {stockData.latestPrice}
        </span>

        {/* less necessary */}

        {/* <br /> */}
        {/* <span>
          <strong>Ask Size:</strong> {stockData.iexAskSize}
        </span>

        <br />

        <span>
          <strong>Bid Size:</strong> {stockData.iexBidSize}
        </span> */}

        <br />

        <span>
          <strong>Previous Volume:</strong> {stockData.previousVolume}
        </span>
        <br />

        <span>
          <strong>Previous Close:</strong> {stockData.previousClose}
        </span>
        <br />

        <span>
          <strong>Change (YTD) :</strong> {stockData.ytdChange}
        </span>
      </div>

      <br />
      <hr />

      <h2>
        <strong>Calculations</strong>
      </h2>

      {/* started calculations */}

      <br />

      <span
        style={
          (
            ((stockData.latestPrice - stockData.week52Low) /
              (stockData.week52High - stockData.week52Low)) *
            100
          ).toFixed(2) > 50
            ? // { color: "green" }
              { color: "green" }
            : { color: "red" }
        }
      >
        <strong>Stock Price Percentile</strong>
        (Based on 52-Week Range):{" "}
        {(
          ((stockData.latestPrice - stockData.week52Low) /
            (stockData.week52High - stockData.week52Low)) *
          100
        ).toFixed(2)}
        %
      </span>

      <br />
      <br />

      <span>
        <strong>52-Week 75th Percentile: </strong>

        {(
          (stockData.week52High +
            (stockData.week52High + stockData.week52Low) / 2) /
          2
        ).toFixed(2)}
      </span>

      <br />

      <span>
        <strong>52-Week Midpoint: </strong>

        {((stockData.week52High + stockData.week52Low) / 2).toFixed(2)}
      </span>

      <br />

      <span>
        <strong>52-Week 25th Percentile: </strong>

        {(
          (stockData.week52Low +
            (stockData.week52High + stockData.week52Low) / 2) /
          2
        ).toFixed(2)}
      </span>

      <br />
      <br />

      <span>
        <strong>Change from 52-Week High: </strong>
        {/* {stockData.week52High - stockData.latestPrice} */}
        {/* {(stockData.week52High - stockData.latestPrice).toFixed(2)} */}
        {(stockData.latestPrice - stockData.week52High).toFixed(2)}
      </span>

      <br />

      <span>
        <strong>Change from 52-Week Low: </strong>$
        {Math.abs(stockData.week52Low - stockData.latestPrice).toFixed(2)}
      </span>

      <br />

      <span>
        <strong>Change from 52-Week Midpoint: </strong>$
        {(
          stockData.latestPrice -
          (stockData.week52High + stockData.week52Low) / 2
        ).toFixed(2)}
      </span>

      <br />
      <br />

      <span>
        <strong>Percent Change from 52-Week High: </strong>
        {((stockData.latestPrice / stockData.week52High - 1) * 100).toFixed(2)}%
      </span>

      <br />

      <span>
        <strong>Percent Change from 52-Week 75th: </strong>
        {(
          (stockData.latestPrice /
            ((stockData.week52High +
              (stockData.week52High + stockData.week52Low) / 2) /
              2) -
            1) *
          100
        ).toFixed(2)}
        %
      </span>

      <br />

      <span>
        <strong>Percent Change from 52-Week Midpoint: </strong>
        {(
          (stockData.latestPrice /
            ((stockData.week52High + stockData.week52Low) / 2) -
            1) *
          100
        ).toFixed(2)}
        %
      </span>

      <br />

      <span>
        <strong>Percent Change from 52-Week 25th: </strong>
        {(
          (stockData.latestPrice /
            ((stockData.week52Low +
              (stockData.week52High + stockData.week52Low) / 2) /
              2) -
            1) *
          100
        ).toFixed(2)}
        %
      </span>

      <br />

      <span>
        <strong>Percent Change from 52-Week Low: </strong>
        {((stockData.latestPrice / stockData.week52Low - 1) * 100).toFixed(2)}%
      </span>

      <br />
      <br />

      <span
        style={
          stockData.latestPrice /
            ((stockData.week52High + stockData.week52Low) / 2) -
            1 >
          0
            ? { color: "green" }
            : { color: "red" }
        }
      >
        <strong>Is it Above the 52-Week Midpoint: </strong>

        {stockData.latestPrice /
          ((stockData.week52High + stockData.week52Low) / 2) -
          1 >
        0
          ? "Yes"
          : "No"}
      </span>

      {/* redundant */}

      {/* <br />

      <span>
        <strong>Is it Below the 52-Week Midpoint: </strong>

        {stockData.latestPrice /
          ((stockData.week52High + stockData.week52Low) / 2) -
          1 >
        0
          ? "No"
          : "Yes"}
      </span> */}

      {/* done calculations */}

      <br />
    </div>
  );
}

export default StockInfo;
