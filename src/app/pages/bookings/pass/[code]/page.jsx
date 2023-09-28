"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import garuda from "@/../../public/images/garuda.png";
import barcode from "@/../../public/images/barcode.png";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import Barcode from "react-barcode";
import Skeleton from "react-loading-skeleton";

const token = Cookies.get("token");

export default function pass() {
  const router = useRouter();
  const params = useParams();
  const code = params.code;
  const [tab, setTab] = useState(false);
  const [dataTicket, setDataTicket] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [codeBar, setCodeBar] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}booking/tickets/${code}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        // console.log(data);

        const flight = data.result.ticket;
        const takeoffTime = flight.takeoff.substr(11, 5);
        const landingTime = flight.landing.substr(11, 5);
        const takeoffDate = flight.takeoff.substr(0, 10);
        const landingDate = flight.landing.substr(0, 10);

        const takeoffHour = parseInt(takeoffTime.split(":")[0]);
        const takeoffMinute = parseInt(takeoffTime.split(":")[1]);
        const landingHour = parseInt(landingTime.split(":")[0]);
        const landingMinute = parseInt(landingTime.split(":")[1]);

        const hours = landingHour - takeoffHour;
        const minutes = landingMinute - takeoffMinute;

        const formattedTimeDistance = `${hours} hours ${minutes} minutes`;

        const takeoffDateTime = new Date(takeoffDate);
        const landingDateTime = new Date(landingDate);
        const options = {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        };
        const formattedTakeoffDate = takeoffDateTime.toLocaleDateString(
          "en-US",
          options
        );
        const formattedLandingDate = landingDateTime.toLocaleDateString(
          "en-US",
          options
        );

        const modifiedData = {
          ...data,
          takeoffTime,
          landingTime,
          takeoffDate: formattedTakeoffDate,
          landingDate: formattedLandingDate,
          timeDistance: formattedTimeDistance,
        };

        setDataTicket(modifiedData);
        setIsLoading(false);
        setCodeBar(response.data.data.result.ticket.code);
        // console.log(response.data.data.result.ticket.code);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  console.log(dataTicket);

  // const ticketCode = dataTicket?.result?.ticket?.code;
  // setCodeBar(ticketCode);

  const dataClass = () => {
    const price = dataTicket?.result?.ticket?.price;
    let result = "";

    if (price <= 200) {
      return (result = "Economy");
    } else if (price >= 200) {
      return (result = "Business");
    } else if (price >= 500) {
      return (result = "First Class");
    }
  };

  const handleTab = () => {
    if (tab) {
      setTab(false);
    } else {
      setTab(true);
    }
  };

  const handleBooking = () => {
    router.push("/pages/bookings");
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-auto p-5 bg-primary lg:px-10 lg:py-5 ">
        <div className="w-full h-auto p-5 flex flex-col justify-center bg-white rounded-xl">
          <div className="w-full flex justify-between md:mb-0">
            <div>
              {isLoading ? (
                <div className="w-full h-full justify-center items-center flex ">
                  <h1 className="font-semibold text-md lg:text-xl mr-2">
                    Booking Pass
                  </h1>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="2" r="0" fill="#2395ff">
                      <animate
                        attributeName="r"
                        begin="0"
                        calcMode="spline"
                        dur="1s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                    <circle
                      cx="12"
                      cy="2"
                      r="0"
                      fill="#2395ff"
                      transform="rotate(45 12 12)"
                    >
                      <animate
                        attributeName="r"
                        begin="0.125s"
                        calcMode="spline"
                        dur="1s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                    <circle
                      cx="12"
                      cy="2"
                      r="0"
                      fill="#2395ff"
                      transform="rotate(90 12 12)"
                    >
                      <animate
                        attributeName="r"
                        begin="0.25s"
                        calcMode="spline"
                        dur="1s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                    <circle
                      cx="12"
                      cy="2"
                      r="0"
                      fill="#2395ff"
                      transform="rotate(135 12 12)"
                    >
                      <animate
                        attributeName="r"
                        begin="0.375s"
                        calcMode="spline"
                        dur="1s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                    <circle
                      cx="12"
                      cy="2"
                      r="0"
                      fill="#2395ff"
                      transform="rotate(180 12 12)"
                    >
                      <animate
                        attributeName="r"
                        begin="0.5s"
                        calcMode="spline"
                        dur="1s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                    <circle
                      cx="12"
                      cy="2"
                      r="0"
                      fill="#2395ff"
                      transform="rotate(225 12 12)"
                    >
                      <animate
                        attributeName="r"
                        begin="0.625s"
                        calcMode="spline"
                        dur="1s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                    <circle
                      cx="12"
                      cy="2"
                      r="0"
                      fill="#2395ff"
                      transform="rotate(270 12 12)"
                    >
                      <animate
                        attributeName="r"
                        begin="0.75s"
                        calcMode="spline"
                        dur="1s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                    <circle
                      cx="12"
                      cy="2"
                      r="0"
                      fill="#2395ff"
                      transform="rotate(315 12 12)"
                    >
                      <animate
                        attributeName="r"
                        begin="0.875s"
                        calcMode="spline"
                        dur="1s"
                        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                        repeatCount="indefinite"
                        values="0;2;0;0"
                      />
                    </circle>
                  </svg>
                </div>
              ) : (
                <h1 className="font-semibold text-md lg:text-xl">
                  Booking Pass
                </h1>
              )}
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
          <div className="lg:flex ">
            {isLoading ? (
              <Skeleton count={10} />
            ) : (
              <>
                <div className="w-full h-auto border-t-2 border-x-2 rounded-t-lg p-5 mt-5 lg:border-l-2 lg:border-y-2 lg:rounded-l-lg lg:border-t-none lg:rounded-t-none">
                  <div className="w-full p-3">
                    <div className="flex">
                      <div>
                        <Image
                          src={dataTicket?.result?.ticket?.airline?.photo}
                          width={150}
                          height={75}
                          alt="Airline"
                          className="md:hidden"
                        />
                        <Image
                          src={dataTicket?.result?.ticket?.airline?.photo}
                          width={200}
                          height={100}
                          alt="Airline"
                          className="hidden md:block"
                        />
                      </div>
                      <div className="w-full flex justify-center items-center space-x-5 ">
                        <div>
                          <h1 className="font-bold text-md lg:text-xl">
                            {dataTicket?.result?.ticket?.from?.code}
                          </h1>
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
                          <h1 className="font-bold text-md lg:text-xl">
                            {dataTicket?.result?.ticket?.to?.code}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-5">
                      <div className="flex-1">
                        <div>
                          <h1 className="text-xs text-eighth lg:text-lg">
                            Code
                          </h1>
                        </div>
                        <div>
                          <h1 className="text-xs lg:text-lg">{`${dataTicket?.result?.ticket?.from?.code}-${dataTicket?.result?.id}`}</h1>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div>
                          <h1 className="text-xs text-eighth lg:text-lg">
                            Class
                          </h1>
                        </div>
                        <div>
                          <h1 className="text-xs lg:text-lg">{dataClass()}</h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-5">
                      <div className="flex-1">
                        <div>
                          <h1 className="text-xs text-eighth lg:text-lg">
                            Terminal
                          </h1>
                        </div>
                        <div>
                          <h1 className="text-xs lg:text-lg">
                            {dataTicket?.result?.ticket?.from?.terminal}
                          </h1>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div>
                          <h1 className="text-xs text-eighth lg:text-lg">
                            Gate
                          </h1>
                        </div>
                        <div>
                          <h1 className="text-xs lg:text-lg">
                            {dataTicket?.result?.ticket?.airlineId}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <div>
                          <h1 className="text-xs text-eighth lg:text-lg">
                            Departure
                          </h1>
                        </div>
                        <div>
                          <h1 className="text-xs lg:text-lg">{`${dataTicket.takeoffDate} - ${dataTicket.takeoffTime}`}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t-2 border-dashed lg:border-l-2 lg:mt-5"></div>
                <div className="w-full h-auto p-5 border-b-2 border-x-2 rounded-b-lg lg:w-1/3 lg:mt-5 lg:flex lg:p-0 lg:rounded-b-none lg:border-r-2 lg:border-y-2 lg:rounded-r-lg lg:border-t-none lg:rounded-t-none lg:h-auto">
                  <div className="w-full flex flex-col justify-center items-center lg:-rotate-90 ">
                    <div className="flex justify-center md:hidden">
                      <Barcode
                        value={codeBar}
                        width={0.6}
                        background={"transparent"}
                        font="Poppins"
                        fontOptions="uppercase"
                        fontSize={5}
                        text={"Scan your code"}
                        textMargin={15}
                      />
                    </div>
                    <div className="hidden md:flex justify-center ">
                      <Barcode
                        value={codeBar}
                        width={0.8}
                        background={"transparent"}
                        font="Poppins"
                        fontOptions="uppercase"
                        fontSize="6px"
                        textMargin={15}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex w-full justify-center items-center mt-2">
            <button
              className=" px-4 py-2 font-bold bg-primary border border-primary rounded-lg text-white hover:text-primary hover:bg-white md:w-[40%]"
              onClick={handleBooking}
            >
              <h1 className="text-sm font-medium ">Go to my bookings</h1>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
