import { useState } from 'react';
import LocationModal from '../components/LocationModal';

const Home = () => {
    const [locationModal, setlocationModal] = useState(false);
  return (
    <div>
      <h1 className="text-6xl text-blue-200 font-extrabold text-center">
        Welcome to
        <span className="text-blue-400"> Weatherly</span>
      </h1>
      <p className="py-4 text-xl text-gray-400 text-center">
        Check your weather today in your city!
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => setlocationModal(true)}
          type="button"
          className="text-lg bg-blue-700 text-white font-medium py-2 px-5 rounded-4xl hover:scale-105 transition-all delay-200 text-gray-100"
        >
          Check Weather
        </button>
      </div>
      {locationModal && <LocationModal setlocationModal={setlocationModal} />}
    </div>
  );
};

export default Home;
