import React from 'react'
import expressIcon from "./Expressjs.png";
import mongoIcon from "./mongo.png";
import reactIcon from "./react.png";
import nodeIcon from "./Nodejs.png";

export const HeroCTA = () => {
  return (
    <div data-testid="HeroCTAContainer">
      <div className="pt-10 pb-12" style={{ "background": "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
      >
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-2 text-4xl font-bold text-white">
            Full Stack JavaScript Web Developer
    </h2>
          <h3 className="mb-8 text-2xl text-gray-200">
            Front-to-Back and Vice-Versa
    </h3>

          <div className="" id="stackList" className="my-4">
            <p className="font-semibold tracking-wider stackListTitle">MERN</p>
            <ul className="flex text-left">
              <div className="flex-row" id="frontEnd">
                <li className="flex items-center px-4 my-4 text-xl">
                  <img className="w-1/12 mr-4 bg-white" src={expressIcon} alt="Alt Text" srcSet="" />
                    Express Js -
                  <span className="text-lg stackDescription">What had happen was...</span></li>

                <li className="flex items-center px-4 my-4 text-xl">
                  <img className="w-1/12 mr-4 text-xl" src={mongoIcon} alt="Alt Text" srcSet="" />
                    MongoDB -
                  <span className="text-lg stackDescription">What had happen was...</span></li>
              </div>

                <div className="flex-row" id="backEnd">
                  <li className="flex items-center px-4 my-4 text-xl">
                    <img className="w-1/12 mr-4 text-xl" src={reactIcon} alt="Alt Text" srcSet="" />
                      ReactJs -
                  <span className="text-lg stackDescription">What had happen was...</span></li>

                  <li className="flex items-center px-4 my-4 text-xl">
                    <img className="w-1/12 mr-4 text-xl" src={nodeIcon} alt="Alt Text" srcSet="" />
                      NodeJs -
                  <span className="text-lg stackDescription">What had happen was...</span></li>
                </div>

            </ul>
          </div>

          <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg">
            Download Resume
    </button>
        </div>
      </div>
    </div>
  )
}
