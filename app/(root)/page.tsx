"use client";
import React, { useEffect, useState } from "react";
import Welcome from "../Welcome/page";
import Header from "../Components/Header";
import { IoMdSend } from "react-icons/io";
import SendMessage from "../Components/SendMessage";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        <form className="fixed bottom-0 w-full flex gap-3 justify-center bg-white p-4">
          <input
            type="text"
            name=""
            id=""
            className="w-[60pc] p-4 rounded-xl bg-[#e7e7e7]"
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white p-4 rounded-xl"
          >
            <IoMdSend size={20} />
          </button>
        </form>
      </>
    </div>
  );
};

export default page;
