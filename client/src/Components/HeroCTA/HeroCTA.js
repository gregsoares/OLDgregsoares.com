import React from 'react'

export const HeroCTA = () => {
  return (
    <div data-testid="HeroCTAContainer">
      <div className="pt-8 pb-12 text-gray-200 " style={{ "background": "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
      >
        <div className="w-full px-6 text-center">
          <h2 className="mb-10 text-4xl font-bold text-white">
            It's not a job if you enjoy it.
          </h2>
          <div className="leading-6 sm:text-md md:text-lg" id="stackList">
            <span className="py-2 text-lg tracking-wide text-white border-2 border-l-0 border-r-0 border-gray-400 md:text-xl">Some of my favorite projects cover the following topics:</span>
            <ul className="justify-around mx-auto my-6 leading-10 tracking-wider md:flex" data-testid="CTA_list_container">
              <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-left md:border md:border-t-0 md:border-b-0 md:border-l-0 md:border-r-1 sm:min-w-sm ">
                <p className="font-bold ">
                  Networking
                </p>Intrusion Detection System (Zeek / Snort), Proxy, Nmap, MSFConsole, BurpSuite
                </li>
              <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-left md:border md:border-t-0 md:border-b-0 md:border-l-0 md:border-r-1 sm:min-w-sm ">
                <p className="font-bold ">
                  Web Development
              </p>
                 NodeJs, React, Boostrap, TailwindCSS, Github, DevOps, Linux Web Server Deployment
                </li>
              <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-left md:border md:border-t-0 md:border-b-0 md:border-l-0 md:border-r-1 sm:min-w-sm ">
                <p className="font-bold ">
                  Security
              </p>
                Vulnerability Asessment in Web Application, Networks, Operating Systems
                </li>
              <li className="w-full py-2 pl-4 pr-1 mx-auto my-2 text-left sm:min-w-sm ">
                <p className="font-bold ">
                  Threat Analysis
              </p>
                Vulnerability Signature Scripting(Bash, Python, Lua), Splunk + BrimSecurity, ELK (Elastic, LogStash and Kibana)
                </li>

            </ul>
          </div>

          <div className="mt-4">
            <button className="px-8 py-4 font-bold tracking-wider text-gray-700 uppercase bg-gray-200 shadow-lg hover:text-black hover:bg-white hover:border hover:border-black">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
