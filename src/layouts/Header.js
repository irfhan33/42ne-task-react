import React, { useState } from "react";

const Header = () => {
  const [isOffsetOpen, setIsOffsetOpen] = useState(false);
  return (
    <>
      {/* <!-- header --> */}
      <header className="">
        <ul className="nav-links shrink-0">
          <li className="shrink-0">
            <img src="images/icon.png" alt="icon" className="shrink-0" />
          </li>
          <li className="hidden md:block active">Category</li>
          <li className="hidden md:block">Browes</li>
          <li className="hidden md:block">How it Works</li>
        </ul>
        <ul className="nav-links ml-auto hidden md:flex">
          <li className="text-primary-400 md:text-white">Login</li>
          <li>
            <button className="button text-white">Becoma a Tasker</button>
          </li>
        </ul>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary-300 cursor-pointer block ml-auto md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          onClick={() => setIsOffsetOpen(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </header>

      {/* <!-- Header Offset --> */}
      {isOffsetOpen && (
        <div className="bg-white fixed left-0 top-0 z-[100] w-full min-h-screen h-full padding py-4 overflow-auto xl:hidden">
          <div className="flex items-center justify-between">
            <a href="/" className="mr-8 shrink-0">
              <img src="images/icon.png" alt="Logo" />
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-primary-300 cursor-pointer block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              onClick={() => setIsOffsetOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* <!-- Menu Offeset --> */}
          <nav className="flex items-center gap-10 flex-col mt-10">
            <a href="" className="nav-item active w-fit">
              Category
            </a>
            <a href="" className="nav-item">
              Browse
            </a>
            <a href="" className="nav-item">
              How it Works
            </a>
          </nav>

          <ul className="flex flex-col items-center gap-4 mt-20 justify-center">
            <a
              href=""
              className="button border border-primary-200 bg-transparent text-primary-200"
            >
              Login
            </a>
            <a href="" className="button">
              Become a Tasker
            </a>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
