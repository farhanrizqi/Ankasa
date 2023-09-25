"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import InputForm from "@/app/components/InputForm";
import Title from "@/app/components/Title";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import groupAnkasa from "../../../../public/images/groupAnkasa.png";

export default function registration() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      Swal({
        title: "Registration",
        text: "Must fill in all fields",
        icon: "warning",
        dangerMode: true,
      }).then((confirm) => {
        setLoading(false);
        if (confirm) {
          // ...
        }
      });
    } else {
      const body = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}auth/register`, body)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Registration",
            text: "Registration Successful!",
            icon: "success",
          }).then((confirm) => {
            setLoading(false);
            if (confirm) {
              router.push("/pages/login");
            }
          });
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              err.response?.data?.message ||
              "An error occurred during registration.",
          });
        });
    }
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
              Registration
            </h1>
          </div>
        </div>
        <div className="mx-24">
          {/* Konten Kolom Kanan */}
          <div className="container flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit}>
              <InputForm
                label="Fullname"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <InputForm
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <InputForm
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                className="w-80 bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg shadow-blue-400/50"
                type="submit"
              >
                {loading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="w-full justify-center"
                  >
                    <circle cx="18" cy="12" r="0" fill="white">
                      <animate
                        attributeName="r"
                        begin=".67"
                        calcMode="spline"
                        dur="1.5s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                    <circle cx="12" cy="12" r="0" fill="white">
                      <animate
                        attributeName="r"
                        begin=".33"
                        calcMode="spline"
                        dur="1.5s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                    <circle cx="6" cy="12" r="0" fill="white">
                      <animate
                        attributeName="r"
                        begin="0"
                        calcMode="spline"
                        dur="1.5s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                  </svg>
                ) : (
                  <h1 className="text-white text-md font-semibold">REGISTER</h1>
                )}
              </button>
              <div className="flex items-center mt-5 space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="appearance-none  h-5 w-5 border border-primary rounded-md checked:bg-primary checked:border-transparent focus:ring-primary checked:text-black"
                />
                <label htmlFor="terms" className="text-gray-700">
                  Accept terms & conditions
                </label>
              </div>
              <div className="mt-4 flex flex-col items-center md:pb-11">
                <hr className="border-t-2 border-gray-200 w-[80%] my-7" />
                <h1 className="text-md text-gray-600">
                  Already have an account ?{" "}
                  <Link
                    href="/pages/login"
                    className="text-blue-500 text-md font-bold hover:underline"
                  >
                    Sign in here
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
