import React from 'react'

import monitoringImg from './assets/monitoring.jpg';
import reportingImg from './assets/reporting.jpg';
import syncingImg from './assets/syncing.jpg';
import AgencyImg from './assets/AgencySS.png';

export const FeaturedSection = () => {
  return (
    <div className="" data-testid="FeaturedSectionContainer">
      <section className="">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Projects
        </h2>
        <div className="flex flex-wrap justify-around py-8 pb-10 overflow-hidden bg-gray-300 rounded-lg">
          <div className="flex-col mx-auto text-center ">
            <h4 className="pb-0 mb-0 text-3xl font-bold text-gray-800 ">"Reactify"</h4>
            <p className="pt-0 mt-0 mb-5 text-gray-700">Full MERN Stack</p>
            <div className="flex-col justify-center mb-5 text-gray-700 ">
              <p className="my-3" >Static Bootstrap Template <span className="text-2xl"> ➡ </span> Full Stack Web Application</p>
              <ul className="">
                <li className="mb-1 leading-relaxed tracking-wide "><p className="ml-4 sm:ml-6 md:ml-10">
                  Each section ready for export as stand-alone React Component
                </p> </li>
                <li className="mb-1 leading-relaxed tracking-wide "><p className="ml-4 sm:ml-6 md:ml-10">
                  REST API ready
                </p> </li>
                <li className="mb-1 leading-relaxed tracking-wide "><p className="ml-4 sm:ml-6 md:ml-10">
                  Bootstrap + FontAwesome
                </p> </li>
                <li className="mb-1 leading-relaxed tracking-wide "><p className="ml-4 sm:ml-6 md:ml-10">
                  HTML, CSS3, JavaScript, ReactJs
                </p> </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-2/5 sm:px-4">
            <img className="rounded-md" src={AgencyImg} alt="Monitoring" />
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="mb-3 text-3xl font-bold text-gray-800">Exercise Metric</h4>
            <p className="mb-8 text-gray-600">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={monitoringImg} alt="Monitoring" />
          </div>
        </div>

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
