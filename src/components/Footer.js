import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 border-t border-b py-30">

          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 dark:border-gray-700 custom-lg:ml-11">

            {/* 1st block */}
            <div className="col-span-12 custom-lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 dark:border-blue-500 p-8 bg-gray-200 dark:bg-gray-700 text-[#21314f] dark:text-gray-100 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">AI TakeOver</h3>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 custom-lg:col-span-1 ml-7 mx-auto ">
              <h6 className="text-[#21314f] text-xl dark:text-white font-bold mb-4">LINKS</h6>
              <ul>
                <li className="mb-2">
                  <HashLink
                    to="/#about"
                    className="text-[#21314f] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:tracking-wider transition duration-250 ease-in-out">
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/#services"
                    className="text-[#21314f] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:tracking-wider transition duration-250 ease-in-out">
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/contact#contact"
                    className="text-[#21314f] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:tracking-wider transition duration-250 ease-in-out">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 custom-lg:col-span-4 mx-auto hover:tracking-wider transition duration-250 ease-in-out">
              <h6 className="text-[#21314f] dark:text-white text-xl font-bold mb-4">OUR SERVICES</h6>
              <div className="text-[#21314f] dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                <ul>
                  <li className="mb-2">AI Integration</li>
                  <li className="mb-1">Web Development</li>
                </ul>
              </div>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto custom-lg:col-span-3 font-bold uppercase text-[#21314f] dark:text-white">
              <div className="text-xl mb-6">
                Social Media Links.
              </div>

              <div className="font-medium mb-6">
                Follow us on social media.
              </div>

              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/ai-takeover"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 flex justify-center items-center text-blue-600 dark:text-blue-400 hover:text-gray-500 dark:hover:text-gray-300 bg-orange-100 dark:bg-gray-800 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="LinkedIn">
                      <svg
                        width="55"
                        height="35"
                        viewBox="0 0 24 29"
                        className="fill-current font-black hover:animate-pulse item">
                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm font-semibold text-[#21314f] dark:text-white">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <HashLink
                  to="#hero"
                  className="text-lg hover:text-white dark:hover:text-[#21314f]">
                  AI TakeOver
                </HashLink>. All rights reserved.
                <br />
                <a
                  href="https://github.com/OsmanArshid"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black dark:text-cyan-300 hover:text-cyan-300 dark:hover:text-white">
                  Made by Osman
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
