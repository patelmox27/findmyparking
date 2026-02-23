import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Car, CreditCard, ShieldCheck } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= NAVBAR ================= */}
      {/* <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            FindMyParking
          </h1>

          <div className="space-x-6">
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </nav> */}

      {/* ================= HERO ================= */}
      <section className="relative bg-linear-to-r from-blue-600 via-indigo-600 to-indigo-600 text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Smarter Parking for Modern Cities
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Real-time availability. Secure reservations. Effortless navigation.
            Parking made intelligent.
          </p>

          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-2xl mx-auto flex items-center gap-3 hover:scale-105 transition duration-300">
            <MapPin className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by city, area, or landmark..."
              className="w-full p-3 outline-none text-gray-700 bg-transparent"
            />
            <Link
              to="/search"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Search
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-8">
            Trusted by drivers in 50+ cities
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-500 text-lg font-semibold">
            <div>10K+ Users</div>
            <div>5K+ Daily Bookings</div>
            <div>200+ Locations</div>
            <div>99.9% Uptime</div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-3xl md:text-4xl font-bold mb-14 text-gray-800">
            How It Works
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition duration-300">
              <Car size={40} className="mx-auto text-blue-600 mb-6 bg-blue-50 p-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-3">Search Parking</h4>
              <p className="text-gray-600">
                Find available parking spaces in real-time near your location.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition duration-300">
              <CreditCard size={40} className="mx-auto text-blue-600 mb-6 bg-blue-50 p-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-3">Reserve & Pay</h4>
              <p className="text-gray-600">
                Book your slot in advance and pay securely using digital methods.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition duration-300">
              <ShieldCheck size={40} className="mx-auto text-blue-600 mb-6 bg-blue-50 p-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-3">Park Securely</h4>
              <p className="text-gray-600">
                Navigate easily to your reserved spot and enjoy hassle-free parking.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-3xl md:text-4xl font-bold mb-14 text-gray-800">
            Why Choose Us?
          </h3>

          <div className="grid md:grid-cols-3 gap-10 text-left">

            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-600">
                Real-Time Availability
              </h4>
              <p className="text-gray-600">
                Live updates on parking slot status to save your time.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-600">
                Secure Payments
              </h4>
              <p className="text-gray-600">
                Fast and secure cashless transactions.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-600">
                Smart Analytics
              </h4>
              <p className="text-gray-600">
                Optimized pricing and efficient parking management.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-linear-to-r from-indigo-600 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Park Smarter?
          </h3>
          <p className="text-blue-100 mb-8">
            Join thousands of drivers saving time every day.
          </p>

          <Link
            to="/register"
            className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2026 FindMyParking. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;