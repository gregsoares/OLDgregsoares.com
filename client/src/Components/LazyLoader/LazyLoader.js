import React, { useEffect } from "react";
import { obs } from "./observer";
export const LazyLoader = () => {
  useEffect(() => {
    obs(); //load observer function
  }, []);
  return (
    <div className="px-2 py-6 bg-transparent">
      {" "}
      <div className="p-4 my-6 ">
        <p className="p-0 m-0 text-lg font-semibold text-center md:text-2xl">
          Lazy Loading
        </p>
        <p className="p-0 -m-2 text-sm leading-loose text-center md:text-lg">
          Images load as you scroll down for faster loading times and better
          bandwidth consumtion.
        </p>
      </div>
      <div className="justify-around sm:flex sm:flex-wrap">
        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>
        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
              escription of project of item shown above, lazy loading in effect.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              rerum.{" "}
            </p>
          </div>
        </div>

        <div className="flex max-w-xs mx-0 my-3 border border-gray-800 rounded-md shadow md:inline-block lg:max-w-sm">
          <div className="p-0 m-0 min-width-lg max-w-l">
            <img
              className="object-cover w-full h-full"
              src="https://placeimg.com/10/10/any"
              data-src="https://placeimg.com/640/480/tech"
              alt=""
            />
          </div>
          <div className="flex items-center max-w-lg px-6 py-4 m-0 leading-relaxed tracking-wide bg-gray-200">
            <p className="text-sm text-gray-800 rounded-lg md:text-md xl:text-lg">
              <span className="font-semibold text-black text-md">D</span>
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
