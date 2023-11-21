"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import dummy from "../../../../public/images/dummyImg.jpg";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import axios from "axios";

export default function Profile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("MyBooking");
  const token = Cookies.get("token");
  const [flightData, setFlightData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    city: "",
    address: "",
    postcode: "",
  });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}booking/tickets`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.result;
        const userData = response.data.data.user;

        const modifiedData = data.map((flight) => {
          const takeoffTime = flight.ticket.takeoff.substr(11, 5);
          const landingTime = flight.ticket.landing.substr(11, 5);
          const takeoffDate = flight.ticket.takeoff.substr(0, 10);
          const landingDate = flight.ticket.landing.substr(0, 10);

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

          return {
            ...flight,
            takeoffTime,
            landingTime,
            takeoffDate: formattedTakeoffDate,
            landingDate: formattedLandingDate,
            timeDistance: formattedTimeDistance,
          };
        });

        setFlightData(modifiedData);
        setDataUser(userData);
        console.log(userData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Confirm",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F24545",
      cancelButtonColor: "#979797",
      confirmButtonText: "Yes, sure",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logout success", "Come back soon 🛫", "success").then(
          (confirm) => {
            if (confirm) {
              Cookies.remove("token");
              router.push("/pages/login");
            }
          }
        );
      }
    });
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <Navbar />
      <div className="Main w-full h-auto bg-gray-300 p-5 flex flex-col justify-center items-start lg:flex-row">
        <div className="Left w-full h-auto bg-white rounded-2xl p-7 flex flex-col items-center lg:w-1/3">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-white border-2 border-primary p-2">
              <Image src={dummy} width={100} className="rounded-full" />
            </div>
            <button
              className="block flex-1 px-4 py-2  bg-white border border-primary rounded-lg text-primary font-bold hover:text-primary hover:border-primary hover:bg-white"
              onClick
            >
              Select Photo
            </button>
            <h1 className="text-md font-extrabold">{dataUser.name}</h1>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.66304 14.2366 10.2989 13.7678 10.7678C13.2989 11.2366 12.663 11.5 12 11.5Z"
                  fill="#2395FF"
                />
              </svg>
              <h1 className="text-xs font-light text-eighth">
                Lombok, Indonesia
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-between items-center mt-5 px-2">
            <h1 className="text-md font-bold">Cards</h1>
            <h1 className="text-md text-primary font-bold">+ Add</h1>
          </div>
          <div className="w-full h-auto rounded-xl bg-primary shadow-md shadow-primary mt-3 mx-2 p-4">
            <h1 className="text-md font-bold text-white">
              4441 1235 5512 5551
            </h1>
            <div className="flex justify-between  ">
              <h1 className="text-white font-extralight text-md">X Card</h1>
              <h1 className="text-white font-extralight text-md">$ 1,440.2</h1>
            </div>
          </div>
          <div className="w-full mt-8 px-1">
            <div
              className="flex justify-between"
              onClick={() => handleTabClick("MyProfile")}
            >
              <div className="flex items-center">
                <div className="rounded-full border-2 border-eighth">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11.9557 19.8042L11.5647 17.8428C11.4589 17.8639 11.3521 17.8783 11.1703 17.9029C11.1449 17.9063 11.1181 17.9099 11.0896 17.9138L11.0836 17.9146C11.0338 17.9215 10.9884 17.9286 10.9521 17.9344L10.9015 17.9425L10.8609 17.949C10.8364 17.9529 10.8209 17.9552 10.8094 17.9568C10.8 17.9581 10.796 17.9585 10.796 17.9585L10.794 17.9587C10.5254 17.9851 10.2611 17.9992 9.99993 17.9992C9.73879 17.9992 9.47448 17.9851 9.20583 17.9587L9.20383 17.9585C9.20364 17.9585 9.20308 17.9585 9.20214 17.9583C9.20014 17.9581 9.19637 17.9576 9.19049 17.9568C9.17905 17.9553 9.16352 17.9529 9.13899 17.949L9.09839 17.9425L9.04775 17.9344C9.01143 17.9286 8.96597 17.9215 8.91618 17.9146L8.91026 17.9138C8.88169 17.9099 8.8548 17.9063 8.82937 17.9028C8.6476 17.8783 8.54091 17.8639 8.43519 17.8428L8.43519 17.8428L8.42555 17.8409C8.37956 17.832 8.35841 17.8264 8.31202 17.8141C8.27078 17.8032 8.20959 17.787 8.09323 17.7585C8.0374 17.7447 7.98986 17.7332 7.94828 17.7231C7.82955 17.6943 7.75947 17.6773 7.68392 17.6547C7.62449 17.6364 7.57975 17.6202 7.49318 17.5888C7.45252 17.574 7.40263 17.5559 7.33766 17.5327C7.25154 17.5018 7.19116 17.4808 7.14466 17.4646C7.06714 17.4377 7.02819 17.4241 6.97283 17.4009C6.87987 17.362 6.78797 17.3182 6.63898 17.2473L6.60922 17.2331L6.60574 17.2314C6.53867 17.1996 6.48827 17.1761 6.44757 17.1572C6.37257 17.1222 6.33051 17.1026 6.2778 17.0748C6.18048 17.0227 6.08267 16.9638 5.92804 16.8707L5.91125 16.8606C5.88989 16.8475 5.86914 16.8348 5.84891 16.8224C5.76212 16.7692 5.68487 16.7218 5.60914 16.6744C5.50383 16.6042 5.3933 16.5224 5.23374 16.4035L5.21382 16.3886L5.19354 16.3743C5.13929 16.3359 5.07778 16.2898 5.0114 16.2377C4.94893 16.1865 4.89065 16.1356 4.82233 16.0749L4.97358 15.3694C5.30408 13.8278 6.31921 12.5209 7.73114 11.8192L9.9971 10.6931L12.2632 11.8192C13.6751 12.5209 14.6902 13.8278 15.0207 15.3694L15.1734 16.0815C15.108 16.1392 15.0473 16.1907 14.9882 16.238L14.9874 16.2387C14.9353 16.2805 14.9312 16.2829 14.9234 16.2875C14.9131 16.2934 14.8963 16.3032 14.7541 16.4125C14.5931 16.5325 14.4825 16.6141 14.3752 16.6847L14.3593 16.6951L14.3436 16.7059C14.3137 16.7264 14.3023 16.733 14.2732 16.7499C14.2434 16.7673 14.195 16.7954 14.0892 16.8603L14.065 16.8748C13.9137 16.9659 13.818 17.0234 13.7223 17.0747C13.6694 17.1025 13.6271 17.1223 13.5519 17.1573C13.5117 17.1761 13.4621 17.1992 13.3964 17.2303C13.3456 17.2543 13.3029 17.2746 13.2659 17.2922C13.1629 17.3411 13.1037 17.3693 13.0356 17.3974C12.9672 17.4256 12.8983 17.4498 12.7842 17.4897C12.7506 17.5015 12.713 17.5147 12.6703 17.5298C12.5827 17.5607 12.5232 17.5824 12.4772 17.5991C12.4098 17.6236 12.3714 17.6376 12.3161 17.6547C12.2402 17.6773 12.1696 17.6945 12.0504 17.7234C12.0133 17.7324 11.9715 17.7425 11.9235 17.7543C11.8367 17.7743 11.7517 17.7962 11.6973 17.8102C11.6885 17.8125 11.6805 17.8145 11.6734 17.8163C11.6039 17.8342 11.5777 17.8402 11.5632 17.8431L11.9557 19.8042ZM11.9557 19.8042C11.7839 19.8384 11.6101 19.8618 11.4359 19.8852C11.4102 19.8887 11.3845 19.8921 11.3587 19.8956L14.6605 18.841C14.5601 18.8941 14.4581 18.9417 14.356 18.9893C14.3209 19.0057 14.2857 19.0221 14.2506 19.0387C14.219 19.0537 14.1874 19.0687 14.1558 19.0837C14.0376 19.14 13.9194 19.1962 13.7994 19.2458C13.6755 19.297 13.5426 19.3434 13.4188 19.3867C13.3907 19.3965 13.363 19.4062 13.336 19.4158C13.2939 19.4306 13.252 19.4458 13.21 19.461C13.1066 19.4985 13.003 19.5361 12.8968 19.5685C12.7627 19.6089 12.626 19.642 12.4894 19.675C12.4543 19.6835 12.4192 19.692 12.3841 19.7006C12.3229 19.7144 12.2617 19.7302 12.2004 19.7459C12.1188 19.7669 12.0373 19.7879 11.9557 19.8042ZM8.31438 5.58612C7.51232 6.45985 7.51234 7.802 8.31437 8.67566L9.99715 10.5087L11.6799 8.67566C12.5331 7.74633 12.4713 6.3013 11.5419 5.44812C10.6126 4.59499 9.16756 4.65675 8.31438 5.58612ZM8.31438 5.58612L6.84414 4.23646L8.31438 5.58612Z"
                      fill={`${
                        activeTab === "MyProfile" ? "#2395FF" : "#979797"
                      }`}
                      stroke={`${
                        activeTab === "MyProfile" ? "#2395FF" : "#979797"
                      }`}
                      stroke-width="4"
                    />
                  </svg>
                </div>
                <h1
                  className={`text-md font-bold ml-4 cursor-pointer ${
                    activeTab === "MyProfile" ? "text-primary" : "text-black"
                  }`}
                >
                  Profile
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <g transform="rotate(90 512 512)">
                    <path
                      fill={`${
                        activeTab === "MyProfile" ? "#2395FF" : "#979797"
                      }`}
                      d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="flex justify-between mt-5"
              onClick={() => handleTabClick("MyBooking")}
            >
              <div className="flex items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M8.9271 0.62615L6.48599 5.28026L1.02432 6.029C0.0448775 6.16258 -0.347645 7.29798 0.362634 7.94829L4.31403 11.5689L3.37945 16.6835C3.21123 17.608 4.24674 18.3005 5.11403 17.8682L10 15.4532L14.886 17.8682C15.7533 18.297 16.7888 17.608 16.6206 16.6835L15.686 11.5689L19.6374 7.94829C20.3476 7.29798 19.9551 6.16258 18.9757 6.029L13.514 5.28026L11.0729 0.62615C10.6355 -0.203435 9.36823 -0.213981 8.9271 0.62615Z"
                      fill={`${
                        activeTab === "MyBooking" ? "#2395FF" : "#979797"
                      }`}
                    />
                  </svg>
                </div>
                <h1
                  className={`text-md font-bold ml-5 cursor-pointer ${
                    activeTab === "MyBooking" ? "text-primary " : "text-black"
                  }`}
                >
                  My Booking
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <g transform="rotate(90 512 512)">
                    <path
                      fill={`${
                        activeTab === "MyBooking" ? "#2395FF" : "#979797"
                      }`}
                      d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="flex justify-between mt-5"
              onClick={() => handleTabClick("Settings")}
            >
              <div className="flex items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M19.7445 13.0234L17.9502 11.9818C18.1313 10.9996 18.1313 9.99194 17.9502 9.00968L19.7445 7.96815C19.9509 7.84961 20.0436 7.60404 19.9762 7.37541C19.5087 5.86816 18.7126 4.50486 17.6722 3.37019C17.5121 3.1966 17.251 3.15426 17.0488 3.27281L15.2544 4.31434C14.5005 3.66232 13.6328 3.1585 12.6935 2.82825V0.749432C12.6935 0.512336 12.5292 0.304877 12.2975 0.254071C10.7517 -0.0931051 9.16792 -0.0761697 7.6979 0.254071C7.46623 0.304877 7.30196 0.512336 7.30196 0.749432V2.83249C6.36687 3.16696 5.49917 3.67079 4.74099 4.31857L2.95084 3.27704C2.74445 3.1585 2.48751 3.1966 2.32745 3.37442C1.28706 4.50486 0.490969 5.86816 0.0234244 7.37965C-0.0481816 7.60828 0.0486971 7.85384 0.255091 7.97239L2.04945 9.01392C1.86833 9.99617 1.86833 11.0038 2.04945 11.9861L0.255091 13.0276C0.0486971 13.1462 -0.0439694 13.3917 0.0234244 13.6203C0.490969 15.1276 1.28706 16.4909 2.32745 17.6256C2.48751 17.7992 2.74866 17.8415 2.95084 17.723L4.7452 16.6814C5.49917 17.3334 6.36687 17.8373 7.30617 18.1675V20.2506C7.30617 20.4877 7.47044 20.6951 7.70211 20.7459C9.24796 21.0931 10.8317 21.0762 12.3017 20.7459C12.5334 20.6951 12.6977 20.4877 12.6977 20.2506V18.1675C13.6328 17.833 14.5005 17.3292 15.2586 16.6814L17.053 17.723C17.2594 17.8415 17.5163 17.8034 17.6764 17.6256C18.7168 16.4951 19.5129 15.1318 19.9804 13.6203C20.0436 13.3875 19.9509 13.1419 19.7445 13.0234ZM9.99771 13.8828C8.14017 13.8828 6.62802 12.3629 6.62802 10.4958C6.62802 8.62864 8.14017 7.10868 9.99771 7.10868C11.8553 7.10868 13.3674 8.62864 13.3674 10.4958C13.3674 12.3629 11.8553 13.8828 9.99771 13.8828Z"
                      fill={`${
                        activeTab === "Settings" ? "#2395FF" : "#979797"
                      }`}
                    />
                  </svg>
                </div>
                <h1
                  className={`text-md font-bold ml-5 cursor-pointer ${
                    activeTab === "Settings" ? "text-primary " : "text-black"
                  }`}
                >
                  Settings
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <g transform="rotate(90 512 512)">
                    <path
                      fill={`${
                        activeTab === "Settings" ? "#2395FF" : "#979797"
                      }`}
                      d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex justify-between mt-5 " onClick={handleLogout}>
              <div className="flex items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                  >
                    <path
                      d="M21.3555 9.79788L14.1367 17.6729C13.4922 18.376 12.375 17.8838 12.375 16.876V12.376H6.53125C5.95977 12.376 5.5 11.8744 5.5 11.251V6.751C5.5 6.12756 5.95977 5.626 6.53125 5.626H12.375V1.126C12.375 0.122872 13.4879 -0.374003 14.1367 0.329122L21.3555 8.20413C21.7551 8.64475 21.7551 9.35725 21.3555 9.79788ZM8.25 17.4385V15.5635C8.25 15.2541 8.01797 15.001 7.73438 15.001H4.125C3.36445 15.001 2.75 14.3307 2.75 13.501V4.501C2.75 3.67131 3.36445 3.001 4.125 3.001H7.73438C8.01797 3.001 8.25 2.74787 8.25 2.4385V0.563497C8.25 0.254122 8.01797 0.000996965 7.73438 0.000996965H4.125C1.84766 0.000996965 0 2.01662 0 4.501V13.501C0 15.9854 1.84766 18.001 4.125 18.001H7.73438C8.01797 18.001 8.25 17.7479 8.25 17.4385Z"
                      fill="#F24545"
                    />
                  </svg>
                </div>
                <h1 className="text-md font-bold ml-5 cursor-pointer text-customRed">
                  Logout
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <g transform="rotate(90 512 512)">
                    <path
                      fill="#f24545"
                      d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {activeTab === "MyProfile" && (
          <div className="Right w-full h-auto bg-white rounded-2xl p-7 flex flex-col items-center mt-5 lg:mt-0 lg:p-8 lg:ml-3 lg:h-[40rem]">
            <h1 className="w-full text-xl text-left font-bold text-primary lg:text-3xl">
              Profile
            </h1>
            <div className="w-full flex flex-col justify-start mt-4 lg:flex-row lg:gap-5">
              <div className="w-full">
                <h1 className="text-sm font-bold lg:text-xl">Contact</h1>
                <div className="mt-5">
                  <form>
                    <h1 className="text-customGray text-xs font-extralight pl-3 lg">
                      Email
                    </h1>
                    <input
                      label="Email"
                      name="email"
                      type="email"
                      value={dataUser.email}
                      placeholder="Email"
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 appearance-none text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:text-md"
                    />
                  </form>
                </div>
                <div className=" mt-5">
                  <form>
                    <h1 className="text-customGray text-xs font-extralight pl-3 ">
                      City
                    </h1>
                    <input
                      label="City"
                      name="city"
                      type="text"
                      value={formData.city}
                      placeholder="City"
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 appearance-none text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </form>
                </div>
              </div>
              <div className="w-full mt-5 lg:mt-0">
                <h1 className="text-sm font-bold lg:text-xl">Biodata</h1>
                <div className="mt-5">
                  <form>
                    <h1 className="text-customGray text-xs font-extralight pl-3 ">
                      Fullname
                    </h1>
                    <input
                      label="Fullname"
                      name="fullname"
                      type="text"
                      value={dataUser.name}
                      placeholder="Fullname"
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 appearance-none text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </form>
                </div>
                <div className="mt-5">
                  <form>
                    <h1 className="text-customGray text-xs font-extralight pl-3 ">
                      City
                    </h1>
                    <input
                      label="City"
                      name="city"
                      type="text"
                      value={formData.city}
                      placeholder="City"
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 appearance-none text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </form>
                </div>
                <div className="mt-5">
                  <form>
                    <h1 className="text-customGray text-xs font-extralight pl-3 ">
                      Address
                    </h1>
                    <input
                      label="Address"
                      name="address"
                      type="text"
                      value={formData.address}
                      placeholder="address"
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 appearance-none text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </form>
                </div>
                <div className="mt-5">
                  <form>
                    <h1 className="text-customGray text-xs font-extralight pl-3 ">
                      Post Code
                    </h1>
                    <input
                      label="Post Code"
                      name="post code"
                      type="number"
                      value={formData.postcode}
                      placeholder="Post Code"
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 appearance-none text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </form>
                </div>
                <div className="w-full mt-5">
                  <button className="w-full bg-primary text-white border border-primary hover:bg-white hover:text-primary p-2 rounded-xl shadow-md shadow-primary ">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "MyBooking" && (
          <div className="lg:flex lg:flex-col w-full lg:items-start ">
            {isLoading ? (
              <div className="flex flex-col justify-center items-center mt-32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#2395ff"
                    stroke-dasharray="15"
                    stroke-dashoffset="15"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M12 3C16.9706 3 21 7.02944 21 12"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.3s"
                      values="15;0"
                    />
                    <animateTransform
                      attributeName="transform"
                      dur="1.5s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                </svg>
                <p className="text-primary ">Loading...</p>
              </div>
            ) : (
              <div className="Right w-full h-auto bg-white rounded-2xl p-7 flex flex-col items-center mt-5 lg:mt-0 lg:p-8 lg:ml-3 lg:h-auto">
                <div className="Right w-full h-auto bg-white rounded-2xl p-7 flex flex-col items-center mt-5 lg:mt-0 lg:p-8 lg:h-auto">
                  <h1 className="w-full text-xl text-left font-bold text-primary lg:text-3xl">
                    My Booking
                  </h1>
                  <div className="w-full mt-2 flex justify-between">
                    <h1 className="text-lg font-extrabold">My Booking</h1>
                    <h1 className="text-md font-bold text-primary">
                      Order History
                    </h1>
                  </div>
                </div>
                {flightData.length === 0 ? (
                  <div className="flex justify-center items-center mt-32">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#f5c800"
                        d="M19.59 15.86L12.007 1.924C11.515 1.011 10.779.5 9.989.5c-.79 0-1.515.521-2.016 1.434L.409 15.861c-.49.901-.544 1.825-.138 2.53c.405.707 1.216 1.109 2.219 1.109h15.02c1.003 0 1.814-.402 2.22-1.108c.405-.706.351-1.619-.14-2.531ZM10 4.857c.395 0 .715.326.715.728v6.583c0 .402-.32.728-.715.728a.721.721 0 0 1-.715-.728V5.584c0-.391.32-.728.715-.728Zm0 11.624c-.619 0-1.11-.51-1.11-1.14c0-.63.502-1.141 1.11-1.141c.619 0 1.11.51 1.11 1.14c0 .63-.502 1.141-1.11 1.141Z"
                      />
                    </svg>
                    <p className="text-customGray text-lg  font-semibold">{`You don't have a ticket yet`}</p>
                  </div>
                ) : (
                  flightData.map((flight, index) => (
                    <div
                      key={index}
                      className="w-full bg-white rounded-lg p-4 my-4 flex flex-col justify-between"
                    >
                      <div className="border-b">
                        <h1 className=" text-sm mt-1">{`${flight.takeoffDate}-${flight.takeoffTime}`}</h1>
                        <div className="flex mt-2 gap-4">
                          <h1 className=" text-md font-semibold">
                            {flight.ticket?.from?.code}
                          </h1>
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
                          <h1 className=" text-md font-semibold">
                            {flight.ticket?.to?.code}
                          </h1>
                        </div>
                        <h1 className=" text-sm text-gray-400 mb-2">{`${
                          flight.ticket?.airline?.name
                        }, ${flight.ticket?.from?.code.substr(0, 2)}-${
                          flight.id
                        }`}</h1>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex items-center">
                          <h1 className="text-sm  font-semibold text-gray-400 mr-6">
                            Status
                          </h1>
                          <h1
                            className={` text-sm ${
                              flight.status.id === 1
                                ? "bg-orange-400"
                                : flight.status.id === 2
                                ? "bg-green-400"
                                : flight.status.id === 3
                                ? "bg-red-400"
                                : ""
                            } rounded-md text-white font-semibold p-1 text-center`}
                          >
                            {flight.status?.name}
                          </h1>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <h1
                            className=" text-sm text-main font-semibold hover:underline cursor-pointer"
                            onClick={() => {
                              if (flight.status.id === 1) {
                                router.push(
                                  `/pages/tickets/details/payment/${flight.code}`
                                );
                              } else if (flight.status.id === 2) {
                                router.push(
                                  `/pages/bookings/pass/${flight.code}`
                                );
                              } else if (flight.status.id === 3) {
                                Swal.fire({
                                  icon: "error",
                                  title: "Oops...",
                                  text: "It appears you have canceled this flight",
                                });
                              }
                            }}
                          >
                            View Details
                          </h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 18 10"
                            fill="none"
                          >
                            <path
                              d="M15.9999 1.07107L9.58757 7.43757C9.19565 7.82669 8.56021 7.82669 8.16829 7.43757L1.75597 1.07107"
                              stroke="#2395FF"
                              stroke-width="3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
