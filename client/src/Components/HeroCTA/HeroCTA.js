import React from 'react'

export const HeroCTA = () => {
  return (
    <div data-testid="HeroCTAContainer">
      <div className="pt-10 pb-12 text-gray-200 " style={{ "background": "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
      >
        <div className="w-full px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            It's not a job if you enjoy it.
          </h2>
          <div className="leading-6 sm:text-md md:text-lg" id="stackList">
            <span className="py-2 text-lg tracking-wide text-white border-2 border-l-0 border-r-0 border-gray-400 md:text-xl">Here are of the areas my favorite projects cover:</span>
            <ul className="mx-6 my-6 leading-10 tracking-wider" data-testid="CTA_list_container">
              <li className="w-1/2 px-4 my-2 mr-auto border border-t-0 border-b-0 border-l-2 border-r-2 border-gray-400 rounded-full">
                <span className="mr-2 font-bold">
                  Networking -
                </span>Intrusion Detection System (Zeek / Snort), Proxy, Nmap, MSFConsole, BurpSuite
                </li>
              <li className="w-1/2 px-4 my-4 ml-auto border border-t-0 border-b-0 border-l-2 border-r-2 border-gray-400 rounded-full ">
                <span className="mr-2 font-bold">
                  Web Development -
              </span>
                 NodeJs, React, Boostrap, TailwindCSS, Github, DevOps, Linux Web Server Deployment
                </li>
              <li className="w-1/2 px-4 my-2 mr-auto border border-t-0 border-b-0 border-l-2 border-r-2 border-gray-400 rounded-full">
                <span className="mr-2 font-bold">
                  Security -
              </span>
                Vulnerability Asessment in Web Application, Networks, Operating Systems
                </li>
              <li className="w-1/2 px-4 my-4 ml-auto border border-t-0 border-b-0 border-l-2 border-r-2 border-gray-400 rounded-full ">
                <span className="mr-2 font-bold">
                  Threat Analysis -
              </span>
                Vulnerability Signature Scripting(Bash, Python, Lua), Splunk + BrimSecurity, ELK (Elastic, LogStash and Kibana)
                </li>

            </ul>
          </div>

          <div className="mt-4">
            <button className="px-8 py-4 font-bold tracking-wider text-gray-700 uppercase bg-gray-200 rounded-full shadow-lg hover:text-black hover:bg-white hover:border hover:border-black">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
