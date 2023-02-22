import React from "react";

const Footer = () => {
  return (
    <footer className="padding flex flex-col items-center space-y-4 pb-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <ul>
          <li>Discover</li>
          <li>How it works</li>
          <li>Task for business</li>
          <li>Earn Money</li>
          <li>Search jobs</li>
          <li>Service Guides</li>
          <li>New users FAQ</li>
        </ul>
        <ul>
          <li>Company</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Media enquiries</li>
          <li>Community guideliness</li>
          <li>Tasker principles</li>
          <li>Trems & conditions</li>
          <li>Blog</li>
          <li>Contanct us</li>
          <li>Privacy policy</li>
          <li>Investors</li>
        </ul>
        <ul>
          <li>Existis Members</li>
          <li>Post a task</li>
          <li>browse tasks</li>
          <li>Login</li>
          <li>Support centre</li>
          <li>Marchandise</li>
        </ul>
        <ul>
          <li>Popular Categories</li>
          <li>Handyman services</li>
          <li>Cleaning Services</li>
          <li>Delivery Services</li>
          <li>Removalists</li>
          <li>Gardening Services</li>
          <li>Auto Eletricians</li>
          <li>Assembly Services</li>
          <li>All Services</li>
        </ul>
        <ul>
          <li>Popular Locations</li>
          <li>Sydney</li>
          <li>Melbourne</li>
          <li>Brisbane</li>
          <li>Perth</li>
          <li>Adelaide</li>
          <li>Newcastle</li>
          <li>Canberra</li>
        </ul>
      </div>
      <div className="border-b w-full justify-center flex pb-5">
        <div className="flex gap-4">
          <div>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_484)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0.52002C20.1802 0.52002 26 6.1069 26 13C26 19.8921 20.1802 25.48 13 25.48C5.82088 25.48 0 19.8921 0 13C0 6.1069 5.82088 0.52002 13 0.52002ZM18.5515 6.76002H7.44848C7.26588 6.76002 7.09077 6.83256 6.96165 6.96167C6.83254 7.09079 6.76 7.2659 6.76 7.4485V18.5515C6.76 18.9311 7.06784 19.24 7.44848 19.24H13.4264V14.4071H11.7998V12.5237H13.4264V11.1343C13.4264 9.52226 14.4102 8.6445 15.8486 8.6445C16.537 8.6445 17.1288 8.6965 17.3014 8.71938V10.4042H16.3041C15.522 10.4042 15.3712 10.7755 15.3712 11.3215V12.5237H17.2359L16.9936 14.4071H15.3712V19.24H18.5515C18.7341 19.24 18.9092 19.1675 19.0383 19.0384C19.1675 18.9093 19.24 18.7341 19.24 18.5515V7.4485C19.24 7.2659 19.1675 7.09079 19.0383 6.96167C18.9092 6.83256 18.7341 6.76002 18.5515 6.76002Z"
                  fill="#21605D"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_484">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_486)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0.52002C20.1802 0.52002 26 6.1069 26 13C26 19.8921 20.1802 25.48 13 25.48C5.82088 25.48 0 19.8921 0 13C0 6.1069 5.82088 0.52002 13 0.52002ZM10.6059 19.11C16.1002 19.11 19.1058 14.5569 19.1058 10.6163C19.1058 10.4874 19.1058 10.3595 19.1006 10.2315C19.6857 9.80829 20.1906 9.28427 20.592 8.68402C20.0564 8.92322 19.4792 9.07922 18.8729 9.15618C19.4976 8.78272 19.9655 8.19511 20.1895 7.50258C19.6134 7.84578 18.9727 8.09018 18.2905 8.22434C17.8402 7.74478 17.2444 7.4271 16.5952 7.3205C15.9461 7.2139 15.28 7.32434 14.7 7.63472C14.12 7.94509 13.6585 8.43806 13.3871 9.03727C13.1157 9.63648 13.0494 10.3085 13.1986 10.9491C12.0107 10.8897 10.8486 10.5813 9.78758 10.0438C8.72657 9.50626 7.79039 8.75175 7.03976 7.82914C6.6585 8.48713 6.542 9.26558 6.71392 10.0064C6.88583 10.7471 7.33327 11.3947 7.96536 11.8175C7.49193 11.8003 7.02917 11.6721 6.6144 11.4431V11.4847C6.6144 12.9283 7.64608 14.1388 9.00952 14.4123C8.57084 14.5324 8.11052 14.5505 7.66376 14.4654C7.85443 15.0588 8.22599 15.5777 8.72636 15.9494C9.22674 16.3211 9.83086 16.527 10.4541 16.5381C9.83455 17.025 9.12511 17.385 8.36633 17.5976C7.60755 17.8101 6.81432 17.871 6.032 17.7767C7.39844 18.6479 8.98538 19.1105 10.6059 19.11Z"
                  fill="#21605D"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_486">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_488)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0.52002C20.1802 0.52002 26 6.1069 26 13C26 19.8921 20.1802 25.48 13 25.48C5.82088 25.48 0 19.8921 0 13C0 6.1069 5.82088 0.52002 13 0.52002ZM19.916 9.45362C19.8334 9.14624 19.6714 8.86598 19.4464 8.64092C19.2213 8.41586 18.9411 8.25391 18.6337 8.1713C17.5032 7.86866 12.9688 7.86866 12.9688 7.86866C12.9688 7.86866 8.43544 7.86866 7.30496 8.17026C6.99777 8.25325 6.71771 8.41533 6.49271 8.64033C6.26771 8.86533 6.10563 9.14539 6.02264 9.45258C5.72 10.5841 5.72 12.9428 5.72 12.9428C5.72 12.9428 5.72 15.3015 6.02264 16.432C6.18904 17.056 6.68096 17.5469 7.30496 17.7143C8.43544 18.017 12.9688 18.017 12.9688 18.017C12.9688 18.017 17.5032 18.017 18.6337 17.7143C19.2577 17.5479 19.7486 17.056 19.916 16.432C20.2176 15.3015 20.2176 12.9428 20.2176 12.9428C20.2176 12.9428 20.2176 10.5841 19.916 9.45258V9.45362ZM15.2859 12.9428L11.519 15.1175V10.7682L15.2859 12.9418V12.9428Z"
                  fill="#21605D"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_488">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="text-sm font-light">
        Task. Ltd 2011-2022©, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
