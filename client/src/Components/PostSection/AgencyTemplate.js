import React from "react";

export const AgencyTemplate = () => {
  return (
    <div className="max-w-2xl mx-auto my-8 overflow-hidden rounded-md shadow-md brand-lighterBlue">
      <div className="flex flex-col items-center justify-center leading-normal tracking-wide text-center ">
        <img
          src="https://i.ibb.co/bPZP53N/Screenshot-from-2020-09-06-17-56-06.png"
          alt="Main Application file"
          className="w-full object-fit max-h-80-screen"
        />
      </div>

      <div className="py-8 mx-8 ">
        <h3 className="my-6 text-2xl text-center text-gray-400 sm:text-3xl ">
          Agency Template
        </h3>
        <p className="leading-relaxed tracking-wide sm:mx-2 md:mx-4">
          Downloaded this Bootstrap template from BootstrapMade.com and rebuilt
          it into a full MERN stack template. Components are easily reusable in
          any other project, easy copy and paste to minize rework.
        </p>
        <ol className="my-3 list-disc list-inside">
          <p className="my-2 font-medium text-gray-300">Tools Used:</p>
          <li>MERN</li>
          <li>Bootstrap</li>
        </ol>

        <p className="my-3 leading-relaxed tracking-wide sm:mx-2 md:mx-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          suscipit rerum, labore sunt corrupti adipisci maiores ad numquam saepe
          blanditiis illum velit! Sapiente et distinctio temporibus voluptate
          repudiandae asperiores laudantium.
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
