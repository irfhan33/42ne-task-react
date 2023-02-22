import React from "react";
import Navigation from "./Navigation";

const UserList = () => {
  const usersData = [
    {
      title: "Online 30min users testers",
      price: "$20",
      location: "Remote",
      date: "Fri, 8 Jul",
      time: "Anytime",
      offer: "3",
    },
    {
      title: "Online 30min users testers",
      price: "$20",
      location: "Remote",
      date: "Fri, 8 Jul",
      time: "Anytime",
      offer: "3",
    },
    {
      title: "Online 30min users testers",
      price: "$20",
      location: "Remote",
      date: "Fri, 8 Jul",
      time: "Anytime",
      offer: "3",
    },
    {
      title: "Online 30min users testers",
      price: "$20",
      location: "Remote",
      date: "Fri, 8 Jul",
      time: "Anytime",
      offer: "3",
    },
    {
      title: "Online 30min users testers",
      price: "$20",
      location: "Remote",
      date: "Fri, 8 Jul",
      time: "Anytime",
      offer: "3",
    },
    {
      title: "Online 30min users testers",
      price: "$20",
      location: "Remote",
      date: "Fri, 8 Jul",
      time: "Anytime",
      offer: "3",
    },
    {
      title: "Online 30min users testers",
      price: "$20",
      location: "Remote",
      date: "Fri, 8 Jul",
      time: "Anytime",
      offer: "3",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="grow relative">
        <ul className="flex flex-col gap-3 absolute inset-0 overflow-auto">
          {usersData.map((item) => (
            <li>
              <div className="bg-[#EAEBED] rounded-[30px]">
                <div className="border border-white border-1.5 rounded-bl-[30px] p-4">
                  <div className="flex items-center gap-2 justify-between font-medium">
                    <span>{item.title}</span>
                    <span className="font-bold text-lg">{item.price}</span>
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
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 11.3333C11.3807 11.3333 12.5 10.214 12.5 8.83325C12.5 7.45254 11.3807 6.33325 10 6.33325C8.61929 6.33325 7.5 7.45254 7.5 8.83325C7.5 10.214 8.61929 11.3333 10 11.3333Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item.location}
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
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.3335 2.16675V5.50008"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.6665 2.16675V5.50008"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.5 8.83325H17.5"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.6665 12.1667H6.67484"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 12.1667H10.0083"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.3335 12.1667H13.3418"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.6665 15.5H6.67484"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 15.5H10.0083"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.3335 15.5H13.3418"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item.date}
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
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 5.5V10.5H13.75"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item.time}
                      </li>
                    </ul>
                    <img
                      src="images/ava.png"
                      alt=""
                      className="shrink-0 w-[70px] object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 text-primary-300">
                  <span>{`OPEN - ${item.offer} Offer`}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#21605D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16L16 12L12 8"
                      stroke="#21605D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke="#21605D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Navigation />
    </div>
  );
};

export default UserList;
