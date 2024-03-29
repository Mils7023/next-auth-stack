"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="w-full max-w-xs flex m-auto flex-col items-center justify-center  py-2">
      <h1>Verify Email</h1>
      <h2>{token ? `${token}` : "no token"}</h2>
      {verified && (
        <div>
          <h2>Email Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
    </div>
  );
}
