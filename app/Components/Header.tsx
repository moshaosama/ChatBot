import Image from "next/image";
import React from "react";

const Links = [
  {
    name: "Features",
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];

const Header = () => {
  return (
    <div className="bg-white  shadow-md shadow-gray-400">
      <div className=" flex mx-20 justify-between items-center">
        <div className="flex items-center gap-3 py-3">
          <Image
            src="/istockphoto-1010001882-612x612-removebg-preview.png"
            alt="Chatbot.png"
            width={70}
            height={70}
          />
          <h1 className="text-xl font-bold">ChatBot</h1>
        </div>
        <div>
          <div className="flex gap-5  items-center text-lg font-bold">
            {Links?.map((link) => (
              <div key={link.name}>
                <h1>{link.name}</h1>
              </div>
            ))}

            <div className="bg-blue-500 w-32 text-center text-white rounded-xl py-2">
              get started
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
