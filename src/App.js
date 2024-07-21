import { useEffect } from "react";
import Card from "./components/Card"; // Corrected import
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/weather";

import "./App.css";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, [weather]); // Added `weather` to the dependency array

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
