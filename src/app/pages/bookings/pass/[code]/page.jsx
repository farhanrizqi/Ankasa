"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import visa from "@/../../public/images/visa.svg";
import garuda from "@/../../public/images/garuda.png";
import barcode from "@/../../public/images/barcode.png";
import { useRouter } from "next/navigation";

export default function detailTicket() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="w-full h-auto p-5 bg-primary lg:px-10 lg:py-5 ">
        <div className="w-full h-auto p-5 flex flex-col justify-center  bg-white rounded-xl ">
          <div className="w-full flex justify-between md:mb-0">
            <div>
              <h1 className="font-semibold text-md">Booking Pass</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="23"
                viewBox="0 0 5 23"
                fill="none"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#2395FF" />
                <circle cx="2.5" cy="11.5" r="2.5" fill="#2395FF" />
                <circle cx="2.5" cy="20.5" r="2.5" fill="#2395FF" />
              </svg>
            </div>
          </div>
          <div className="md:flex ">
            <div className="w-full h-auto border-t-2 border-x-2 rounded-t-lg p-5 mt-5 md:border-l-2 md:border-y-2 md:rounded-l-lg md:border-t-none md:rounded-t-none">
              <div className="w-full p-3">
                <div className="flex">
                  <div>
                    <Image src={garuda} width={70} />
                  </div>
                  <div className="w-full flex justify-center items-center space-x-5 ">
                    <div>
                      <h1 className="font-bold text-md">IDN</h1>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                      >
                        <path
                          d="M17.5497 14.7334H0.450071C0.201451 14.7334 7.9948e-05 14.9869 7.9948e-05 15.3V16.4333C7.9948e-05 16.7464 0.201451 17 0.450071 17H17.5497C17.7984 17 17.9997 16.7464 17.9997 16.4333V15.3C17.9997 14.9869 17.7984 14.7334 17.5497 14.7334ZM2.26551 10.9534C2.44213 11.1957 2.69019 11.3331 2.94977 11.3327L6.62114 11.3263C6.91088 11.3258 7.19645 11.2395 7.45475 11.0742L15.6378 5.84498C16.3899 5.36438 17.064 4.67837 17.5227 3.77987C18.0377 2.77121 18.0937 2.04129 17.8903 1.52563C17.6876 1.00962 17.1945 0.630663 16.2521 0.553455C15.4126 0.484748 14.5776 0.763119 13.8255 1.24336L11.055 3.01381L4.90414 0.107566C4.83019 0.0448293 4.74427 0.00810666 4.65527 0.00119535C4.56627 -0.00571596 4.47742 0.0174349 4.3979 0.0682542L2.54872 1.25009C2.24863 1.44169 2.17607 1.94602 2.40332 2.26051L6.79692 5.73484L3.89419 7.58993L1.85939 6.29831C1.78928 6.2538 1.71185 6.23067 1.63334 6.23079C1.55483 6.23092 1.47744 6.25429 1.40743 6.29902L0.278793 7.02044C-0.014826 7.20815 -0.0921683 7.6976 0.12214 8.01493L2.26551 10.9534Z"
                          fill="#979797"
                        />
                      </svg>
                    </div>
                    <div>
                      <h1 className="font-bold text-md">JPN</h1>
                    </div>
                  </div>
                </div>
                <div className="flex mt-5">
                  <div className="flex-1">
                    <div>
                      <h1 className="text-xs text-eighth">Code</h1>
                    </div>
                    <div>
                      <h1 className="text-xs">AB-221</h1>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div>
                      <h1 className="text-xs text-eighth">Class</h1>
                    </div>
                    <div>
                      <h1 className="text-xs">Economy</h1>
                    </div>
                  </div>
                </div>
                <div className="flex mt-5">
                  <div className="flex-1">
                    <div>
                      <h1 className="text-xs text-eighth">Terminal</h1>
                    </div>
                    <div>
                      <h1 className="text-xs">A</h1>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div>
                      <h1 className="text-xs text-eighth">Gate</h1>
                    </div>
                    <div>
                      <h1 className="text-xs">221</h1>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div>
                    <div>
                      <h1 className="text-xs text-eighth">Departure</h1>
                    </div>
                    <div>
                      <h1 className="text-xs">Monday, 20 July ‘20 - 12:33</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-dashed md:border-l-2 md:mt-5"></div>
            <div className="w-full h-auto p-5 border-b-2 border-x-2 rounded-b-lg md:w-1/3 md:mt-5 md:flex md:p-0 md:rounded-b-none md:border-r-2 md:border-y-2 md:rounded-r-lg md:border-t-none md:rounded-t-none ">
              <div className="w-full flex flex-col justify-center items-center md:-rotate-90 ">
                <div className="flex justify-center">
                  <Image src={barcode} width={70} />
                  <Image src={barcode} width={70} />
                  <Image src={barcode} width={70} />
                </div>
                <div className="w-full">
                  <h1 className="text-xs writing-vertical text-center">
                    1234 5678 90AS 6543 21CV
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
