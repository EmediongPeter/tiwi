"use client";

import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <path
            d="M18.3333 35.8332H25C29.714 35.8332 32.071 35.8332 33.5355 34.3687C35 32.9042 35 30.5472 35 25.8332V24.1665C35 19.4525 35 17.0955 33.5355 15.631C32.071 14.1665 29.714 14.1665 25 14.1665H5V22.4998"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 14.1637V6.85034C25 5.3681 23.7983 4.1665 22.3162 4.1665C21.8893 4.1665 21.4687 4.2683 21.089 4.46347L6.2705 12.082C5.4904 12.483 5 13.2866 5 14.1637"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.1667 25.8332C29.6269 25.8332 30 25.46 30 24.9998C30 24.5397 29.6269 24.1665 29.1667 24.1665M29.1667 25.8332C28.7065 25.8332 28.3334 25.46 28.3334 24.9998C28.3334 24.5397 28.7065 24.1665 29.1667 24.1665M29.1667 25.8332V24.1665"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6667 29.9998H10.8333M10.8333 29.9998H5M10.8333 29.9998V24.1665M10.8333 29.9998V35.8332"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Create or import your wallet",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <path
            d="M16.6666 11.7115C17.4716 6.95555 21.6108 3.3335 26.5958 3.3335C32.1578 3.3335 36.6666 7.84236 36.6666 13.4043C36.6666 18.3893 33.0446 22.5285 28.2886 23.3335"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3334 36.6665C18.8562 36.6665 23.3334 32.1893 23.3334 26.6665C23.3334 21.1437 18.8562 16.6665 13.3334 16.6665C7.81052 16.6665 3.33337 21.1437 3.33337 26.6665C3.33337 32.1893 7.81052 36.6665 13.3334 36.6665Z"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33337 15C3.33337 9.47143 7.80481 5 13.3334 5L11.9048 7.85715"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.6666 25C36.6666 30.5285 32.1951 35 26.6666 35L28.0951 32.1428"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Swap, stake, lend, mint NFT, pay, or vote",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <path
            d="M17.4377 21.6665L15.1143 24.6872C14.8653 25.0108 15.0438 25.4767 15.4498 25.5628L17.8835 26.0793C18.3165 26.1712 18.4815 26.6868 18.1788 27.0017L15.2962 29.9998"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66663 16.6665H26.6666"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66663 35V15C6.66663 10.2859 6.66663 7.92893 8.13109 6.46447C9.59556 5 11.9526 5 16.6666 5C21.3806 5 23.7376 5 25.2021 6.46447C26.6666 7.92893 26.6666 10.2859 26.6666 15V35H6.66663Z"
            stroke="#B1F128"
            strokeWidth="2.5"
          />
          <path
            d="M3.33337 35H30"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.6666 23.3333H29.4445C29.9611 23.3333 30.2195 23.3333 30.4313 23.3902C31.0065 23.5442 31.4558 23.9935 31.6098 24.5687C31.6666 24.7805 31.6666 25.0388 31.6666 25.5555V27.5C31.6666 28.8807 32.786 30 34.1666 30C35.5473 30 36.6666 28.8807 36.6666 27.5V17.0185C36.6666 16.0166 36.6666 15.5157 36.5236 15.0433C36.3806 14.5709 36.1026 14.1541 35.547 13.3205L34.2578 11.3867C33.6803 10.5204 32.7078 10 31.6666 10"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Select your preferred gas payment method",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <path
            d="M24.9674 11.6929C24.9674 11.6929 25.8007 12.5262 26.6341 14.1929C26.6341 14.1929 29.2811 10.0262 31.6341 9.19287"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6581 3.36901C12.494 3.19271 9.27691 3.67241 9.27691 3.67241C7.24549 3.81766 3.35247 4.95652 3.35251 11.6077C3.35254 18.2023 3.30944 26.3323 3.35251 29.5733C3.35251 31.5534 4.57854 36.1723 8.82214 36.4198C13.9802 36.7208 23.2713 36.7848 27.5341 36.4198C28.6753 36.3554 32.4744 35.4596 32.9553 31.3261C33.4534 27.0439 33.3543 24.0679 33.3543 23.3596"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.6666 11.6927C36.6666 16.2951 32.9321 20.0261 28.3252 20.0261C23.7184 20.0261 19.9839 16.2951 19.9839 11.6927C19.9839 7.09034 23.7184 3.35938 28.3252 3.35938C32.9321 3.35938 36.6666 7.09034 36.6666 11.6927Z"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M11.6342 21.6929H18.3008"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M11.6342 28.3594H24.9674"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Confirm and monitor transactions in real time",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <path
            d="M10.8334 29.1665V24.1665M19.1667 29.1665V14.1665M27.5 29.1665V22.4998"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M35.8334 9.1665C35.8334 11.9279 33.5949 14.1665 30.8334 14.1665C28.0719 14.1665 25.8334 11.9279 25.8334 9.1665C25.8334 6.40509 28.0719 4.1665 30.8334 4.1665C33.5949 4.1665 35.8334 6.40509 35.8334 9.1665Z"
            stroke="#B1F128"
            strokeWidth="2.5"
          />
          <path
            d="M35.8258 18.3332C35.8258 18.3332 35.8333 18.899 35.8333 19.9998C35.8333 27.4638 35.8333 31.1957 33.5146 33.5145C31.1958 35.8332 27.4638 35.8332 20 35.8332C12.5361 35.8332 8.80411 35.8332 6.48536 33.5145C4.16663 31.1957 4.16663 27.4638 4.16663 19.9998C4.16663 12.536 4.16663 8.80404 6.48536 6.48529C8.80411 4.16655 12.5361 4.16655 20 4.16655L21.6666 4.1665"
            stroke="#B1F128"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Track performance through Analytics",
    },
  ];

  return (
    <section className="relative w-full bg-[#010501] py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-[1328px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 md:gap-10 mb-8 md:mb-12">
          {/* Decorative header with borders */}
          <div className="flex items-center justify-center gap-4">
            {/* Left gradient box */}
            <div className="relative w-7 h-7 md:w-8 md:h-8">
              <div
                className="absolute inset-0 rounded-sm"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(177, 241, 40, 0.45) 0%, #010501 100%)",
                }}
              />
              <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-[2px] bg-[#B1F128] rounded-full" />
            </div>

            <span className="text-[#B5B5B5] text-xs md:text-lg font-medium">
              How it Works
            </span>

            {/* Right gradient box */}
            <div className="relative w-7 h-7 md:w-8 md:h-8">
              <div
                className="absolute inset-0 rounded-sm"
                style={{
                  background:
                    "linear-gradient(90deg, #010501 0%, rgba(177, 241, 40, 0.45) 100%)",
                }}
              />
              <div className="absolute right-0 top-0 bottom-0 w-0.5 md:w-[2px] bg-[#B1F128] rounded-full" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-2xl md:text-[40px] font-semibold leading-tight tracking-tight md:tracking-[-1.6px]">
            <span className="text-white">DeFi in </span>
            <span className="text-[#B1F128]">Five</span>
            <span className="text-white"> Simple Steps</span>
          </h2>
        </div>

        {/* Main Content Container */}
        <div className="w-full rounded-2xl md:rounded-3xl border border-[#1F261E] overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden lg:flex">
            {/* Left side - Phone mockup */}
            <div className="relative flex-1 border-r border-[#1F261E]">
              <div
                className="relative min-h-[628px] flex items-center justify-end pr-8"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(5, 20, 1, 0.20) -8.9%, rgba(31, 122, 6, 0.20) 330.56%)",
                }}
              >
                <div className="relative w-[450px] h-[636px]">
                  <Image
                    // src="https://api.builder.io/api/v1/image/assets/TEMP/19128a7c108f7f74b9b23062abe7afe703d5c060?width=1500"
                    src="images/Android.svg"
                    alt="iPhone mockup showing TIWI app"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right side - Steps */}
            <div className="flex-1 flex flex-col">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-6 px-10 py-10 ${
                    index !== steps.length - 1 ? "border-b border-[#1F261E]" : ""
                  }`}
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#121712] flex-shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-[#B5B5B5] text-lg font-medium flex-1">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col">
            {/* Phone mockup */}
            <div
              className="relative w-full pt-12 flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5, 20, 1, 0.20) -8.9%, rgba(31, 122, 6, 0.20) 330.56%)",
              }}
            >
              <div className="relative w-[280px] h-[240px] md:w-[457px] md:h-[388px]">
                <Image
                  src="/images/iMockup - iPhone 15.svg"
                  alt="iPhone mockup showing TIWI app"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 md:gap-4 px-4 py-4 md:px-6 md:py-6 border-t border-[#1F261E] ${
                    index === steps.length - 1 ? "" : "border-b"
                  }`}
                >
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#121712] flex-shrink-0">
                    {step.icon}
                  </div>
                  <p className="text-[#B5B5B5] text-sm md:text-base font-medium flex-1">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-8 md:mt-10 w-full md:w-auto">
          {/* Download app button */}
          <button className="flex items-center justify-center gap-2 md:gap-3 px-8 md:px-10 py-3 md:py-4 rounded-full border border-[#B1F128] hover:bg-[#B1F128]/10 transition-colors w-full md:w-auto">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-8 md:h-8"
            >
              <path
                d="M21.3335 16C21.3335 16 17.4056 21.3333 16.0002 21.3333C14.5947 21.3333 10.6669 16 10.6669 16M16.0002 20.6667V4"
                stroke="#B1F128"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.6668 10.6665C25.6124 10.6665 28.0001 13.0543 28.0001 15.9998V19.3332C28.0001 22.446 28.0001 24.0024 27.3704 25.1806C26.8732 26.1109 26.1112 26.8728 25.1809 27.3701C24.0028 27.9998 22.4464 27.9998 19.3334 27.9998H12.6673C9.55397 27.9998 7.99731 27.9998 6.81898 27.3698C5.88899 26.8726 5.12726 26.111 4.63007 25.181C4.00012 24.0026 4.00012 22.446 4.00012 19.3326V15.9985C4.00086 13.0547 6.38662 10.6682 9.33043 10.6665H9.33346"
                stroke="#B1F128"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#B1F128] text-sm md:text-lg font-semibold">
              Download app
            </span>
          </button>

          {/* Launch App button */}
          <button className="flex items-center justify-center gap-2 md:gap-3 px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#B1F128] hover:bg-[#9DD320] transition-colors w-full md:w-auto">
            <span className="text-[#010501] text-sm md:text-lg font-semibold">
              Launch App
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-8 md:h-8"
            >
              <path
                d="M22 10L8 24"
                stroke="#010501"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10.6666 8.25054C10.6666 8.25054 21.3972 7.34598 23.0256 8.97438C24.6541 10.6028 23.7493 21.3333 23.7493 21.3333"
                stroke="#010501"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
