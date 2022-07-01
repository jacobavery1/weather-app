import Forecast from "./Forecast";
import HourlyForecast from "./HourlyForecast";
import HourlyChanceOfRain from "./HourlyChanceOfRain";

export default function SelectedComponent({ component, data }) {
  if (component == "Forecast") {
    return <Forecast data={data} />;
  } else if (component == "HourlyForecast") {
    return <HourlyForecast data={data} />;
  } else if (component === "%ChanceRain") {
    return <HourlyChanceOfRain data={data} />;
  }
}
