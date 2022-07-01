import cities from "../config/cities";
import WeatherCard from "../components/WeatherCard";
import classes from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [weatherData, setWeatherData] = useState([]);

  // api key: ae6e82db01024be180070409213112

  useEffect(() => {
    for (let i = 0; i < cities.length; i++) {
      axios({
        method: "GET",
        url: "http://api.weatherapi.com/v1/current.json?key=ae6e82db01024be180070409213112",
        params: {
          q: cities[i],
          aqi: "no",
        },
      }).then((response) =>
        setWeatherData((oldArray) => [...oldArray, response.data])
      );
    }
  }, []);

  console.log(weatherData);

  return (
    <div className={classes.home}>
      {weatherData.map((city, index) => {
        return (
          <WeatherCard
            customClick={city.location.name} // cannot onclick custom react component
            key={index}
            cityName={city.location.name}
            allData={city}
          />
        );
      })}
    </div>
  );
}
