import classes from "./WeatherCard.module.css";
import { useNavigate } from "react-router-dom";

export default function WeatherCard({ cityName, allData, customClick }) {
  const temperature = allData.current.temp_f;
  const humidity = allData.current.humidity;
  const precipitation = allData.current.precip_in;

  const navigate = useNavigate();

  return (
    <div className={classes.card} onClick={() => navigate(`/${customClick}`)}>
      <h3 className={classes.city}>
        {cityName}, {allData.location.region}
      </h3>
      <div className={classes.items}>
        <div className={classes.item}>
          <p>Temperature</p>
          <p className={classes.info} style={{ color: "#78c9ff" }}>
            {temperature}&deg;
          </p>
        </div>
        <div className={classes.item}>
          <p>Precipitation</p>
          <p className={classes.info} style={{ color: "#78c9ff" }}>
            {precipitation} in
          </p>
        </div>
        <div className={classes.item}>
          <p>Humidity</p>
          <p className={classes.info} style={{ color: "#78c9ff" }}>
            {humidity}%
          </p>
        </div>
      </div>
    </div>
  );
}
