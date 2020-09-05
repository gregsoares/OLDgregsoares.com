import React from "react";

// ==> props <==
// postTitle
// postText
// postImg

export const PostSection = (props) => {
  const { postImg, postTitle, postText } = props.content;
  return (
    <div
      className="px-4 py-8 font-sans text-gray-500 "
      data-testid="PostSectionContainer"
    >
      <div className="max-w-2xl mx-auto overflow-hidden rounded-md shadow-md brand-lighterBlue">
        <div className="flex flex-col items-center justify-center leading-normal tracking-wide text-center ">
          <img
            src={postImg}
            alt="PlaceHolder"
            className="object-cover w-full"
          />
        </div>

        <div className="py-8 mx-8 ">
          <h3 className="my-6 text-2xl text-center text-gray-400 sm:text-3xl ">
            {postTitle}
          </h3>
          <p className="mx-1 leading-relaxed tracking-wide sm:mx-2 md:mx-4">
            {postText}
          </p>
        </div>

        {/* Footer section */}
        <div className="mt-2 text-center text-grey-darker">
          <h3 className="mb-4 text-base sm:text-lg">
            <button className="w-full py-4 my-8 text-sm tracking-wide text-gray-300 border rounded shadow-md brand-blue-gradient hover:text-white hover:shadow-lg">
              Live Preview
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
};
