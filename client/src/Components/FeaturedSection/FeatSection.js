import React from "react";
import { Tag } from "../Tag/Tag";

/* ==> Props <==
 * featTitle= String
 * featSubtitle=String
 * featText={[]}
 * featTags={[]}
 * featImg= Image Location(src)
 */
export const FeatSection = (props) => {
  const {
    featImg,
    featTitle,
    featSubtitle,
    featText,
    featTags,
    variant,
  } = props;

  if (featImg === "") return 0;
  if (featImg === null) return 0;
  if (featImg === undefined) return 0;

  // const featClassLoader = () => {
  //   let bgColor = props.bgColor;
  //   if (bgColor === "" || bgColor === undefined || bgColor === null)
  //     bgColor = "brand-blue";

  //   return `${bgColor} pt-4 pb-6`;
  // };
  const variantLeft = (
    <div
      className={`bg-darkBlue border border-gray-300 border-t-0 border-r-0 border-l-0 my-2`}
      id={featTitle}
    >
      <div className="items-center px-4 py-4 mx-0 sm:flex" id="">
        <div className="max-w-sm mx-auto text-center lg:max-w-md xl:max-w-lg">
          <div className="my-6">
            <span className="text-lg font-semibold text-center text-gray-200 border border-l-0 border-r-0 border-gray-400 lg:text-xl">
              {featTitle}
            </span>
          </div>

          <div className="pl-6 pr-4 text-left text-gray-200">
            <p className="font-medium tracking-wide md:text-md lg:text-lg">
              {featSubtitle}
            </p>
            <div className="mt-3">
              {featText.map((text) => (
                <span key={Math.random(123)} className="text-left text-md">
                  {text}
                  <br />
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap-reverse justify-around mt-2 mb-6 bg-opacity-75 sm:mt-4 md:mt-6">
            {featTags.map((tag) => (
              <div
                key={Math.random(123)}
                className="flex p-1 mx-1 my-1 bg-gray-400 bg-opacity-50 rounded-full"
              >
                <Tag text={tag} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-sm my-4 ml-auto mr-4 md:max-w-lg sm:mr-6 md:mr-8">
          <img className="rounded-md" src={featImg} alt="Monitoring" />
        </div>
      </div>
    </div>
  );
  const variantRight = (
    <div
      className={`brand-darkBluegg border border-gray-300 border-t-0 border-r-0 border-l-0 my-2`}
      id={featTitle.split(0, 5)}
    >
      <div className="items-center px-4 py-4 mx-0 sm:flex">
        <div className="hidden max-w-sm my-4 ml-auto mr-4 sm:block md:max-w-lg sm:mr-6 md:mr-8">
          <img className="rounded-md" src={featImg} alt="Monitoring" />
        </div>
        <div className="max-w-sm mx-auto text-center lg:max-w-md xl:max-w-lg">
          <div className="my-6">
            <span className="text-lg font-semibold text-center text-gray-200 border border-l-0 border-r-0 border-gray-800 lg:text-xl">
              {featTitle}
            </span>
          </div>

          <div className="pl-6 pr-4 text-left text-gray-200">
            <p className="font-medium tracking-wide md:text-md lg:text-lg">
              {featSubtitle}
            </p>
            <div className="mt-3">
              {featText.map((text) => (
                <span key={Math.random(123)} className="text-left text-md">
                  {text}
                  <br />
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap-reverse justify-around mt-2 mb-6 bg-opacity-75 sm:mt-4 md:mt-6">
            {featTags.map((tag) => (
              <div
                key={Math.random(123)}
                className="flex p-1 mx-1 my-1 rounded-full"
              >
                <Tag text={tag} />
              </div>
            ))}
          </div>
        </div>

        <div className="block max-w-sm my-4 ml-auto mr-4 sm:hidden md:max-w-lg sm:mr-6 md:mr-8">
          <img className="rounded-md" src={featImg} alt="Monitoring" />
        </div>
      </div>
    </div>
  );
  return variant === "left" ? variantLeft : variantRight; //defaults to variantRight
};
