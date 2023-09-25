import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import japanAlley from "/public/images/carouselJapan.jpg";
import japanAlleyHero from "/public/images/japanAlley.jpg";
import carouselCity from "/public/images/carouselCity.jpg";
import eiffel from "/public/images/eiffel.svg";
import bali from "/public/images/bali.svg";
import singapore from "/public/images/singapore.svg";
import agra from "/public/images/agra.svg";
import sydney from "/public/images/sydney.svg";
import leftArrow from "/public/images/leftArrow.svg";
import rightArrow from "/public/images/rightArrow.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-[100%]">
        <div className="hidden w-full h-96 lg:flex lg:mt-6 ">
          <div className="flex-1 flex flex-col justify-center  px-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Find Your <span className="text-primary"> Flight </span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              and explore the world with us.
            </p>
          </div>
          <div className="w-[40%] relative flex justify-end overflow-hidden rounded-l-2xl ">
            <Image
              src={japanAlleyHero}
              className="object-cover object-left h-full"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        </div>
        <div className="hidden w-screen h-[80%] lg:flex lg:w-[100%] mt-5">
          <div className="w-[55%] relative flex justify-end overflow-hidden rounded-r-2xl bottom-24">
            <Image src={japanAlleyHero} className="object-cover h-full" />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="232"
              height="246"
              viewBox="0 0 232 246"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M75.8267 2.00037C130.421 -11.0624 159.649 43.6408 187.892 84.1019C214.743 122.571 250.689 167.035 218.118 205.852C182.265 248.582 114.138 253.381 61.4892 234.747C15.3301 218.41 -2.09434 173.998 0.684063 128.895C3.84507 77.5814 18.834 15.6371 75.8267 2.00037Z"
                fill="#2395FF"
              />
            </svg>
          </div>
        </div>
        <div className="w-screen h-auto lg:w-[100%]">
          <div className="relative h-54 overflow-hidden rounded-b-2xl md:h-80 lg:hidden">
            <Image src={japanAlleyHero} className="object-cover " />
            {/* Overlay transparan */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Konten Tengah */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Find Your <span className="text-primary"> Flight </span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg">
                and explore the world with us.
              </p>
            </div>
          </div>
          <div className="px-5 mt-5 lg:px-10">
            <div className="flex lg:px-24">
              <div className="flex-1">
                <h1 className="text-primary text-sm font-semibold tracking-widest">
                  Trending
                </h1>
                <h1 className="text-secondary font-extrabold trancking-widest">
                  Trending Destinations
                </h1>
              </div>
              <div className="flex flex-1 justify-end text-md pt-5 w-full ">
                <Link href="/" className="text-primary">
                  View All
                </Link>
              </div>
            </div>
            <div className=" w-full h-36 mt-2 flex space-x-2 md:justify-evenly lg:mt-10 lg:space-x-0">
              <div className="relative overflow-hidden h-full w-32 rounded-2xl">
                <Image
                  src={japanAlley}
                  className="h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-end items-start mb-2 ml-2 text-white text-center">
                  <h1 className="text-xs md:text-xl lg:text-xl">Tokyo,</h1>
                  <p className="text-md font-bold md:text-base lg:text-lg">
                    Japan
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden h-full w-32  rounded-2xl">
                <Image
                  src={carouselCity}
                  className="h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="px-5">
                  <div className="bg-slate-300 bg-opacity-80 w-24 px-2 py-1 rounded-full flex justify-center">
                    <h1 className=" text-white font-normal text-sm">
                      <span className="text-white font-bold ">9</span> Airlines
                    </h1>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end items-start mb-2 ml-2 text-white text-center">
                  <h1 className="text-xs md:text-xl lg:text-xl">Barcelona,</h1>
                  <p className="text-md font-bold md:text-base lg:text-lg">
                    Spain
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden h-full w-32  rounded-2xl">
                <Image
                  src={japanAlley}
                  className="h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="absolute inset-0 flex flex-col justify-end items-start mb-2 ml-2 text-white text-center">
                  <h1 className="text-xs md:text-xl lg:text-xl">Tokyo,</h1>
                  <p className="text-md font-bold md:text-base lg:text-lg">
                    Japan
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden h-full w-32 rounded-2xl hidden md:block">
                <Image
                  src={carouselCity}
                  className="h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="px-5">
                  <div className="bg-slate-300 bg-opacity-80 w-24 px-2 py-1 rounded-full flex justify-center">
                    <h1 className=" text-white font-normal text-sm">
                      <span className="text-white font-bold ">9</span> Airlines
                    </h1>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end items-start mb-2 ml-2 text-white text-center">
                  <h1 className="text-xs md:text-xl lg:text-xl">Barcelona,</h1>
                  <p className="text-md font-bold md:text-base lg:text-lg">
                    Spain
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden h-full w-32  rounded-2xl hidden md:block">
                <Image
                  src={japanAlley}
                  className="h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="absolute inset-0 flex flex-col justify-end items-start mb-2 ml-2 text-white text-center">
                  <h1 className="text-xs md:text-xl lg:text-xl">Tokyo,</h1>
                  <p className="text-md font-bold md:text-base lg:text-lg">
                    Japan
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto mt-5 px-5 lg:px-36 lg:mt-16 lg:h-96">
            <div className="w-full h-full bg-primary rounded-3xl py-5 lg:flex lg:flex-col lg:justify-center">
              <div className="flex flex-col items-center pt-2">
                <h1 className="text-white text-sm text-light">Top 10</h1>
                <h1 className="text-white text-sm font-extrabold">
                  Top 10 Destinations
                </h1>
              </div>
              <div className="flex justify-evenly gap-2 px-5 mt-3 lg:px-10">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-transparent rounded-full flex justify-center items-center border-4 border-white">
                    <div className="w-20 h-20 relative overflow-hidden rounded-full">
                      <Image
                        src={eiffel}
                        className="h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <h1 className="text-white text-center font-bold mt-2">
                    Paris
                  </h1>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-transparent rounded-full flex justify-center items-center border-4 border-white">
                    <div className="w-20 h-20 relative overflow-hidden rounded-full">
                      <Image
                        src={bali}
                        className="h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <h1 className="text-white text-center font-bold mt-2">
                    Bali
                  </h1>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-transparent rounded-full flex justify-center items-center border-4 border-white">
                    <div className="w-20 h-20 relative overflow-hidden rounded-full">
                      <Image
                        src={singapore}
                        className="h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <h1 className="text-white text-center font-bold mt-2">
                    Singapore
                  </h1>
                </div>
                <div className="hidden flex-col items-center md:flex">
                  <div className="w-24 h-24 bg-transparent rounded-full flex justify-center items-center border-4 border-white">
                    <div className="w-20 h-20 relative overflow-hidden rounded-full">
                      <Image
                        src={agra}
                        className="h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <h1 className="text-white text-center font-bold mt-2">
                    Arga
                  </h1>
                </div>
                <div className="hidden flex-col items-center md:flex">
                  <div className="w-24 h-24 bg-transparent rounded-full flex justify-center items-center border-4 border-white">
                    <div className="w-20 h-20 relative overflow-hidden rounded-full">
                      <Image
                        src={sydney}
                        className="h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <h1 className="text-white text-center font-bold mt-2">
                    Sydney
                  </h1>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-4 mt-7">
                <div className="w-14 h-10 rounded border-2 bg-white border-primary flex justify-center items-center">
                  <Image src={leftArrow} alt="left arrow" className="w-8 h-8" />
                </div>
                <div className="w-14 h-10 rounded border-2 bg-white border-primary flex justify-center items-center">
                  <Image
                    src={rightArrow}
                    alt="right arrow"
                    className="w-8 h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>

    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.js</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
