import React from 'react'
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
