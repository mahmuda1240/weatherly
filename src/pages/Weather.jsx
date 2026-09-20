import { useLocation } from "react-router";
const Weather = () => {
  const coords = useLocation();
  console.log("Current location:", coords);
  return <div>hello weather</div>;
};

export default Weather;
