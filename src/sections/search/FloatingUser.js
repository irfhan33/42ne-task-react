import React from "react";

const FloatingUser = () => {
  return (
    <div className="absolute w-fit min-w-[250px] left-[250px] top-[100px] ">
      <div className="bg-[#21605D] border-white border-2 rounded-[30px] p-4 text-white shadow-lg">
        <div className="flex items-center gap-2 justify-between font-medium">
          <span>Babysitter</span>
          <span className="font-bold text-lg">$15</span>
        </div>
        <div className="flex text-sm mt-2 justify-between">
          <ul className="space-y-1">
            <li className="flex items-center gap-1">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6668 8.83341C16.6668 13.8334 10.0002 18.8334 10.0002 18.8334C10.0002 18.8334 3.3335 13.8334 3.3335 8.83341C3.3335 7.0653 4.03588 5.36961 5.28612 4.11937C6.53636 2.86913 8.23205 2.16675 10.0002 2.16675C11.7683 2.16675 13.464 2.86913 14.7142 4.11937C15.9645 5.36961 16.6668 7.0653 16.6668 8.83341V8.83341Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 11.3333C11.3807 11.3333 12.5 10.214 12.5 8.83325C12.5 7.45254 11.3807 6.33325 10 6.33325C8.61929 6.33325 7.5 7.45254 7.5 8.83325C7.5 10.214 8.61929 11.3333 10 11.3333Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Guildfor
            </li>
            <li className="flex items-center gap-1">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 3.83325H4.16667C3.24619 3.83325 2.5 4.57944 2.5 5.49992V17.1666C2.5 18.0871 3.24619 18.8333 4.16667 18.8333H15.8333C16.7538 18.8333 17.5 18.0871 17.5 17.1666V5.49992C17.5 4.57944 16.7538 3.83325 15.8333 3.83325Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3335 2.16675V5.50008"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.6665 2.16675V5.50008"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 8.83325H17.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.6665 12.1667H6.67484"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12.1667H10.0083"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3335 12.1667H13.3418"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.6665 15.5H6.67484"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 15.5H10.0083"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3335 15.5H13.3418"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sat, 3 Jul
            </li>
            <li className="flex items-center gap-1">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 18.8334C14.6022 18.8334 18.3332 15.1025 18.3332 10.5001C18.3332 5.89771 14.6022 2.16675 9.99984 2.16675C5.39746 2.16675 1.6665 5.89771 1.6665 10.5001C1.6665 15.1025 5.39746 18.8334 9.99984 18.8334Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.5V10.5H13.75"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Evening
            </li>
          </ul>
          <div className="w-[70px] h-[70px] bg-primary-100 rounded-xl border border-white shadow-lg relative">
            <img
              src="images/ava.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <svg
        width="58"
        height="90"
        viewBox="0 0 58 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-2"
      >
        <path
          d="M28.9994 82L27.2768 83.067L28.9994 85.848L30.722 83.067L28.9994 82ZM28.9994 82C30.722 83.067 30.7222 83.0668 30.7224 83.0663L30.7234 83.0647L30.7271 83.0588L30.7409 83.0364L30.7944 82.9498C30.8413 82.8736 30.9105 82.7611 31.0005 82.6142C31.1804 82.3203 31.4436 81.8888 31.7782 81.3355C32.4472 80.229 33.4019 78.6351 34.547 76.6811C36.8362 72.7746 39.8911 67.4212 42.9485 61.6413C46.0025 55.8676 49.0759 49.6364 51.3911 43.9808C53.6694 38.4154 55.3415 33.1125 55.3415 29.3158C55.3415 14.7674 43.5477 2.97368 28.9994 2.97368C14.451 2.97368 2.65728 14.7674 2.65728 29.3158C2.65728 33.1125 4.32936 38.4154 6.60767 43.9808C8.92284 49.6364 11.9963 55.8676 15.0503 61.6413C18.1076 67.4212 21.1625 72.7746 23.4518 76.6811C24.5969 78.6351 25.5515 80.229 26.2206 81.3355C26.5551 81.8888 26.8183 82.3203 26.9983 82.6142C27.0883 82.7611 27.1575 82.8736 27.2044 82.9498L27.2579 83.0364L27.2717 83.0588L27.2753 83.0647L27.2763 83.0663C27.2766 83.0668 27.2768 83.067 28.9994 82Z"
          fill="#21605D"
          stroke="white"
          stroke-width="4.05263"
        />
      </svg>
    </div>
  );
};

export default FloatingUser;
