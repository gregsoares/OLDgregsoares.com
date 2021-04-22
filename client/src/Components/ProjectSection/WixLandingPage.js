import React from 'react';

export const WixLandingPage = () => {
  return (
    <div className='mx-4 my-16 overflow-hidden border border-gray-700 rounded-md shadow-md sm:mx-auto lg:max-w-4xl md:max-w-2xl xs:max-w-lg sm:max-w-lg brand-lighterBlue'>
      <h3 className='my-6 text-2xl text-center text-gray-400 sm:text-3xl '>
        Wix Landing Page
      </h3>
      <div className='flex flex-col items-center justify-center leading-normal tracking-wide text-center '>
        <img
          src='https://i.ibb.co/T4VSb21/Screenshot-from-2020-09-30-22-47-48.png'
          alt='Wix Landing Page Screenshot'
          className='object-cover max-w-4xl'
        />
      </div>

      <div className='flex-col py-8 mx-8 justify-evenly'>
        <p className='leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4'>
          <span className='pl-2'>C</span>hanging gears from coding and having
          the power to customize everything is difficult, on the other hand, it
          is quite fun to be able to fall back to it anytime I need. As I start
          my freelancing / consulting business, I realize that I must adapt and
          continue to be versatile in what skills and services I can offer.
          <br />
          <span className='pl-2'></span>This Langing page is the beginning of it
          all, forever under construction, it will contain my new portfolio from
          my freelancing work
        </p>
        <div className='flex justify-around'>
          <ol className='my-3 list-disc list-inside '>
            Web Platforms:
            {/* <p className="my-2 font-medium text-gray-300">Tools Used:</p> */}
            <li className='w-full my-1'>Wordpress</li>
            <li className='w-full my-1'>Wix</li>
            <li className='w-full my-1'>Squarepace</li>
          </ol>
          <ol className='my-3 list-disc list-inside '>
            Web Platforms:
            {/* <p className="my-2 font-medium text-gray-300">Tools Used:</p> */}
            <li className='w-full my-1'>Shopify</li>
            <li className='w-full my-1'>Prestashop </li>
            <li className='w-full my-1'>ShipStation</li>
          </ol>
        </div>
        <p className='my-3 leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4'>
          <span className='pl-2'>I</span> love how these platforms bring
          everything from setting up Hostname, Domains, Email, Search Engine
          Optimization, all in one place. There's definetly much to do!
        </p>
        <p className='mt-5 leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4'>
          <span className='pl-2'>C</span>heck out the Wix Landing Page, and my
          <a
            href='https://www.upwork.com/freelancers/~016e40a81aa39e3594'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <span className='text-white underline'>Upwork Profile</span>
          </a>{' '}
          if you're at all interested in Web Solutions.
        </p>
      </div>

      {/* Footer section */}
      <div className='mt-2 text-center text-grey-darker'>
        <h3 className=''>
          <a
            className='block w-full py-4 mt-8 tracking-wide text-blue-600 border rounded shadow-md brand-blue-gradient hover:border-white hover:border-2 hover:text-white hover:shadow-lg'
            href='https://gregasoares.wixsite.com/portfolio'
            target='_blank'
            rel='noopener noreferrer'
          >
            Go To Wix Landing Page
          </a>
        </h3>
      </div>
    </div>
  );
};
