"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState();

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/userdata");
    setUserData(res.data.data);
  };

  useEffect(() => {
    if (!userData) {
      getUserDetails();
    }
  }, [userData]);

  return (
    <div className="w-full max-w-xs flex m-auto flex-col items-center justify-center py-2">
      <h1 className="text-2xl py-4">Profile</h1>
      <hr />
      <p>Profile page</p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
