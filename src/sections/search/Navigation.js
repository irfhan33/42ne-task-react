import React from "react";

const Navigation = () => {
  return (
    <nav aria-label="Page navigation example" className="mt-6 mx-auto">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-2 leading-tight text-gray-500">
            1
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-2 leading-tight text-gray-500">
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="z-10 px-3 py-2 leading-tight bg-primary-300 rounded-full text-white"
          >
            3
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-2 leading-tight text-gray-500">
            4
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-2 leading-tight text-gray-500">
            5
          </a>
        </li>
        <li>
          <a href="#" className="block px-3 py-2 leading-tight text-gray-500">
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
