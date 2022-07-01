import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./Pages/Home";
import WeatherPage from "./Pages/WeatherPage";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<WeatherPage />} />
      </Routes>
    </div>
  );
}
