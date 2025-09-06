"use client";
import React, { useEffect, useState } from "react";
import Welcome from "../Welcome/page";
import Header from "../Components/Header";
import { IoMdSend } from "react-icons/io";
import SendMessage from "../Components/SendMessage";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  console.log("API_KEY is:", process.env.NEXT_PUBLIC_API_KEY);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-gradient-to-l relative from-blue-200 to-purple-200 h-[100vh]">
      {/* {isLoading ? <Welcome /> : null} */}

      <>
        <Header />

        <SendMessage />
      </>
    </div>
  );
};

export default page;
