import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <div className="flex  justify-center items-center h-[100vh] w-full bg-gradient-to-l from-blue-200 to-purple-200">
      <div className="bg-white w-[40pc] p-4 rounded-lg shadow-2xl shadow-gray-500">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full absolute top-3 right-3" />
            <Image
              src="/istockphoto-1010001882-612x612-removebg-preview.png"
              alt="chatbot.png"
              width={100}
              height={100}
            />
          </div>

          <div className="flex justify-center flex-col items-center mt-4 gap-2">
            <h1 className="text-3xl font-bold w-80 text-center">
              Welcome to your AI Companion
            </h1>
            <p className="text-gray-600 w-80 text-center text-xl mt-1">
              Your intelligent partner for seamless productivity. Let's begin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
