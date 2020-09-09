import React from "react";

export const AgencyTemplate = () => {
  return (
    <div className="mx-4 my-16 overflow-hidden border border-gray-700 rounded-md shadow-md sm:mx-auto lg:max-w-4xl md:max-w-2xl xs:max-w-lg sm:max-w-lg brand-lighterBlue">
      <h3 className="my-6 text-2xl text-center text-gray-400 sm:text-3xl ">
        Agency Template
      </h3>
      <div className="flex flex-col items-center justify-center leading-normal tracking-wide text-center ">
        <img
          src="https://i.ibb.co/bPZP53N/Screenshot-from-2020-09-06-17-56-06.png"
          alt="Main Application file"
          className="w-full object-fit max-h-80-screen"
        />
      </div>

      <div className="py-8 mx-8 ">
        <p className="leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4">
          <span className="pl-2">I</span> downloaded this Bootstrap template
          from BootstrapMade.com and adapted it to a full MERN stack template.
          Components are designed to be easily reusable in any other project to
          minize rework. The idea is to have a template that can be easily
          redesigned or have it's components reused in other projects.
        </p>
        <ol className="mx-6 my-3 list-disc list-inside">
          <li className="my-1">MERN</li>
          <li className="my-1">Bootstrap</li>
          <li className="my-1">REST API</li>
        </ol>

        <p className="my-3 leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4">
          <span className="pl-2">T</span>he back-end is just enough to prep the
          ExpressJs and MongoBG for API and data strogage, as well as Heroku
          deployment. The front-end is all inside the <i>client</i> folder, make
          with create-react-app, styled with Bootstrap and deployed to Firebase.
        </p>
      </div>

      {/* Footer section */}
      <div className="mt-2 text-center text-grey-darker">
        <h3 className="text-base ">
          <a
            className="block w-full py-4 mt-8 tracking-wide text-gray-300 border rounded shadow-md brand-blue-gradient hover:border-white hover:border-2 hover:text-white hover:shadow-lg"
            href="https://agencytemplate-4eca5.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
        </h3>
      </div>
    </div>
  );
};
