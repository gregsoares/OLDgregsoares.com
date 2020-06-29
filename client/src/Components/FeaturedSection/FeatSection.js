import React from 'react'
import { Tag } from "../Tag/Tag";

export const FeatSection = props => {
  const { featImg, featTitle, featSubtitle, featText, featTags } = props;

  if (featImg == '') return 0;
  if (featImg === null) return 0;
  if (featImg === undefined) return 0;
  return (

      <div className="justify-around px-4 py-4 mx-0 sm:flex" id="agencySection" data-testid="AgencyContainer" >
        <div className="text-center ">
          <span className="my-3 text-lg text-center text-gray-800 border border-l-0 border-r-0 border-gray-800">
            {featTitle}
          </span>
          <p className="px-4 my-2 text-sm text-center lg:text-md">
            {featSubtitle}
          </p>
          <div className="border">
            {featText.map(text => 
              (<span key={Math.random(123)} className="text-sm text-left">
                {text}
                <br />
              </span>)
            )}
          </div>
            <div className="flex flex-wrap-reverse justify-around mt-2 mb-6 bg-opacity-75 sm:mt-4 md:mt-6">
              {featTags.map(tag => (<div key={Math.random(123)} className="flex p-1 mx-1 my-1 bg-gray-400 bg-opacity-50 rounded-full">
                  <Tag text={tag} />
                </div>)
              )}
            </div>
        </div>

        <div className="w-2/3 mx-auto my-4 sm:max-w-sm">
          <img className="rounded-md" src={featImg} alt="Monitoring" />
        </div>
      </div>

  )
}
