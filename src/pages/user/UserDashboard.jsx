import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to Your Dashboard 🚗
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your reservations, payments, and parking history.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Search Parking */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Search Parking</h2>
          <p className="text-gray-500 mb-4">
            Find available parking slots in real-time.
          </p>
          <Link
            to="/search"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Search Now
          </Link>
        </div>

        {/* My Reservations */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">My Reservations</h2>
          <p className="text-gray-500 mb-4">
            View and manage your booked parking slots.
          </p>
          <Link
            to="/reservations"
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            View Reservations
          </Link>
        </div>

        {/* Payment History */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Payment History</h2>
          <p className="text-gray-500 mb-4">
            Check your previous transactions and receipts.
          </p>
          <Link
            to="/payments"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            View Payments
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;