import React from "react";

export const SinglePost = () => {
  return (
    <div className="max-w-2xl mx-auto overflow-hidden rounded-md shadow-md brand-lighterBlue">
      <div className="flex flex-col items-center justify-center leading-normal tracking-wide text-center ">
        <img
          src="https://camo.githubusercontent.com/0dc9dfa3011c33bcee27650ad28fd1090d7f21d2/68747470733a2f2f692e6962622e636f2f6e7333724e78502f7365727665722d6170702e706e67"
          alt="Main Application file"
          className="object-cover w-full"
        />
      </div>

      <div className="py-8 mx-8 ">
        <h3 className="my-6 text-2xl text-center text-gray-400 sm:text-3xl ">
          MERN Starter Template
        </h3>
        <p className="leading-relaxed tracking-wide sm:mx-2 md:mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, non?
          Quaerat consequatur saepe adipisci eos blanditiis atque aliquid
          aspernatur laboriosam nam sit dolore tempora nulla nostrum a, labore
          non accusantium!
        </p>
        <ol className="my-3 list-disc list-inside">
          <li>MongoDB</li>
          <li>ExpressJs</li>
          <li>ReactJs</li>
          <li>NodeJs</li>
          <li>REST API</li>
          <li>Heroku Deployment Ready</li>
        </ol>

        <p className="my-3 leading-relaxed tracking-wide sm:mx-2 md:mx-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
          asperiores lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. asperiores?
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
          asperiores?
        </p>
        <div className="w-full p-0 my-3">
          <img
            src="https://camo.githubusercontent.com/df364c67033104c8a6d98902d9277cffecb676c9/68747470733a2f2f692e6962622e636f2f4a6d43484236362f7365727665722e706e67"
            alt="Server File"
          />
        </div>
        <p className="mt-5 leading-relaxed tracking-wide sm:mx-2 md:mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          quam? Iusto consequuntur consectetur vero eius alias vel, quaerat
          exercitationem?
        </p>
      </div>

      {/* Footer section */}
      <div className="mt-2 text-center text-grey-darker">
        <h3 className="mb-4  ">
          <button className="w-full py-4 my-8 tracking-wide text-gray-300 border rounded shadow-md brand-blue-gradient hover:border-white hover:border-2 hover:text-white hover:shadow-lg">
            Live Preview
          </button>
        </h3>
      </div>
    </div>
  );
};
