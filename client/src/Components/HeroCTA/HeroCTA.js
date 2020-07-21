import React from "react";
export const HeroCTA = () => {
  return (
    <div
      className="overflow-hidden border rounded-b-lg"
      data-testid="HeroCTAContainer"
    >
      <div
        className="pt-8 pb-12 font-medium xl:font-lg text-gray-200 "
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="w-full px-6 text-center">
          <h2 className="mb-10 text-4xl font-bold text-white">
            Networking, Cyber Security, Web Development, ...
          </h2>
          <div className="leading-6 sm:text-md md:text-lg" id="stackList">
            <span className="py-2 text-xl tracking-wide text-white sm:text-md sm:border-2 sm:border-l-0 sm:border-r-0 sm:border-gray-400 md:text-lg">
              Some of my favorite projects cover the following topics:
            </span>
            <ul
              className="justify-around mx-auto my-6 text-sm leading-10 tracking-wider lg:text-md md:flex"
              data-testid="CTA_list_container"
            >
              <div className="sm:flex">
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center ">
                  <p className="font-bold ">Networking</p>Intrusion Detection
                  System (Zeek / Snort), Proxy, Nmap, MSFConsole, BurpSuite
                </li>
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center ">
                  <p className="font-bold ">Web Development</p>
                  NodeJs, React, Boostrap, TailwindCSS, Github, DevOps, Linux
                  Web Server Deployment
                </li>
              </div>
              <div className="sm:flex">
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center ">
                  <p className="font-bold ">Security</p>
                  Vulnerability Asessment in Web Application, Networks,
                  Operating Systems
                </li>
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center ">
                  <p className="font-bold ">Threat Analysis</p>
                  Vulnerability Signature Scripting(Bash, Python, Lua), Splunk,
                  BrimSecurity, ELK Stack (Elastic, LogStash and Kibana)
                </li>
              </div>
            </ul>
          </div>

          <div className="mt-4">
            <button className="px-6 py-4 font-bold tracking-wider text-gray-700 uppercase bg-gray-200 rounded-lg shadow-lg hover:text-black hover:bg-white hover:border hover:border-black">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
