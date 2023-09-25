"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dummy from "../../../public/images/dummyImg.jpg";
const token = Cookies.get("token");

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignIn = () => {
    router.push("/pages/login"); // Navigasi ke halaman Sign In
  };

  const handleSignUp = () => {
    router.push("/pages/registration"); // Navigasi ke halaman Sign Up
  };

  const handleTicket = () => {
    router.push("/pages/tickets");
  };

  const handleProfile = () => {
    router.push("/pages/profile");
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener scroll saat komponen dimount
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`w-[100%] sticky p-4 ${hasShadow ? "shadow-md" : ""}`}>
      {" "}
      <div className="flex items-center justify-evenly">
        <div className="flex items-center ">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <div className="flex items-center lg:pl-16">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="25"
                  viewBox="0 0 50 35"
                  fill="none"
                >
                  <path
                    d="M6.29307 32.9371C6.78369 33.6656 7.47274 34.0788 8.19382 34.0777L18.3921 34.0586C19.1969 34.0571 19.9901 33.7973 20.7076 33.3003L43.4385 17.576C45.5275 16.1308 47.4001 14.068 48.6743 11.3661C50.1047 8.3331 50.2602 6.1382 49.6954 4.5876C49.1321 3.03594 47.7626 1.89642 45.1447 1.66425C42.8127 1.45765 40.4932 2.29472 38.4042 3.73882L30.7082 9.06261L13.6226 0.323454C13.4172 0.134803 13.1785 0.0243769 12.9313 0.00359444C12.6841 -0.017188 12.4373 0.052427 12.2164 0.205242L7.07978 3.75905C6.2462 4.3352 6.04464 5.85172 6.67588 6.79742L18.8803 17.2448L10.8172 22.8231L5.16497 18.9392C4.97023 18.8053 4.75514 18.7358 4.53706 18.7361C4.31898 18.7365 4.10401 18.8068 3.90952 18.9413L0.774426 21.1106C-0.0411833 21.6751 -0.256023 23.1469 0.339278 24.1011L6.29307 32.9371Z"
                    fill="#2395FF"
                  />
                </svg>
              </div>
              <h1 className="pl-1 font-bold text-xl hidden md:block">Ankasa</h1>
            </div>
          </Link>
          {/* Search Bar di Menu Mobile */}
          <div className="flex items-center mx-10 space-x-2 md:space-x-0 lg:ml-24">
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 lg:pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </span>
              <input
                className="lg:w-60 lg:pl-11 placeholder:italic placeholder:text-fifth block bg-third w-52 border border-none rounded-lg  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs"
                placeholder="Where you want to go ?"
                type="text"
                name="search"
              />
            </label>
          </div>

          {/* Tombol Mobile Menu */}
          <div className="pt-1 md:hidden ">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex md:-ml-5 md:items-center lg:ml-20">
            <Link
              href="/pages/tickets"
              className="text-gray-800 text-sm text-center hover:text-gray-600 md:w-28 lg:mr-16 hover:border-b-2 py-2  hover:border-blue-500"
            >
              Find Ticket
            </Link>
            <Link
              href="/pages/bookings"
              className="text-gray-800 text-sm text-center hover:text-gray-600 md:w-28 hover:border-b-2 py-2  hover:border-blue-500"
            >
              My Booking
            </Link>

            {token ? (
              <div className="hidden ml-8 md:flex w-40 h-10 items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="cursor-pointer"
                >
                  <path
                    d="M21.6 2H2.4C1.08 2 0.012 3.08 0.012 4.4L0 18.8C0 20.12 1.08 21.2 2.4 21.2H21.6C22.92 21.2 24 20.12 24 18.8V4.4C24 3.08 22.92 2 21.6 2ZM20.8 19.0522L3.5 19C2.84 19 2 18.26 2 17.6V6L10.728 11.6209C11.508 12.1129 12.492 12.1129 13.272 11.6209L22 6V17.8522C22 18.5122 21.46 19.0522 20.8 19.0522ZM12 10L2 4H22L12 10Z"
                    fill="#595959"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 25 24"
                  fill="none"
                  className="cursor-pointer ml-1"
                >
                  <path
                    d="M10.9745 2.99609C10.4784 2.99609 10.0757 2.59342 10.0757 2.09727V1.19844C10.0757 0.702294 10.4784 0.299622 10.9745 0.299622C11.4707 0.299622 11.8733 0.702294 11.8733 1.19844V2.09727C11.8733 2.59342 11.4707 2.99609 10.9745 2.99609Z"
                    fill="#595959"
                  />
                  <path
                    d="M18.8188 10.8406C18.3226 10.8406 17.92 10.4379 17.92 9.94178C17.92 6.28896 14.9539 3.17634 11.3082 3.00376C7.6581 2.83523 4.4039 5.6463 4.0601 9.278C4.03943 9.49506 4.02909 9.71797 4.02909 9.94178C4.02909 10.4379 3.62642 10.8406 3.13027 10.8406C2.63412 10.8406 2.23145 10.4379 2.23145 9.94178C2.23145 9.66134 2.24448 9.38091 2.27054 9.10857C2.70333 4.53536 6.80062 0.992196 11.3932 1.20836C15.9835 1.42543 19.7176 5.3434 19.7176 9.94178C19.7176 10.4384 19.3149 10.8406 18.8188 10.8406Z"
                    fill="#595959"
                  />
                  <path
                    d="M20.5036 16.971C20.282 16.971 20.0595 16.8892 19.8856 16.7252C18.6362 15.5423 17.9194 13.8768 17.9194 12.156C17.9194 11.6599 18.3221 11.2572 18.8183 11.2572C19.3144 11.2572 19.7171 11.6599 19.7171 12.156C19.7171 13.3852 20.229 14.5752 21.1215 15.4197C21.4819 15.7608 21.4976 16.3297 21.1565 16.6906C20.9799 16.8766 20.7417 16.971 20.5036 16.971Z"
                    fill="#595959"
                  />
                  <path
                    d="M1.44479 16.971C1.20615 16.971 0.96841 16.8771 0.791791 16.6901C0.450687 16.3297 0.466416 15.7608 0.826845 15.4197C1.71938 14.5752 2.23126 13.3856 2.23126 12.156C2.23126 11.6599 2.63393 11.2572 3.13008 11.2572C3.62623 11.2572 4.02891 11.6599 4.02891 12.156C4.02891 13.8777 3.31209 15.5432 2.06273 16.7252C1.88836 16.8892 1.66635 16.971 1.44479 16.971Z"
                    fill="#595959"
                  />
                  <path
                    d="M10.9746 23.6691C8.53877 23.6691 6.48047 21.6108 6.48047 19.1749C6.48047 18.6788 6.88314 18.2761 7.37929 18.2761C7.87544 18.2761 8.27812 18.6788 8.27812 19.1749C8.27812 20.6364 9.5131 21.8714 10.9746 21.8714C12.4361 21.8714 13.6711 20.6364 13.6711 19.1749C13.6711 18.6788 14.0737 18.2761 14.5699 18.2761C15.066 18.2761 15.4687 18.6788 15.4687 19.1749C15.4687 21.6108 13.4104 23.6691 10.9746 23.6691Z"
                    fill="#595959"
                  />
                  <path
                    d="M2.68032 20.0738C1.5851 20.0738 0.610779 19.4042 0.19777 18.3678C-0.215689 17.3301 0.0310381 16.1729 0.826497 15.4197C1.18692 15.0781 1.75543 15.0939 2.09743 15.4543C2.43854 15.8147 2.42326 16.3837 2.06283 16.7252C1.66914 17.0982 1.81385 17.5679 1.86778 17.7027C1.92126 17.8366 2.13833 18.2761 2.68032 18.2761C3.17647 18.2761 3.57914 18.6788 3.57914 19.175C3.57914 19.6711 3.17692 20.0738 2.68032 20.0738Z"
                    fill="#595959"
                  />
                  <path
                    d="M19.268 20.0737C18.7718 20.0737 18.3691 19.6711 18.3691 19.1749C18.3691 18.6788 18.7718 18.2761 19.268 18.2761C19.8104 18.2761 20.0279 17.8348 20.0818 17.6995C20.1353 17.5651 20.2796 17.0973 19.8859 16.7247C19.5255 16.3832 19.5097 15.8147 19.8508 15.4538C20.1924 15.0934 20.7609 15.0776 21.1218 15.4187C21.9172 16.172 22.1644 17.3283 21.7519 18.3642C21.3384 19.4028 20.3632 20.0737 19.268 20.0737Z"
                    fill="#595959"
                  />
                  <path
                    d="M3.12978 13.0544C2.63363 13.0544 2.23096 12.6517 2.23096 12.1555V9.94173C2.23096 9.44558 2.63363 9.04291 3.12978 9.04291C3.62594 9.04291 4.02861 9.44558 4.02861 9.94173V12.1555C4.02861 12.6517 3.62639 13.0544 3.12978 13.0544Z"
                    fill="#595959"
                  />
                  <path
                    d="M18.8187 13.0544C18.3226 13.0544 17.9199 12.6517 17.9199 12.1555V9.94173C17.9199 9.44558 18.3226 9.04291 18.8187 9.04291C19.3149 9.04291 19.7176 9.44558 19.7176 9.94173V12.1555C19.7176 12.6517 19.3149 13.0544 18.8187 13.0544Z"
                    fill="#595959"
                  />
                  <path
                    d="M19.2683 20.0738H2.68056C2.18441 20.0738 1.78174 19.6711 1.78174 19.1749C1.78174 18.6788 2.18441 18.2761 2.68056 18.2761H19.2679C19.764 18.2761 20.1667 18.6788 20.1667 19.1749C20.1667 19.6711 19.7645 20.0738 19.2683 20.0738Z"
                    fill="#595959"
                  />
                  <circle
                    cx="18.7645"
                    cy="5.39294"
                    r="4.89294"
                    fill="#2395FF"
                    stroke="white"
                  />
                </svg>
                <Image
                  src={dummy}
                  width={40}
                  alt="ImgProfile"
                  className="rounded-full border-2 border-main p-0.5 cursor-pointer"
                  onClick={handleProfile}
                />
              </div>
            ) : (
              <div className="flex justify-between lg:ml-24">
                <button
                  className="block h-10 flex-1 px-2 py-2 bg-primary border border-primary rounded-lg text-sm text-white text-bold hover:text-primary hover:border-primary hover:bg-white"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                <div className="border-x mx-3 bg-gray-300" />
                <button
                  className="block w-28 h-10 flex-1 px-2 py-2 bg-primary border border-primary rounded-lg text-sm text-white text-bold hover:text-primary hover:border-primary hover:bg-white"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="mt-4 md:hidden">
          <Link
            href="/pages/tickets"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Find Ticket
          </Link>
          <Link
            href="/pages/bookings"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            My Booking
          </Link>
          <div className="border-t border-gray-300 my-4" />
          {token ? (
            <div className="flex w-full md:flex md:w-40 h-10 items-center justify-end gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="cursor-pointer"
              >
                <path
                  d="M21.6 2H2.4C1.08 2 0.012 3.08 0.012 4.4L0 18.8C0 20.12 1.08 21.2 2.4 21.2H21.6C22.92 21.2 24 20.12 24 18.8V4.4C24 3.08 22.92 2 21.6 2ZM20.8 19.0522L3.5 19C2.84 19 2 18.26 2 17.6V6L10.728 11.6209C11.508 12.1129 12.492 12.1129 13.272 11.6209L22 6V17.8522C22 18.5122 21.46 19.0522 20.8 19.0522ZM12 10L2 4H22L12 10Z"
                  fill="#595959"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                className="cursor-pointer ml-1"
              >
                <path
                  d="M10.9745 2.99609C10.4784 2.99609 10.0757 2.59342 10.0757 2.09727V1.19844C10.0757 0.702294 10.4784 0.299622 10.9745 0.299622C11.4707 0.299622 11.8733 0.702294 11.8733 1.19844V2.09727C11.8733 2.59342 11.4707 2.99609 10.9745 2.99609Z"
                  fill="#595959"
                />
                <path
                  d="M18.8188 10.8406C18.3226 10.8406 17.92 10.4379 17.92 9.94178C17.92 6.28896 14.9539 3.17634 11.3082 3.00376C7.6581 2.83523 4.4039 5.6463 4.0601 9.278C4.03943 9.49506 4.02909 9.71797 4.02909 9.94178C4.02909 10.4379 3.62642 10.8406 3.13027 10.8406C2.63412 10.8406 2.23145 10.4379 2.23145 9.94178C2.23145 9.66134 2.24448 9.38091 2.27054 9.10857C2.70333 4.53536 6.80062 0.992196 11.3932 1.20836C15.9835 1.42543 19.7176 5.3434 19.7176 9.94178C19.7176 10.4384 19.3149 10.8406 18.8188 10.8406Z"
                  fill="#595959"
                />
                <path
                  d="M20.5036 16.971C20.282 16.971 20.0595 16.8892 19.8856 16.7252C18.6362 15.5423 17.9194 13.8768 17.9194 12.156C17.9194 11.6599 18.3221 11.2572 18.8183 11.2572C19.3144 11.2572 19.7171 11.6599 19.7171 12.156C19.7171 13.3852 20.229 14.5752 21.1215 15.4197C21.4819 15.7608 21.4976 16.3297 21.1565 16.6906C20.9799 16.8766 20.7417 16.971 20.5036 16.971Z"
                  fill="#595959"
                />
                <path
                  d="M1.44479 16.971C1.20615 16.971 0.96841 16.8771 0.791791 16.6901C0.450687 16.3297 0.466416 15.7608 0.826845 15.4197C1.71938 14.5752 2.23126 13.3856 2.23126 12.156C2.23126 11.6599 2.63393 11.2572 3.13008 11.2572C3.62623 11.2572 4.02891 11.6599 4.02891 12.156C4.02891 13.8777 3.31209 15.5432 2.06273 16.7252C1.88836 16.8892 1.66635 16.971 1.44479 16.971Z"
                  fill="#595959"
                />
                <path
                  d="M10.9746 23.6691C8.53877 23.6691 6.48047 21.6108 6.48047 19.1749C6.48047 18.6788 6.88314 18.2761 7.37929 18.2761C7.87544 18.2761 8.27812 18.6788 8.27812 19.1749C8.27812 20.6364 9.5131 21.8714 10.9746 21.8714C12.4361 21.8714 13.6711 20.6364 13.6711 19.1749C13.6711 18.6788 14.0737 18.2761 14.5699 18.2761C15.066 18.2761 15.4687 18.6788 15.4687 19.1749C15.4687 21.6108 13.4104 23.6691 10.9746 23.6691Z"
                  fill="#595959"
                />
                <path
                  d="M2.68032 20.0738C1.5851 20.0738 0.610779 19.4042 0.19777 18.3678C-0.215689 17.3301 0.0310381 16.1729 0.826497 15.4197C1.18692 15.0781 1.75543 15.0939 2.09743 15.4543C2.43854 15.8147 2.42326 16.3837 2.06283 16.7252C1.66914 17.0982 1.81385 17.5679 1.86778 17.7027C1.92126 17.8366 2.13833 18.2761 2.68032 18.2761C3.17647 18.2761 3.57914 18.6788 3.57914 19.175C3.57914 19.6711 3.17692 20.0738 2.68032 20.0738Z"
                  fill="#595959"
                />
                <path
                  d="M19.268 20.0737C18.7718 20.0737 18.3691 19.6711 18.3691 19.1749C18.3691 18.6788 18.7718 18.2761 19.268 18.2761C19.8104 18.2761 20.0279 17.8348 20.0818 17.6995C20.1353 17.5651 20.2796 17.0973 19.8859 16.7247C19.5255 16.3832 19.5097 15.8147 19.8508 15.4538C20.1924 15.0934 20.7609 15.0776 21.1218 15.4187C21.9172 16.172 22.1644 17.3283 21.7519 18.3642C21.3384 19.4028 20.3632 20.0737 19.268 20.0737Z"
                  fill="#595959"
                />
                <path
                  d="M3.12978 13.0544C2.63363 13.0544 2.23096 12.6517 2.23096 12.1555V9.94173C2.23096 9.44558 2.63363 9.04291 3.12978 9.04291C3.62594 9.04291 4.02861 9.44558 4.02861 9.94173V12.1555C4.02861 12.6517 3.62639 13.0544 3.12978 13.0544Z"
                  fill="#595959"
                />
                <path
                  d="M18.8187 13.0544C18.3226 13.0544 17.9199 12.6517 17.9199 12.1555V9.94173C17.9199 9.44558 18.3226 9.04291 18.8187 9.04291C19.3149 9.04291 19.7176 9.44558 19.7176 9.94173V12.1555C19.7176 12.6517 19.3149 13.0544 18.8187 13.0544Z"
                  fill="#595959"
                />
                <path
                  d="M19.2683 20.0738H2.68056C2.18441 20.0738 1.78174 19.6711 1.78174 19.1749C1.78174 18.6788 2.18441 18.2761 2.68056 18.2761H19.2679C19.764 18.2761 20.1667 18.6788 20.1667 19.1749C20.1667 19.6711 19.7645 20.0738 19.2683 20.0738Z"
                  fill="#595959"
                />
                <circle
                  cx="18.7645"
                  cy="5.39294"
                  r="4.89294"
                  fill="#2395FF"
                  stroke="white"
                />
              </svg>
              <Image
                src={dummy}
                width={40}
                alt="ImgProfile"
                className="rounded-full border-2 border-main p-0.5 cursor-pointer"
                onClick={handleProfile}
              />
            </div>
          ) : (
            <div className="flex justify-between lg:ml-24">
              <button
                className="block h-10 flex-1 px-2 py-2 bg-primary border border-primary rounded-lg text-sm text-white text-bold hover:text-primary hover:border-primary hover:bg-white"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <div className="border-x mx-3 bg-gray-300" />
              <button
                className="block w-28 h-10 flex-1 px-2 py-2 bg-primary border border-primary rounded-lg text-sm text-white text-bold hover:text-primary hover:border-primary hover:bg-white"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
