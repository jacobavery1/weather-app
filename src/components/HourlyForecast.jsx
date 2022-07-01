import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import classes from "./Forecast.module.css";

export default function HourlyForecast({ data }) {
  const chartRef = useRef();
  const forecastDays = data.forecast.forecastday;

  const forecastDay1 = forecastDays[0];
  const dateLabels = forecastDay1.hour.map((item) => {
    return new Date(item.time_epoch * 1000).toLocaleString();
  });
  const tempLabels = forecastDay1.hour.map((item) => {
    return item.temp_f;
  });

  const config = {
    type: "line",
    data: {
      labels: dateLabels,
      datasets: [
        {
          data: tempLabels,
          label: "Hourly Temp",
          borderColor: "#21cfff",
          tension: 0.1,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, config);
  });

  return (
    <div>
      <div className={classes.outside}>
        <h3 style={{ textAlign: "center" }}>Hourly Forecast</h3>
        <div className={classes.chart}>
          <canvas className={classes.myChart} ref={chartRef} />
        </div>
      </div>
    </div>
  );
}
