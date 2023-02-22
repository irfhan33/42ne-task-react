import React from "react";

const SearchToolbar = () => {
  return (
    <section className="border border-t border-b border-[#E7EBFB]">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0 justify-between padding py-4">
        <div className="relative w-full lg:max-w-[200px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-300 focus:border-primary-300 block w-full pl-10 p-2.5"
            placeholder="Search..."
            required
          />
        </div>

        <ul className="flex items-center gap-6 text-primary-300 text-base flex-wrap">
          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-primary-300 text-base text-center inline-flex items-center gap-2"
              type="button"
            >
              Category
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.70711 5.29289C5.31658 5.68342 4.68342 5.68342 4.29289 5.29289L0.707108 1.70711C0.0771428 1.07714 0.523309 0 1.41421 0H8.58579C9.47669 0 9.92286 1.07714 9.29289 1.70711L5.70711 5.29289Z"
                  fill="#21605D"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-primary-300"
            >
              <ul
                className="py-2 text-sm text-primary-300"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-primary-300 text-base text-center inline-flex items-center gap-2"
              type="button"
            >
              50km Sydney & remotly
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.70711 5.29289C5.31658 5.68342 4.68342 5.68342 4.29289 5.29289L0.707108 1.70711C0.0771428 1.07714 0.523309 0 1.41421 0H8.58579C9.47669 0 9.92286 1.07714 9.29289 1.70711L5.70711 5.29289Z"
                  fill="#21605D"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-primary-300"
            >
              <ul
                className="py-2 text-sm text-primary-300"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-primary-300 text-base text-center inline-flex items-center gap-2"
              type="button"
            >
              Any price
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.70711 5.29289C5.31658 5.68342 4.68342 5.68342 4.29289 5.29289L0.707108 1.70711C0.0771428 1.07714 0.523309 0 1.41421 0H8.58579C9.47669 0 9.92286 1.07714 9.29289 1.70711L5.70711 5.29289Z"
                  fill="#21605D"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-primary-300"
            >
              <ul
                className="py-2 text-sm text-primary-300"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-primary-300 text-base text-center inline-flex items-center gap-2"
              type="button"
            >
              Other filters
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.70711 5.29289C5.31658 5.68342 4.68342 5.68342 4.29289 5.29289L0.707108 1.70711C0.0771428 1.07714 0.523309 0 1.41421 0H8.58579C9.47669 0 9.92286 1.07714 9.29289 1.70711L5.70711 5.29289Z"
                  fill="#21605D"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-primary-300"
            >
              <ul
                className="py-2 text-sm text-primary-300"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-primary-300 text-base text-center inline-flex items-center gap-2"
              type="button"
            >
              Sort
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.70711 5.29289C5.31658 5.68342 4.68342 5.68342 4.29289 5.29289L0.707108 1.70711C0.0771428 1.07714 0.523309 0 1.41421 0H8.58579C9.47669 0 9.92286 1.07714 9.29289 1.70711L5.70711 5.29289Z"
                  fill="#21605D"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-primary-300"
            >
              <ul
                className="py-2 text-sm text-primary-300"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Category 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SearchToolbar;
