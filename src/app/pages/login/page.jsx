"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";
import InputForm from "@/app/components/InputForm";
import Title from "@/app/components/Title";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import groupAnkasa from "../../../../public/images/groupAnkasa.png";

export default function login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
        {
          email,
          password,
        }
      );
      Swal.fire({
        icon: "success",
        title: "Login Success!",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        const token = response.data.data.access_token;
        console.log(response.data.data.access_token);
        Cookies.set("token", token);
        // localStorage.set("token", token);
        router.push("/");
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message,
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
            <h1 className="text-white text-lg text-center font-bold">Login</h1>
          </div>
        </div>
        <div className="mx-10">
          {/* Konten Kolom Kanan */}
          <div className="container flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit}>
              <InputForm
                label="Email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputForm
                label="Password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-80 mb-10 bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg shadow-blue-400/50"
                type="submit"
                disabled={loading}
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
                  <h1 className="text-white text-md font-semibold">LOGIN</h1>
                )}
              </button>
            </form>

            <div className="mt-4 flex flex-col items-center md:pb-11">
              <h1 className="text-md text-gray-600">
                Forgot your password ?{" "}
                <Link
                  href="/pages/forgotPass"
                  className="text-blue-500 text-md font-bold hover:underline"
                >
                  Tap here
                </Link>
              </h1>
              <hr className="border-t-2 border-gray-200 w-[80%] my-5" />
              <h1 className="text-md text-gray-600">
                Don't have an account ?{" "}
                <Link
                  href="/pages/registration"
                  className="text-blue-500 text-md font-bold hover:underline"
                >
                  Sign up here
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
