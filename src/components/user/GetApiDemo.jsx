/* eslint-disable react-hooks/set-state-in-effect */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { toast } from "react-toastify";

export const GetApiDemo = () => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user/");
    console.log("response", res);
    setusers(res.data.data);
  };
  const Userdelete = async (id) => {
    //alert("delete user called..."+id)
    ///url =de5.onrender.com/user/user/12345678o9p

    const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
    console.log(res)
    if (res.status == 204) {
      toast.success("User deleted successfully")
      getUsers()

    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-slate-800" style={{ textAlign: "center" }}>
        User Details
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-sm font-semibold">Age</th>
              <th className="px-6 py-3 text-sm font-semibold">DELETE USER</th>
            </tr>
          </thead>

          <tbody className="text-slate-700">
            {users.map((user, index) => {
              return (
                <tr
                  key={index}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-3">{user.name}</td>
                  <td className="px-6 py-3">{user.email}</td>
                  <td className="px-6 py-3">{user.age}</td>
                  <td className="px-6 py-3">
                    <button className="bg-red-500 hover:bg-red-700 active:scale-95 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={() => Userdelete(user._id)} text-red py-2 rounded-lg >
                      DELETE
                    </button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};