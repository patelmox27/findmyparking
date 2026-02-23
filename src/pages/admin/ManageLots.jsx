import React, { useState } from "react";

const ManageLots = () => {
  const [parkingLots, setParkingLots] = useState([
    {
      id: 1,
      name: "City Center Parking",
      location: "Ahmedabad",
      totalSlots: 100,
    },
    {
      id: 2,
      name: "Airport Parking",
      location: "Ahmedabad Airport",
      totalSlots: 150,
    },
  ]);

  const [newLot, setNewLot] = useState({
    name: "",
    location: "",
    totalSlots: "",
  });

  const handleChange = (e) => {
    setNewLot({ ...newLot, [e.target.name]: e.target.value });
  };

  const handleAddLot = () => {
    if (!newLot.name || !newLot.location || !newLot.totalSlots) {
      alert("Please fill all fields");
      return;
    }

    const lot = {
      id: parkingLots.length + 1,
      ...newLot,
    };

    setParkingLots([...parkingLots, lot]);
    setNewLot({ name: "", location: "", totalSlots: "" });
  };

  const handleDelete = (id) => {
    setParkingLots(parkingLots.filter((lot) => lot.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h1 className="text-2xl font-bold">Manage Parking Lots 🚗</h1>
        <p className="text-gray-500 mt-2">
          Add, update, or remove parking locations.
        </p>
      </div>

      {/* Add Parking Lot */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Parking Lot</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Parking Lot Name"
            value={newLot.name}
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newLot.location}
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          <input
            type="number"
            name="totalSlots"
            placeholder="Total Slots"
            value={newLot.totalSlots}
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />
        </div>

        <button
          onClick={handleAddLot}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add Lot
        </button>
      </div>

      {/* Parking Lots Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Existing Parking Lots</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Location</th>
              <th className="p-2">Total Slots</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {parkingLots.map((lot) => (
              <tr key={lot.id} className="border-b">
                <td className="p-2">{lot.id}</td>
                <td className="p-2">{lot.name}</td>
                <td className="p-2">{lot.location}</td>
                <td className="p-2">{lot.totalSlots}</td>
                <td className="p-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => handleDelete(lot.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
};

export default ManageLots;