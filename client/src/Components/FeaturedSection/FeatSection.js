import React from "react";
import { Tag } from "../Tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
    imgAlt,
    imgCaption,
    featTitle,
    featSubtitle,
    featText,
    featTags,
    variant,
    liveSite,
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
  // TODO: if live link then put Icon to identify it
  const linkTitle = liveSite ? (
    // FIXME: hover: notworking
    <a
      className="p-2 bg-opacity-75 border-teal-700 "
      href={liveSite}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faExternalLinkAlt} />
      <span className="ml-3 text-2xl font-semibold leading-relaxed tracking-wider text-center text-blue-800 shadow-full">
        {featTitle}
      </span>
    </a>
  ) : (
    <span className="text-2xl font-semibold leading-relaxed tracking-wider text-center text-gray-200">
      {featTitle}
    </span>
  );
  const variantLeft = (
    <div
      className={`my-4 text-center text-gray-200 border border-gray-300 border-t-0 border-r-0 border-l-0`}
      id={featTitle}
    >
      <div className="items-center px-4 py-4 mx-0 my-6 sm:flex" id="">
        <div className="max-w-sm mx-auto text-center lg:max-w-md xl:max-w-lg">
          <div className="my-6">{linkTitle}</div>
          <div className="pl-6 pr-4 text-left text-gray-200">
            <p className="font-medium tracking-wide md:text-md lg:text-lg">
              {featSubtitle}
            </p>
            <div className="mt-3 text-base">
              {featText.map((text) => (
                <span key={Math.random(123)} className="text-left ">
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

        <div className="max-w-sm mx-auto my-4 md:max-w-lg sm:mx-4 ">
          <img className="rounded-md" src={featImg} alt={imgAlt && imgAlt} />
          <p className="p-0 text-sm text-center text-gray-600">
            {imgCaption && imgCaption}
          </p>
        </div>
      </div>
    </div>
  );
  const variantRight = (
    <div
      className={`brand-darkBlue border border-gray-300 border-t-0 border-r-0 border-l-0 my-2`}
      id={featTitle.split(0, 5)}
    >
      <div className="items-center px-4 py-4 mx-0 my-6 sm:flex">
        <div className="hidden max-w-sm mx-auto my-4 sm:ml-auto sm:block md:max-w-lg sm:mx-4 ">
          <img className="rounded-md" src={featImg} alt={imgAlt && imgAlt} />
          <p className="p-0 text-sm text-center text-gray-600">
            {imgCaption && imgCaption}
          </p>
        </div>
        <div className="max-w-sm mx-auto text-center lg:max-w-md xl:max-w-lg">
          <div className="my-6">{linkTitle}</div>

          <div className="pl-6 pr-4 text-left text-gray-200">
            <p className="font-medium tracking-wide md:text-md lg:text-lg">
              {featSubtitle}
            </p>
            <div className="mt-3 text-base">
              {featText.map((text) => (
                <span key={Math.random(123)} className="text-left ">
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

        <div className="block max-w-sm mx-auto my-4 sm:hidden md:max-w-lg sm:mx-4 ">
          <img className="rounded-md" src={featImg} alt={imgAlt && imgAlt} />
          <p className="p-0 text-sm text-center text-gray-600">
            {imgCaption && imgCaption}
          </p>
        </div>
      </div>
    </div>
  );
  return variant === "left" ? variantLeft : variantRight; //defaults to variantRight
};
