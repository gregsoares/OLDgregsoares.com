import React from "react";
export const HeroCTA = () => {
  return (
    <div
      className="border border-t-0 border-l-0 border-r-0 border-greay-200 brand-lighterBlue"
      data-testid="HeroCTAContainer"
    >
      <div className="pt-8 pb-12 font-medium text-gray-200 xl:font-lg ">
        <div className="w-full px-6 text-center">
          <div className="leading-6 sm:text-md md:text-lg" id="stackList">
            <span className="py-2 text-xl tracking-wide text-white sm:text-md sm:border-2 sm:border-l-0 sm:border-r-0 sm:border-gray-400 md:text-xl">
              Some of my favorite projects cover the following topics:
            </span>
            <ul
              className="justify-around mx-auto my-6 text-sm leading-10 tracking-wider lg:text-md md:flex"
              data-testid="CTA_list_container"
            >
              <div className="sm:flex ">
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center border border-b-0 border-l-0 border-r-0 sm:border-0">
                  <p className="font-bold ">Networking</p>Intrusion Detection
                  System (Zeek / Snort), Proxy, Nmap, MSFConsole, BurpSuite
                </li>
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center border border-b-0 border-l-0 border-r-0 sm:border-t-0 sm:border-b-0 sm:border-r-0 md:border-0 sm:border">
                  <p className="font-bold ">Web Development</p>
                  NodeJs, React, Boostrap, TailwindCSS, Github, DevOps, Linux
                  Web Server Deployment
                </li>
              </div>
              <div className="sm:flex">
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center border border-b-0 border-l-0 border-r-0 sm:border-0">
                  <p className="font-bold ">Security</p>
                  Vulnerability Asessment in Web Application, Networks,
                  Operating Systems
                </li>
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center border border-b-0 border-l-0 border-r-0 sm:border-t-0 sm:border-b-0 sm:border-r-0 md:border-0 sm:border">
                  <p className="font-bold ">Threat Analysis</p>
                  Vulnerability Signature Scripting(Bash, Python, Lua), Splunk,
                  BrimSecurity, ELK Stack (Elastic, LogStash and Kibana)
                </li>
              </div>
            </ul>
          </div>

          <div className="my-4">
            <a
              className="px-6 py-4 font-bold tracking-wider text-gray-300 uppercase border border-gray-500 rounded-lg shadow-lg hover:border-gray-200 brand-lightBlue hover:bg-topnav hover:text-white hover:shadow-xl"
              href="/GregSoares-Resume.pdf"
              target="_blank"
              rel="noreferrer noopenner"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
