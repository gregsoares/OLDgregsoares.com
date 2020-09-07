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
          <span className="pl-2">D</span>ownloaded this Bootstrap template from
          BootstrapMade.com and rebuilt it into a full MERN stack template.
          Components are easily reusable in any other project, easy copy and
          paste to minize rework.
        </p>
        <ol className="mx-6 my-3 list-disc list-inside">
          <p className="my-2 font-medium text-gray-300">Tools Used:</p>
          <li>MERN</li>
          <li>Bootstrap</li>
        </ol>

        <p className="my-3 leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4">
          <span className="pl-2">L</span>orem ipsum dolor sit amet consectetur,
          adipisicing elit. Repellat suscipit rerum, labore sunt corrupti
          adipisci maiores ad numquam saepe blanditiis illum velit! Sapiente et
          distinctio temporibus voluptate repudiandae asperiores laudantium.
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
