import React from "react";

export const InsureChallenge = () => {
  return (
    <div className="mx-4 my-16 overflow-hidden border border-gray-700 rounded-md shadow-md sm:mx-auto lg:max-w-4xl md:max-w-2xl xs:max-w-lg sm:max-w-lg brand-lighterBlue">
      <h3 className="my-6 text-2xl text-center text-gray-400 sm:text-3xl ">
        Insure Landing Page Challenge
      </h3>
      <div className="flex flex-col items-center justify-center leading-normal tracking-wide text-center ">
        <img
          src="https://github.com/gregsoares/insure-page-challenge/raw/master/design/desktop-preview.jpg"
          alt="Main Application file"
          className="object-cover w-full"
        />
      </div>

      <div className="py-8 mx-8 ">
        <p className="leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4">
          <span className="pl-2">F</span>rontEndMentor.io provides these
          challenges that are just like another day as a front end web
          developer, given an image or description de dev must approximate the
          desired design. The above Image shows the given template, and the Live
          Preview goes to my solution to this challenge.
        </p>
        <ol className="mx-6 my-3 list-disc list-inside">
          {/* <p className="my-2 font-medium text-gray-300">Tools Used:</p> */}
          <li className="my-1">HTML</li>
          <li className="my-1">TailwindCSS</li>
        </ol>

        <p className="my-3 leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4">
          <span className="pl-2">I</span> used this challenge to learn more
          about TailwindCSS. It allowed me to just write all in one HTML file to
          quickly prototype this challenge. Some of the challenge objectives is
          to make a mobile version of the design, and some hover effects, and
          TailwindCSS provides all of that and much more.
        </p>
        <p className="mt-5 leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4">
          <span className="pl-2">C</span>heck out the solution currently
          deployed to firebase, the code can be found on
          <a href="https://github.com/gregsoares/insure-page-challenge">
            {" "}
            my github
          </a>
          .
        </p>
      </div>

      {/* Footer section */}
      <div className="mt-2 text-center text-grey-darker">
        <h3 className="">
          <a
            className="block w-full py-4 mt-8 tracking-wide text-gray-300 border rounded shadow-md brand-blue-gradient hover:border-white hover:border-2 hover:text-white hover:shadow-lg"
            href="https://insurechallenge.web.app/"
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
