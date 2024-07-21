import React from "react";
import { useWeather } from "../context/weather";
const Input = () => {
  const weather = useWeather();

  return (
    <input
      className="input-field"
      placeholder="Search here"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;