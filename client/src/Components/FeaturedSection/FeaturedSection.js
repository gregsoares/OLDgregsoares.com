import React from 'react'

import monitoringImg from './assets/monitoring.jpg';
import reportingImg from './assets/reporting.jpg';
import syncingImg from './assets/syncing.jpg';

export const FeaturedSection = () => {
  return (
    <div data-testid="FeaturedSectionContainer">
      <section className="container p-10 px-6 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Features
        </h2>
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
