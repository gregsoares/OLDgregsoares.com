import React from 'react'
import { Tag } from "../Tag/Tag";

export const FeatSection = props => {
  const { featImg, featTitle, featSubtitle, featText, featTags } = props;

  if (featImg === '') return 0;
  if (featImg === null) return 0;
  if (featImg === undefined) return 0;

  /* ==> Props <==
  * featTitle= String
  * featSubtitle=String
  * featText={[]}
  * featTags={[]}
  * featImg= Image Location(src)
  */
//  FIXME: Not responsive when smaller than SM breakpoint

 const featClassLoader = () => {
   let bgColor = props.bgColor;
   if(bgColor === "" || bgColor === undefined || bgColor === null) bgColor = "bg-gray-300"

   return `${bgColor} py-4 my-4 border border-t-0 border-l-0 border-r-0 rounded-lg shadow-sm`
 }
  return (
    <div className={featClassLoader()} id={featTitle}>
      <div className="items-center px-4 py-4 mx-0 sm:flex" id="agencySection" data-testid="AgencyContainer" >
        <div className="max-w-sm mx-auto text-center lg:max-w-md xl:max-w-lg">
          <span className="my-3 text-lg text-center text-gray-800 border border-l-0 border-r-0 border-gray-800">
            {featTitle}
          </span>
          <p className="px-4 my-2 text-sm text-center lg:text-md">
            {featSubtitle}
          </p>
          <div className="">
            {featText.map(text =>
              <span key={Math.random(123)} className="text-sm text-left">
                {text}
                <br />
              </span>
            )}
          </div>
          <div className="flex flex-wrap-reverse justify-around mt-2 mb-6 bg-opacity-75 sm:mt-4 md:mt-6">
            {featTags.map(tag => (<div key={Math.random(123)} className="flex p-1 mx-1 my-1 bg-gray-400 bg-opacity-50 rounded-full">
              <Tag text={tag} />
            </div>)
            )}
          </div>
        </div>

        <div className="max-w-sm my-4 ml-auto mr-4 md:max-w-lg sm:mr-6 md:mr-8">
          <img className="rounded-md" src={featImg} alt="Monitoring" />
        </div>
      </div>

    </div>
  )
}
