import React from 'react'
import { Tag } from "../Tag/Tag";
import { FeatSection } from "./FeatSection";

import reportingImg from './assets/reporting.jpg';
import syncingImg from './assets/syncing.jpg';
import AgencyImg from './assets/AgencySS.png';

export const FeaturedSection = () => {
  return (
    <div className="" data-testid="FeaturedSectionContainer">
      <section className="">
        <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-gray-800">
          Projects
        </h2>
        <FeatSection
          featTitle="GregSoares.com ➡ Full MERN Stack"
          featSubtitle="MongoDB, NodeJs+ExpressJs, ReactJs"
          featText={["Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly."]}
          featTags={["Bootstrap", "Tech Skill", "Pro Debugger"]}
          featImg={AgencyImg}
          bgColor="bg-indigo-400"
        />
        <FeatSection
          featTitle="Bootstrap Template ➡ Full MERN Stack Template"
          featSubtitle=""
          featText={["Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly."]}
          featTags={["Bootstrap", "Tech Skill", "Pro Debugger"]}
          featImg={AgencyImg}
        />
        {/* Agency Section */}
        {/* <div className="justify-around px-4 py-4 mx-0 sm:flex" id="agencySection" data-testid="AgencyContainer" >
          <div className="text-center">
            <span className="my-3 text-lg text-center text-gray-800 border border-l-0 border-r-0 border-gray-800">
              Agency Template
          </span>
            <p className="px-4 my-2 text-sm text-center lg:text-md">
              Bootstrap Template <span className="text-lg md:text-xl lg:text-2xl"> ➡ </span> Full MERN Stack Template
            </p>
            <div className="">
              <span className="text-sm text-left">
                
                <br />
              </span>
              <span className="text-sm text-left">
                ➡ Full MERN Stack Template
                <br />
              </span>
              <span className="text-sm text-left">
                ➡ Full MERN Stack Template
                <br />
              </span>
              <span className="text-sm text-left">
                ➡ Full MERN Stack Template
                <br />
              </span>

            </div>
            <div className="flex flex-wrap-reverse justify-around mt-2 mb-6 bg-opacity-75 sm:mt-4 md:mt-6">
              <div className="flex p-1 mx-1 my-1 bg-gray-400 bg-opacity-50 rounded-full">
                <Tag text="" />
              </div>
              <div className="flex p-1 my-1 mr-1 bg-gray-400 bg-opacity-50 rounded-full">
                <Tag text="" />
              </div>
              <div className="flex p-1 my-1 mr-1 bg-gray-400 bg-opacity-50 rounded-full">
                <Tag text="ReactJs" />
              </div>
              <div className="flex p-1 my-1 mr-1 bg-gray-400 bg-opacity-50 rounded-full">
                <Tag text="Modularization" />
              </div>
            </div>
          </div>

          <div className="w-2/3 mx-auto my-4 sm:max-w-sm">
            <img className="rounded-md" src={AgencyImg} alt="Monitoring" />
          </div>
        </div> */}

        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full md:w-1/2">
            <img src={reportingImg} alt="Reporting" />
          </div>
          <div className="w-full pl-10 md:w-1/2">
            <h4 className="mb-3 text-3xl font-bold text-gray-800">Reporting</h4>
            <p className="mb-8 text-gray-600">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="mb-3 text-3xl font-bold text-gray-800">Syncing</h4>
            <p className="mb-8 text-gray-600">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/LInux or Windows OS.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={syncingImg} alt="Syncing" />
          </div>
        </div>
      </section>
    </div>
  )
}
