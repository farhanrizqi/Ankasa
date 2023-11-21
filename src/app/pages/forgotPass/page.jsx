"use client";
import React, { useState } from "react";
import InputForm from "@/app/components/InputForm";
import Title from "@/app/components/Title";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import groupAnkasa from "../../../../public/images/groupAnkasa.png";

export default function ForgotPass() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    router.push("/pages/otp");
    e.preventDefault();
    // Lakukan pengolahan data pendaftaran di sini
  };

  return (
    <div className="md:flex md:justify-center md:items-center lg:flex h-screen">
      {/* Kolom Kiri */}
      <div
        className={`w-auto h-[100%] lg:w-3/5 hidden sm:hidden md:hidden lg:flex lg:bg-primary lg:p-4 lg:flex-col lg:justify-center lg:items-center`}
      >
        {/* Left Content */}
        <Image
          src={groupAnkasa}
          width={500}
          height={500}
          alt="Ankasa"
          placeholder="blur"
          quality={100}
          className="w-1/2 mb-4"
        />
      </div>

      {/* Kolom Kanan */}
      <div className="w-auto mt-10 md:h-auto md:w-1/2 bg-white-200 md:px-0 lg:pt-0  md:border-5 md:rounded-md md:border-primary md:shadow-2xl md:shadow-blue-300/50 lg:border-none lg:shadow-none">
        <div className="flex mb-5 lg:-mt-10">
          <div className="w-3/5 flex flex-col mx-9 md:mx-12 mt-12 lg:ml-10">
            <div>
              <Title />
            </div>
            <div className="mt-4 ">
              <hr className="border-t-2 border-primary w-[90%] md:w-[100%] lg:w-[75%]" />
            </div>
          </div>
          <div className="w-2/3 h-11 mt-12 flex items-center justify-center bg-primary rounded-l-xl md:mr-0 ">
            <h1 className="text-white text-lg text-center font-bold">
              Forgot Password
            </h1>
          </div>
        </div>
        <div className="mx-5">
          {/* Konten Kolom Kanan */}
          <div className="container flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit}>
              <InputForm
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <button
                className="w-80 mb-10 bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg shadow-blue-400/50"
                type="submit"
              >
                SEND
              </button>
            </form>

            <div className="mt-4 flex flex-col items-center w-full md:pb-11">
              <hr className="border-t-2 border-gray-200 w-[80%] my-5 lg:w-[55%]" />
              <h1 className="text-md text-gray-600">
                Remember your password ?{" "}
                <Link
                  href="/pages/login"
                  className="text-blue-500 text-md font-bold hover:underline"
                >
                  Tap here
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
