import React from 'react'
import expressIcon from "./Expressjs.png";
import mongoIcon from "./mongo.png";
import reactIcon from "./react.png";
import nodeIcon from "./Nodejs.png";

export const IntroCards = () => {
  return (
    <div data-testid="IntroCardsContainer">
                  <ul className="flex justify-between text-left">

              <li className="flex-col px-4 mx-2 my-4 text-xl border border-gray-600 border-sm focus:border-white hover:border-white hover:border-md">
                <div className="container flex h-20 py-2">
                  <img className="w-full max-w-xs mx-auto bg-white bg-opacity-25 border border-t-0 border-b-2 border-l-0 border-r-0 rounded-lg border-w-1/5" src={expressIcon} alt="Alt Text" srcSet="" />
                </div>
                    Express Js -
                  <span className="text-lg stackDescription">What had happen was...</span></li>

              <li className="flex-col px-4 mx-2 my-4 text-xl border border-gray-600 border-sm focus:border-white hover:border-white hover:border-md">
                <div className="container flex h-20 py-2">
                  <img className="w-full max-w-xs mx-auto text-xl border border-t-0 border-b-2 border-l-0 border-r-0 sm:w-2/3 border-w-1/2" src={mongoIcon} alt="Alt Text" srcSet="" />
                </div>
                    MongoDB -
                  <span className="text-lg stackDescription">What had happen was...</span></li>

              <li className="flex-col px-4 mx-2 my-4 text-xl border border-gray-600 border-sm focus:border-white hover:border-white hover:border-md">
                <div className="container flex h-20 py-2">
                  <img className="w-full max-w-xs mx-auto text-xl border border-t-0 border-b-2 border-l-0 border-r-0 sm:w-2/3 border-w-1/2" src={reactIcon} alt="Alt Text" srcSet="" />
                </div>
                      ReactJs -
                  <span className="text-lg stackDescription">What had happen was...</span></li>

              <li className="flex-col px-4 mx-2 my-4 text-xl border border-gray-600 border-sm focus:border-white hover:border-white hover:border-md">
                <div className="container flex h-20 py-2">
                  <img className="w-full max-w-xs mx-auto text-xl border border-t-0 border-b-2 border-l-0 border-r-0 sm:w-2/3 border-w-1/2" src={nodeIcon} alt="Alt Text" srcSet="" />
                </div>
                      NodeJs -
                  <span className="text-lg stackDescription">What had happen was...</span></li>

            </ul>
    </div>
  )
}
