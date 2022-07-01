import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./WeatherPage.module.css";
import SelectedComponent from "../components/selectedcomponent";

export default function WeatherPage() {
  const { city } = useParams(); // uses the params from the route in the search bar from when user clicks on the item

  const [cityData, setCityData] = useState({});

  const [selectedComponent, setSelectedComponent] = useState("Forecast");

  const [b1isActive, setb1IsActive] = useState(true);
  const [b2isActive, setb2IsActive] = useState(false);
  const [b3isActive, setb3IsActive] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://api.weatherapi.com/v1/forecast.json?key=ae6e82db01024be180070409213112",
      params: {
        q: city,
        days: 3,
        aqi: "no",
      },
    }).then((response) => setCityData(response.data));
  }, []);

  console.log(cityData);

  return (
    // needs to make sure cityData is loaded before pulling info
    <div>
      {Object.keys(cityData).length > 0 && (
        <div className={classes.page}>
          <div className={classes.left}>
            <h2 className={classes.title}>
              {cityData.location.name}, {cityData.location.region}
            </h2>
            <h3 className={classes.title}>{cityData.location.localtime}</h3>
            <div className={classes.info}>
              <img
                src={cityData.current.condition.icon}
                className={classes.image}
              />
              <p>
                Current temperature:{" "}
                <span className={classes.span}>
                  {cityData.current.temp_f}&deg;
                </span>
              </p>
              <p>
                Feels like:{" "}
                <span className={classes.span}>
                  {cityData.current.feelslike_f}&deg;
                </span>
              </p>
              <p>
                Humidity:{" "}
                <span className={classes.span}>
                  {cityData.current.humidity}%
                </span>
              </p>
              <p>
                Gust:{" "}
                <span className={classes.span}>
                  {cityData.current.gust_mph} mph
                </span>
              </p>
              <p>
                Wind direction:{" "}
                <span className={classes.span}>
                  {cityData.current.wind_dir}
                </span>
              </p>
              <p>
                Condition:{" "}
                <span className={classes.span}>
                  {cityData.current.condition.text}
                </span>
              </p>
            </div>
          </div>
          <div className={classes.right}>
            <SelectedComponent component={selectedComponent} data={cityData} />
            <div className={classes.buttons}>
              <button
                className={b1isActive ? classes.buttonFilled : classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedComponent("Forecast");
                  setb1IsActive(true);
                  setb2IsActive(false);
                  setb3IsActive(false);
                }}
              >
                Daily Forecast
              </button>
              <button
                className={b2isActive ? classes.buttonFilled : classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedComponent("HourlyForecast");
                  setb2IsActive(true);
                  setb1IsActive(false);
                  setb3IsActive(false);
                }}
              >
                Today's Hourly Forecast
              </button>
              <button
                className={b3isActive ? classes.buttonFilled : classes.button}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedComponent("%ChanceRain");
                  setb3IsActive(true);
                  setb1IsActive(false);
                  setb2IsActive(false);
                }}
              >
                Hourly Chance of Rain
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
