import React from "react";

// ==> props <==
// postTitle
// postText
// postImg

export const PostSection = (props) => {
  // const { postImg, postTitle, postText } = props;
  return (
    <div
      className="min-h-screen px-4 py-8 font-sans text-gray-500 min-w-screen bg-grey-lighter"
      data-testid="PostSectionContainer"
    >
      <div className="max-w-2xl mx-auto shadow-md brand-lighterBlue ">
        <div className="flex flex-col items-center justify-center leading-normal tracking-wide text-center ">
          <img
            src="https://placeimg.com/340/280/any"
            alt="PlaceHolder"
            className="w-full bg-cover"
          />
        </div>

        <div className="py-8 mx-8 border-b">
          <h3 className="my-6 text-2xl text-center text-gray-400 sm:text-3xl ">
            New Project is finally here!
          </h3>
          <p className="mx-4 leading-normal">
            Greetings!
            <br />
            <br /> Check out this quick read on The Post about the highly
            anticipated new version of our app.
            <br />
            <br /> This means you now have an ultimate access to a new version
            of The App. Click the link below to read more!
          </p>
          <button className="w-full py-4 my-8 text-sm tracking-wide text-gray-300 border rounded shadow-md brand-blue-gradient hover:text-white hover:shadow-lg">
            Live Preview
          </button>
        </div>

        {/* Footer section */}
        <div className="mt-8 text-center text-grey-darker">
          <h3 className="mb-4 text-base sm:text-lg">
            {/* Tags place holder */}
          </h3>
        </div>
      </div>
    </div>
  );
};
