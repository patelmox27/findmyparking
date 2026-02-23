import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Reservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data (later connect to backend)
  const parkingLots = [
    {
      id: "1",
      name: "City Center Parking",
      location: "Ahmedabad",
      price: 40,
    },
    {
      id: "2",
      name: "Metro Mall Parking",
      location: "Satellite",
      price: 30,
    },
    {
      id: "3",
      name: "Airport Parking Zone",
      location: "Airport Road",
      price: 60,
    },
  ];

  const parking = parkingLots.find((lot) => lot.id === id);

  const [hours, setHours] = useState(1);
  const [date, setDate] = useState("");

  if (!parking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">
          Parking Not Found
        </h2>
      </div>
    );
  }

  const totalPrice = parking.price * hours;

  const handleConfirm = () => {
    alert("Reservation Confirmed!");

    // You can store reservation in localStorage (optional)
    const reservationData = {
      parkingId: id,
      parkingName: parking.name,
      date,
      hours,
      totalPrice,
    };

    localStorage.setItem("reservation", JSON.stringify(reservationData));

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Reserve Parking Slot
        </h2>

        <div className="mb-4">
          <p className="text-lg font-semibold">{parking.name}</p>
          <p className="text-gray-600">{parking.location}</p>
          <p className="text-blue-600 font-medium">
            ₹{parking.price} / hour
          </p>
        </div>

        {/* Date Selection */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Select Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Hours Selection */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Select Hours
          </label>
          <input
            type="number"
            min="1"
            max="24"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Total */}
        <div className="mb-6">
          <p className="text-lg font-semibold">
            Total Price: ₹{totalPrice}
          </p>
        </div>

        <button
          onClick={handleConfirm}
          disabled={!date}
          className={`w-full py-3 rounded-xl text-white font-semibold transition ${date
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Confirm Reservation
        </button>

      </div>
    </div>
  );
};

export default Reservation;