import React from "react";
// import gibsonVideo from "./hackThePlanet.webm";
export const Intro = () => {
  return (
    <div className="relative bg-opacity-25 m-0 p-0 h-screen -z-10" data-testid="IntroContainer">
      {/* <video
        className="absolute w-full -z-10 h-full object-cover -translate-x-1/2 -translate-y-1/2"
        src={gibsonVideo}
        autoPlay
        loop
        muted
        id="hackThePlanet"
        style={{ zIndex: "-1" }}
      > */}
      <h1 className="text-3xl z-10 bg-white">Hello world</h1>
      <h1 className="text-3xl z-10 bg-white">Hello world</h1>
      <h1 className="text-3xl z-10 bg-white">Hello world</h1>
      <h1 className="text-3xl z-10 bg-white">Hello world</h1>
      <h1 className="text-3xl z-10 bg-white">Hello world</h1>
      
      {/* </video> */}
    </div>
  );
};
