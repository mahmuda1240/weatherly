import { X, LocateFixed } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getGeoLocation } from "../services/getGeoLocation";

const LocationModal = ({ setlocationModal }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const goToPage = (location) => {
    navigate("/weather", { state: { location } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = city.trim();
    if (!value) {
      setError("Please enter a city name.");
      return;
    }
    try {
      const location = await getGeoLocation(value);
      if (!location) {
        setError("GeoLocation request failed");
      }
      goToPage(location);
    } catch (error) {
      setError("Error fetching geolocation: " + error.message);
    }
  };

  const handleGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        goToPage({
          name: "Current Location",
          latitude: latitude,
          longitude: longitude,
        });
      },
      (error) => {
        setError(error.message);
      },
      {
        timeout: 3000, // Set a timeout for the geolocation request (in milliseconds)
      },
    );
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-950/60">
      <div className="h-auto w-[400px] bg-white p-6 rounded-2xl shadow-2xl relative">
        <button
          aria-label="Close location dialog"
          type="button"
          onClick={() => setlocationModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
        >
          <X />
        </button>
        <h2 className="text-xl font-medium mb-4">What's your location?</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter city name"
              type="text"
              className="w-full border py-2 px-3 rounded-2xl"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white font-medium py-2 px-5 rounded-2xl hover:bg-blue-700"
            >
              Get Weather
            </button>
          </form>
          <p className="text-center text-gray-500 mt-4">Or</p>

          <button
            onClick={handleGeoLocation}
            className="w-full flex items-center justify-center gap-2 mt-4 bg-blue-500 text-white font-medium py-2 px-5 rounded-2xl hover:bg-blue-700"
          >
            Use my location <LocateFixed />
          </button>
        </div>
        {error && (
          <p className="text-red-500 font-semibold text-center mt-2">{error}</p>
        )}
      </div>
    </div>
  );
};

export default LocationModal;
