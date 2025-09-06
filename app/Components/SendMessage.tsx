"use client";
import { SayHello } from "@/Services/sayHello.service";
import React, { useEffect, useState } from "react";
import { TbMessageChatbot } from "react-icons/tb";

interface responseData {
  choices: {
    finish_reason: string;
    index: number;
    message: { role: string; content: string };
  }[];
  id: string;
  model: string;
}

export default function SendMessage() {
  const [data, setData] = useState<responseData | null>(null);

  useEffect(() => {
    const sayHello = async () => {
      const data = await SayHello();
      setData(data);
    };
    sayHello();
  }, []);

  return (
    <div className="my-20 mx-60">
      <div className="flex gap-5 items-start">
        <TbMessageChatbot size={30} />
        <div className="bg-white w-fit p-4 rounded-2xl shadow-lg shadow-gray-400 mt-4">
          <h1>{data?.choices?.[0]?.message?.content}</h1>
        </div>
      </div>
    </div>
  );
}
