import React from "react";
export const HeroCTA = () => {
  const resume = "./GregSoares-Resume.pdf";
  return (
    <div className="overflow-hidden box-border" data-testid="HeroCTAContainer">
      <div
        className="pt-8 pb-12 font-medium xl:font-lg text-gray-200 "
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="w-full px-6 text-center">
          <h2 className="flex mb-10 justify-evenly text-md md:text-xl lg:text-2xl font-bold text-white">
            <p className="mx-2">
              <span className=" block md:inline mr-4 object-top">&#9737;</span>{" "}
              Networking
            </p>
            <p className="mx-2">
              <span className=" block md:inline mr-4 object-bottom">
                &#9737;
              </span>{" "}
              Cyber Security
            </p>
            <p className="mx-2">
              <span className=" block md:inline mr-4 object-top">&#9737;</span>{" "}
              Web Development
            </p>
          </h2>
          <div className="leading-6 sm:text-md md:text-lg" id="stackList">
            <span className="py-2 text-xl tracking-wide text-white sm:text-md sm:border-2 sm:border-l-0 sm:border-r-0 sm:border-gray-400 md:text-lg">
              Some of my favorite projects cover the following topics:
            </span>
            <ul
              className="justify-around mx-auto my-6 text-sm leading-10 tracking-wider lg:text-md md:flex"
              data-testid="CTA_list_container"
            >
              <div className="sm:flex ">
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center sm:border-0 border border-b-0 border-l-0 border-r-0">
                  <p className="font-bold ">Networking</p>Intrusion Detection
                  System (Zeek / Snort), Proxy, Nmap, MSFConsole, BurpSuite
                </li>
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center sm:border-t-0 sm:border-b-0 sm:border-r-0 md:border-0 border border-b-0 border-l-0 border-r-0 sm:border">
                  <p className="font-bold ">Web Development</p>
                  NodeJs, React, Boostrap, TailwindCSS, Github, DevOps, Linux
                  Web Server Deployment
                </li>
              </div>
              <div className="sm:flex">
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center sm:border-0 border border-b-0 border-l-0 border-r-0">
                  <p className="font-bold ">Security</p>
                  Vulnerability Asessment in Web Application, Networks,
                  Operating Systems
                </li>
                <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-center sm:border-t-0 sm:border-b-0 sm:border-r-0 md:border-0 border border-b-0 border-l-0 border-r-0 sm:border">
                  <p className="font-bold ">Threat Analysis</p>
                  Vulnerability Signature Scripting(Bash, Python, Lua), Splunk,
                  BrimSecurity, ELK Stack (Elastic, LogStash and Kibana)
                </li>
              </div>
            </ul>
          </div>

          <div className="mt-4">
            <a
              className="px-6 py-4 font-bold tracking-wider text-gray-700 uppercase bg-gray-200 rounded-lg shadow-lg hover:text-black hover:bg-white hover:border hover:border-black"
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
