"use client";
import { SayHello } from "@/Services/sayHello.service";
import { sendMessage } from "@/Services/sendMessage.service";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import { TbMessageChatbot } from "react-icons/tb";
import { BeatLoader } from "react-spinners";

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
  const [Messages, setMessages] = useState([
    {
      role: "assistant",
      messsage: data?.choices?.[0]?.message?.content || "",
    },
    {
      role: "user",
      messsage: "",
    },
  ]);

  useEffect(() => {
    const sayHello = async () => {
      const data = await SayHello();
      setData(data);
      setMessages([
        {
          role: "assistant",
          messsage: data?.choices?.[0]?.message?.content || "",
        },
      ]);
    };
    sayHello();
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData: any) => {
    reset();
    const dataResponse = await sendMessage(formData.message as string);
    setData(dataResponse);
    setMessages((prev) => [
      ...prev,
      { role: "user", messsage: formData.message as string },
    ]);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        messsage: "loading",
      },
    ]);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        role: "assistant",
        messsage: dataResponse?.choices?.[0]?.message?.content || "",
      };
      return updated;
    });
  };
  return (
    <>
      <div className="my-20 mx-60">
        {Messages?.map((msg) => (
          <>
            {msg?.role === "assistant" && (
              <div className="flex gap-5">
                <TbMessageChatbot size={30} />
                {msg.messsage === "loading" ? (
                  <BeatLoader />
                ) : (
                  <div className="bg-white w-fit p-4 rounded-2xl shadow-lg shadow-gray-400 mt-4">
                    <h1>{msg?.messsage}</h1>
                  </div>
                )}
              </div>
            )}
            {msg?.role === "user" && (
              <div className="flex gap-5 items-start flex-row-reverse">
                <TbMessageChatbot size={30} />
                <div className="bg-white w-fit p-4 rounded-2xl shadow-lg shadow-gray-400 mt-4">
                  <h1>{msg?.messsage}</h1>
                </div>
              </div>
            )}
          </>
        ))}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fixed bottom-0 w-full flex gap-3 justify-center bg-white p-4"
      >
        <input
          type="text"
          className="w-[60pc] p-4 rounded-xl bg-[#e7e7e7]"
          placeholder="Type your message here..."
          {...register("message")}
        />
        <button
          type="submit"
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white p-4 rounded-xl"
        >
          <IoMdSend size={20} />
        </button>
      </form>
    </>
  );
}
