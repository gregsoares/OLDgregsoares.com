import React, { useEffect } from "react";
import { obs } from "./observer";
export const LazyLoader = () => {
  useEffect(() => {
    obs(); //load observer function
  }, []);
  return (
    <div className="py-6 px-2 bg-transparent">
      {" "}
      <div className="my-6 p-4 ">
        <p className="text-lg md:text-2xl p-0 m-0 text-center font-semibold">
          Lazy Loading
        </p>
        <p className="text-sm md:text-lg p-0 -m-2 text-center leading-loose">
          Images load as you scroll down for faster loading times and better
          bandwidth consumtion.
        </p>
      </div>
      <div className=" sm:flex sm:flex-wrap justify-around">
        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>
        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex md:inline-block max-w-xs lg:max-w-sm mx-0 my-3 border border-gray-800 shadow rounded-md">
          <div className="m-0 p-0 min-width-lg max-w-l">
            <img
              className="w-full h-full object-cover"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center bg-gray-200 m-0 py-4 px-6 leading-relaxed tracking-wide max-w-lg">
            <p className="text-sm md:text-md xl:text-lg text-gray-800 rounded-lg">
              <span className="text-md font-semibold text-black">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
