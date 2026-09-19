import { X } from "lucide-react";

const LocationModal = ({ setlocationModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-950/60">
      <div className="h-[300px] w-[400px] bg-white p-6 rounded-2xl shadow-2xl relative">
        <button
          aria-label="Close location dialog"
          type="button"
          onClick={() => setlocationModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
        >
          <X />
        </button>
        <h2 className="text-xl font-medium mb-4">
          Please enter your location:{" "}
        </h2>
      </div>
    </div>
  );
};

export default LocationModal;
