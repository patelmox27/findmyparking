import React from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Car } from "lucide-react";
import L from "leaflet";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const SearchParking = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const parkingLots = [
    {
      id: 1,
      name: "City Center Parking",
      location: "Ahmedabad",
      price: "₹40/hr",
      available: 12,
      position: [23.0225, 72.5714], // Ahmedabad
    },
    {
      id: 2,
      name: "Metro Mall Parking",
      location: "Satellite",
      price: "₹30/hr",
      available: 5,
      position: [23.0350, 72.5250],
    },
    {
      id: 3,
      name: "Airport Parking Zone",
      location: "Airport Road",
      price: "₹60/hr",
      available: 20,
      position: [23.0734, 72.6266],
    },
  ];

  const handleReserve = (id) => {
    if (!user) {
      navigate("/login", { state: { from: `/reservation/${id}` } });
    } else {
      navigate(`/reservation/${id}`);
    }
  };

  return (
    <div className="h-screen flex">

      {/* 🔵 LEFT SIDE MAP */}
      <div className="w-1/2 h-full">
        <MapContainer
          center={[23.0225, 72.5714]}
          zoom={12}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {parkingLots.map((lot) => (
            <Marker key={lot.id} position={lot.position}>
              <Popup>
                <strong>{lot.name}</strong>
                <br />
                {lot.location}
                <br />
                {lot.price}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* 🟢 RIGHT SIDE DETAILS */}
      <div className="w-1/2 overflow-y-auto bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-6">
          Available Parking
        </h2>

        <div className="space-y-6">
          {parkingLots.map((lot) => (
            <div
              key={lot.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <Car className="text-blue-600" />
                <h3 className="text-xl font-semibold">
                  {lot.name}
                </h3>
              </div>

              <p className="text-gray-600">
                Location: {lot.location}
              </p>
              <p className="text-gray-600">
                Price: {lot.price}
              </p>
              <p className="text-green-600 font-medium mb-4">
                {lot.available} Slots Available
              </p>

              <button
                onClick={() => handleReserve(lot.id)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Reserve Now
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SearchParking;