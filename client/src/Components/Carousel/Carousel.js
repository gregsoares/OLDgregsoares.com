import React from 'react'

export const Carousel = () => {

  return (
    <div className="font-sans leading-normal tracking-normal bg-white" data-testid="CarouselContainer">

      <div className="relative bg-white shadow-2xl carousel">
        <div className="relative w-full overflow-hidden carousel-inner">
          {/* <!--Slide 1--> */}
          <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" readOnly />
          <div className="absolute opacity-0 carousel-item" style={{"height":"50vh"}}>
            <div className="block w-full h-full text-5xl text-center text-white bg-indigo-500">Slide 1</div>
          </div>
          <label htmlFor="carousel-3" className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-1 md:ml-10 hover:text-white hover:bg-blue-700">‹</label>
          <label htmlFor="carousel-2" className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-blue-700">›</label>

          {/* <!--Slide 2--> */}
          <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
          <div className="absolute opacity-0 carousel-item" style={{"height":"50vh"}}>
            <div className="block w-full h-full text-5xl text-center text-white bg-orange-500">Slide 2</div>
          </div>
          <label htmlFor="carousel-1" className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-2 md:ml-10 hover:text-white hover:bg-blue-700">‹</label>
          <label htmlFor="carousel-3" className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-blue-700">›</label>

          {/* <!--Slide 3--> */}
          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
          <div className="absolute opacity-0 carousel-item" style={{"height":"50vh"}}>
            <div className="block w-full h-full text-5xl text-center text-white bg-green-500">Slide 3</div>
          </div>
          <label htmlFor="carousel-2" className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-3 md:ml-10 hover:text-white hover:bg-blue-700">‹</label>
          <label htmlFor="carousel-1" className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-blue-700">›</label>

          {/* <!-- Add additional indicators htmlFor each slide--> */}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label htmlFor="carousel-1" className="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-2" className="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-3" className="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700">•</label>
            </li>
          </ol>

        </div>
      </div>

    </div>
  )
}
