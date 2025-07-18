"use client";

// import { useState } from "react";
import Image from "next/image";
// import services from "@lib/services.json";
// import { geistMono } from "@/app/fonts";

export default function Navbar() {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   const handleButtonClick = () => {
  //     setIsMenuOpen(!isMenuOpen);
  //   };

  return (
    // <nav className="navbar bg-neutral sm:bg-base-100">
    <nav className="navbar">
      <div className="flex-1">
        <div className="avatar pr-2">
          <div className="w-12 rounded-full">
            <Image
              src="/sb-avatar.jpg"
              alt="sb avatar"
              width={50}
              height={50}
            />
          </div>
        </div>
        {/* <a className="btn btn-sm btn-ghost text-base-200 sm:text-base-content text-xl">Available to Hire</a> */}
        <a className="btn text-xl text-base-content btn-ghost btn-sm">
          Available to Hire
        </a>
      </div>
      <div className="flex-none"></div>
      <div className="flex-none">
        {/* <label
          htmlFor="my-drawer"
          className="drawer-button"
          style={{ zIndex: 1000 }}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current rotate-45 duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 14h16"
              ></path>
            </svg>
          )}
        </label> */}
        {/* Drawer */}
        {/* <div className={`drawer ${geistMono.className} antialiased`}>
          <input
            id="my-drawer"
            type="checkbox"
            className="btn drawer-toggle cursor-pointer"
            onClick={handleButtonClick}
          />
          <div className="drawer-content"></div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-2xl font-bold text-base-content min-h-full w-80 p-4">
              {services.map((service, index) => {
                const key = `${service.name}-${index}`;
                console.log(key);
                return (
                  <li key={key}>
                    <a className="hover:bg-secondary" href={service.url}>
                      {service.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
}
