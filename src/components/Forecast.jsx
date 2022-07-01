import Chart from "chart.js/auto";
import classes from "./Forecast.module.css";
import { useEffect, useRef, useState } from "react";

export default function Forecast({ data }) {
  const chartRef = useRef();

  const forecastDays = data.forecast.forecastday;
  console.log(forecastDays);

  const config = {
    type: "line",
    data: {
      labels: forecastDays.map((day) => day.date),
      datasets: [
        {
          data: forecastDays.map((day) => day.day.avgtemp_f),
          label: "Average Temp",
          borderColor: "#21cfff",
          tension: 0.1,
          pointRadius: 2,
        },
        {
          data: forecastDays.map((day) => day.day.maxtemp_f),
          label: "High",
          borderColor: "#ff0d1d",
          tension: 0.1,
          pointRadius: 2,
        },
        {
          data: forecastDays.map((day) => day.day.mintemp_f),
          label: "Low",
          borderColor: "#0d0dff",
          tension: 0.1,
          pointRadius: 2,
        },
      ],
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, config);
  });

  return (
    <div className={classes.outside}>
      <h3 style={{ textAlign: "center" }}>Daily Forecast (Average Temp)</h3>
      <div className={classes.chart}>
        <canvas className={classes.myChart} ref={chartRef} />
      </div>
    </div>
  );
}
