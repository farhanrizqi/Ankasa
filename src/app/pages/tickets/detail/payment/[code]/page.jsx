"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import visa from "@/../../public/images/visa.svg";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

function Payment() {
  const router = useRouter();
  const params = useParams();
  const code = params.code;
  const [loading, setLoading] = useState(false);

  const handleProcess = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}booking/status/${code}`,
        { statusId: 2 }
      );
      if (response.status === 200) {
        router.push(`/pages/bookings/pass/${code}`);
      } else {
        console.error("Failed to process payment.");
      }
    } catch (error) {
      console.error("Error Processing Payment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    try {
      const confirmationResult = await Swal.fire({
        title: "Confirm",
        text: "Are you sure you want to cancel the payment ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F24545",
        cancelButtonColor: "#979797",
        confirmButtonText: "Yes, cancel",
      });

      if (confirmationResult.isConfirmed) {
        setLoading(true);

        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}booking/status/${code}`,
          { statusId: 3 }
        );

        if (response.status === 200) {
          await Swal.fire("Canceled", "Payment Cancelled.", "success");
          router.push(`/pages/profile`);
        } else {
          console.error("Failed to cancel payment.");
        }
      }
    } catch (error) {
      console.error("Error canceling payment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-auto p-5 bg-primary lg:px-10 lg:py-5 ">
        <div className="w-full h-auto p-5 flex flex-col justify-center  bg-white rounded-xl md:flex-row md:gap-5">
          <div className="flex-1 w-full h-full">
            <div className="mb-2">
              <h1 className="text-md text-primary font-semibold">
                Payment Method
              </h1>
            </div>
            <div className="p-2 bg-gray-300 rounded">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-semibold">Paypal</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 256 302"
                    >
                      <path
                        fill="#27346A"
                        d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477c-1.556-.824-1.556-.824 0 0c3.671-23.407-.025-39.34-12.686-53.765"
                      />
                      <path
                        fill="#27346A"
                        d="M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182a89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74Z"
                      />
                      <path
                        fill="#2790C3"
                        d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477Z"
                      />
                      <path
                        fill="#1F264F"
                        d="M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49a109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149a11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477c-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm font-semibold">Credit Card</div>
                  <div className="flex space-x-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 256 199"
                    >
                      <path d="M46.54 198.011V184.84c0-5.05-3.074-8.342-8.343-8.342c-2.634 0-5.488.878-7.464 3.732c-1.536-2.415-3.731-3.732-7.024-3.732c-2.196 0-4.39.658-6.147 3.073v-2.634h-4.61v21.074h4.61v-11.635c0-3.731 1.976-5.488 5.05-5.488c3.072 0 4.61 1.976 4.61 5.488v11.635h4.61v-11.635c0-3.731 2.194-5.488 5.048-5.488c3.074 0 4.61 1.976 4.61 5.488v11.635h5.05Zm68.271-21.074h-7.463v-6.366h-4.61v6.366h-4.171v4.17h4.17v9.66c0 4.83 1.976 7.683 7.245 7.683c1.976 0 4.17-.658 5.708-1.536l-1.318-3.952c-1.317.878-2.853 1.098-3.951 1.098c-2.195 0-3.073-1.317-3.073-3.513v-9.44h7.463v-4.17Zm39.076-.44c-2.634 0-4.39 1.318-5.488 3.074v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.536-5.488 4.39-5.488c.878 0 1.976.22 2.854.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22Zm-59.052 2.196c-2.196-1.537-5.269-2.195-8.562-2.195c-5.268 0-8.78 2.634-8.78 6.805c0 3.513 2.634 5.488 7.244 6.147l2.195.22c2.415.438 3.732 1.097 3.732 2.195c0 1.536-1.756 2.634-4.83 2.634c-3.073 0-5.488-1.098-7.025-2.195l-2.195 3.512c2.415 1.756 5.708 2.634 9 2.634c6.147 0 9.66-2.853 9.66-6.805c0-3.732-2.854-5.708-7.245-6.366l-2.195-.22c-1.976-.22-3.512-.658-3.512-1.975c0-1.537 1.536-2.415 3.951-2.415c2.635 0 5.269 1.097 6.586 1.756l1.976-3.732Zm122.495-2.195c-2.635 0-4.391 1.317-5.489 3.073v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.537-5.488 4.39-5.488c.879 0 1.977.22 2.855.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22Zm-58.833 10.976c0 6.366 4.39 10.976 11.196 10.976c3.073 0 5.268-.658 7.463-2.414l-2.195-3.732c-1.756 1.317-3.512 1.975-5.488 1.975c-3.732 0-6.366-2.634-6.366-6.805c0-3.951 2.634-6.586 6.366-6.805c1.976 0 3.732.658 5.488 1.976l2.195-3.732c-2.195-1.757-4.39-2.415-7.463-2.415c-6.806 0-11.196 4.61-11.196 10.976Zm42.588 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.073 0 5.269-1.097 6.586-3.073v2.634h4.61v-10.537Zm-16.904 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805Zm-55.1-10.976c-6.147 0-10.538 4.39-10.538 10.976c0 6.586 4.39 10.976 10.757 10.976c3.073 0 6.147-.878 8.562-2.853l-2.196-3.293c-1.756 1.317-3.951 2.195-6.146 2.195c-2.854 0-5.708-1.317-6.367-5.05h15.587v-1.755c.22-6.806-3.732-11.196-9.66-11.196Zm0 3.951c2.853 0 4.83 1.757 5.268 5.05h-10.976c.439-2.854 2.415-5.05 5.708-5.05Zm114.372 7.025v-18.879h-4.61v10.976c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61v-10.537Zm-16.903 0c0-3.732 2.414-6.805 6.366-6.805c3.732 0 6.366 2.854 6.366 6.805c0 3.732-2.634 6.805-6.366 6.805c-3.952-.22-6.366-3.073-6.366-6.805Zm-154.107 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61v-10.537Zm-17.123 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805Z" />
                      <path
                        fill="#FF5F00"
                        d="M93.298 16.903h69.15v124.251h-69.15z"
                      />
                      <path
                        fill="#EB001B"
                        d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029c0 43.685 35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125Z"
                      />
                      <path
                        fill="#F79E1B"
                        d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125c0-25.245-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029Z"
                      />
                    </svg>
                    <Image src={visa} width={50} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 512 214"
                    >
                      <path
                        fill="#635BFF"
                        d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658Zm-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756h-36.694Zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716Zm-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28ZM241.493 36.551l35.698-7.68V0l-35.698 7.538V36.55Zm0 10.809h35.698v124.444h-35.698V47.36Zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524Zm-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022l.142-30.862ZM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-xs text-eighth pl-3">Card Number</div>
              <div className="w-full h-auto p-2 border-2 border-gray-300 flex items-center rounded-md bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#979797"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
                <input
                  type="text"
                  className="w-full h-full font-semibold text-md focus:outline-none ml-2"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
            </div>
            <div className="mt-3">
              <div className="">
                <h1 className=" text-eighth  text-xs pl-3">Expiry Date</h1>
                <div className="flex border-2 border-gray-300 items-center px-2 rounded-md gap-2 h-auto p-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_322_672)">
                      <path
                        d="M1.53846 20H5V16.5385H1.53846V20ZM5.76923 20H9.61538V16.5385H5.76923V20ZM1.53846 15.7692H5V11.9231H1.53846V15.7692ZM5.76923 15.7692H9.61538V11.9231H5.76923V15.7692ZM1.53846 11.1538H5V7.69231H1.53846V11.1538ZM10.3846 20H14.2308V16.5385H10.3846V20ZM5.76923 11.1538H9.61538V7.69231H5.76923V11.1538ZM15 20H18.4615V16.5385H15V20ZM10.3846 15.7692H14.2308V11.9231H10.3846V15.7692ZM6.15385 5.38462V1.92308C6.15385 1.81891 6.11579 1.72877 6.03966 1.65264C5.96354 1.57652 5.8734 1.53846 5.76923 1.53846H5C4.89583 1.53846 4.80569 1.57652 4.72957 1.65264C4.65345 1.72877 4.61538 1.81891 4.61538 1.92308V5.38462C4.61538 5.48878 4.65345 5.57893 4.72957 5.65505C4.80569 5.73117 4.89583 5.76923 5 5.76923H5.76923C5.8734 5.76923 5.96354 5.73117 6.03966 5.65505C6.11579 5.57893 6.15385 5.48878 6.15385 5.38462ZM15 15.7692H18.4615V11.9231H15V15.7692ZM10.3846 11.1538H14.2308V7.69231H10.3846V11.1538ZM15 11.1538H18.4615V7.69231H15V11.1538ZM15.3846 5.38462V1.92308C15.3846 1.81891 15.3466 1.72877 15.2704 1.65264C15.1943 1.57652 15.1042 1.53846 15 1.53846H14.2308C14.1266 1.53846 14.0365 1.57652 13.9603 1.65264C13.8842 1.72877 13.8462 1.81891 13.8462 1.92308V5.38462C13.8462 5.48878 13.8842 5.57893 13.9603 5.65505C14.0365 5.73117 14.1266 5.76923 14.2308 5.76923H15C15.1042 5.76923 15.1943 5.73117 15.2704 5.65505C15.3466 5.57893 15.3846 5.48878 15.3846 5.38462ZM20 4.61538V20C20 20.4167 19.8478 20.7772 19.5433 21.0817C19.2388 21.3862 18.8782 21.5385 18.4615 21.5385H1.53846C1.12179 21.5385 0.761218 21.3862 0.456731 21.0817C0.152244 20.7772 0 20.4167 0 20V4.61538C0 4.19872 0.152244 3.83814 0.456731 3.53365C0.761218 3.22917 1.12179 3.07692 1.53846 3.07692H3.07692V1.92308C3.07692 1.39423 3.26522 0.941506 3.64183 0.564904C4.01843 0.188301 4.47115 0 5 0H5.76923C6.29808 0 6.7508 0.188301 7.1274 0.564904C7.50401 0.941506 7.69231 1.39423 7.69231 1.92308V3.07692H12.3077V1.92308C12.3077 1.39423 12.496 0.941506 12.8726 0.564904C13.2492 0.188301 13.7019 0 14.2308 0H15C15.5288 0 15.9816 0.188301 16.3582 0.564904C16.7348 0.941506 16.9231 1.39423 16.9231 1.92308V3.07692H18.4615C18.8782 3.07692 19.2388 3.22917 19.5433 3.53365C19.8478 3.83814 20 4.19872 20 4.61538Z"
                        fill="#979797"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_322_672">
                        <rect width="20" height="21.5385" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    type="text"
                    className="w-full focus:outline-none h-full  font-semibold text-md"
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
              </div>
              <div className=" mt-2">
                <h1 className=" text-eighth  text-xs pl-3">CVC/CVV</h1>
                <div className="flex border-2 border-gray-300 items-center px-2 rounded-md gap-2 h-auto p-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#979797"
                      d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm6-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2Z"
                    />
                  </svg>
                  <input
                    type="text"
                    className="w-full focus:outline-none h-full  font-semibold text-md"
                    placeholder="000"
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
            <div className="flex h-auto items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 25 25"
              >
                <path
                  fill="#979797"
                  d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm6-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2Z"
                />
              </svg>
              <h1 className="text-xs text-eighth ml-1">
                Your transaction is secured with ssl certificate
              </h1>
            </div>
          </div>
          <div className="flex-1 w-full h-full mt-3 md:mt-0 ">
            <div className=" md:mb-2">
              <h1 className="text-md text-primary font-semibold mb-1">
                Summary
              </h1>
            </div>
            <div>
              <div className="border-b h-12 flex justify-between items-center md:h-[5rem]">
                <div className="flex flex-col justify-start items-start">
                  <select
                    name="title"
                    className="focus:outline-none font-semibold text-xs md:text-base outline-none border-none"
                  >
                    <option value={"1"}>Pro(Billed Monthly)</option>
                    <option value={"2"}>Base</option>
                  </select>
                  <h1 className=" text-primary text-[8px] md:text-xs my-1 underline ">
                    Save 20% with annual billing
                  </h1>
                </div>
                <h1 className=" text-lg font-semibold text-primary">
                  $9.99<span className="text-xs text-black">/Month</span>
                </h1>
              </div>
              <div className="border-b h-12 flex justify-between items-center md:h-[5rem]">
                <div>
                  <h1 className=" font-semibold text-xs md:text-sm">
                    Refferal Bonuses
                  </h1>
                  <h1 className=" font-semibold text-xs md:text-sm">Vat</h1>
                </div>
                <div>
                  <h1 className=" font-semibold text-xs md:text-sm">-$2.00</h1>
                  <h1 className=" font-semibold text-xs md:text-sm">-20%</h1>
                </div>
              </div>
              <div className="border-b h-12 flex justify-between items-center md:h-[5rem]">
                <div>
                  <h1 className=" font-semibold text-xs md:text-sm">
                    Today you pay (US Dollars)
                  </h1>
                  <h1 className=" font-semibold text-xs md:text-sm">
                    After 30 days $9.59
                  </h1>
                </div>
                <div>
                  <h1 className=" font-semibold text-xs md:text-base">$0</h1>
                  <h1 className=" font-semibold text-xs md:text-sm"></h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className="flex w-full md:w-60 h-14  bg-primary items-center justify-center rounded-md hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50 mt-6"
                  onClick={handleProcess}
                >
                  {loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-full flex justify-center items-center"
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
                    <h1 className="text-white text-sm font-medium">Proceed</h1>
                  )}
                </div>
                <h1
                  className="text-xs underline mt-2 text-center text-customRed cursor-pointer"
                  onClick={handleCancel}
                >
                  Cancel
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
