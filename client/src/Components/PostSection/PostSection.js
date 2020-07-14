import React from 'react'

// ==> props <==
// postTitle
// postText
// postImg

export const PostSection = props => {
  const { postImg } = props;
  return (
    <div data-testid="PostSectionContainer">
      {/*  */}
      <div className="flex flex-wrap items-center mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="mb-3 text-3xl font-bold text-gray-800">Exercise Metric</h4>
          <p className="mb-8 text-gray-600">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={postImg} alt="Monitoring" />
        </div>
      </div>

    </div>
  )
}
