import React from 'react'

export const HeroCTA = () => {
  //   <img className="w-10 max-w-xs mx-auto bg-white rounded-lg" src={expressIcon} alt="Alt Text" srcSet="" />
  // <img className="w-10 max-w-xs mx-auto text-xl" src={mongoIcon} alt="Alt Text" srcSet="" />
  //   <img className="w-10 max-w-xs mx-auto text-xl" src={reactIcon} alt="Alt Text" srcSet="" />
  //   <img className="w-10 max-w-xs mx-auto text-xl" src={nodeIcon} alt="Alt Text" srcSet="" />
  return (
    <div data-testid="HeroCTAContainer">
      <div className="pt-10 pb-12" style={{ "background": "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
      >
        <div className="w-full px-6 mx-auto text-center">
          <h2 className="mb-2 text-4xl font-bold text-white">
            Full Stack JavaScript Web Developer
    </h2>
          <h3 className="mb-8 text-2xl text-gray-200">
            It's not a job if you enjoy it.
    </h3>

          <div className="" id="stackList" className="my-4">
            <p className="font-semibold tracking-wider stackListTitle">MERN</p>
            {/* TODO: Add intro about myself */}
          </div>

          <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg">
            Download Resume
    </button>
        </div>
      </div>
    </div>
  )
}
