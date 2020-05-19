import React, { useEffect, useState } from "react";

import { mockFetchGregsoaresRepo, fetchMyProfile } from "../../api/github";
// import metalBG from "./greymetal.svg";
import blueCardBG from './blueCardBG.svg'

export const Github = () => {
  const [myRepo, setMyRepo] = useState(fetchMyProfile().then(data => data && console.log(data)));

  // const loadData = repoName => {
  //   if (!repoName) return 0;
  //   const data = mockSearchRepo(repoName);
  //   console.debug(data)
  //   return data;
  // }

  const loadMyProfile = () => {
    const data = fetchMyProfile().then(data =>data && setMyRepo(data));
    return data;
  }

  useEffect(() => {
    // loadMyProfile().then(() => myRepo.then(repoLogin => console.log(repoLogin)))
    // setRepoData(loadMyProfile().then(data => data && setMyRepo(data)).finally(console.log(repoData)))

    // .then(data => setRepoData(data))
    // setRepoData(mockSearchRepo.data)
    // setGregsoaresRepo(mockFetchGregsoaresRepo.data)
    // console.debug(JSON.stringify(repoData.total_count))
  }, [])

  // const greyMetalSVG = (
  //   <svg width="1080" height="416" viewBox="0 0 1080 416" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <rect x="-1" y="1" width="1080" height="412" fill="url(#paint0_linear)" />
  //     <rect opacity="0.83" x="-1" y="1" width="1080" height="412" fill="#393D43" fill-opacity="0.47" />
  //     <g filter="url(#filter0_d)">
  //       <path d="M43.5 1.5L372 412M395.5 1.5L1079 142M899.5 412L248 1.5" stroke="#82999A" stroke-opacity="0.41" stroke-width="2" />
  //     </g>
  //     <defs>
  //       <filter id="filter0_d" x="41.7192" y="0.520481" width="1038.48" height="415.326" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  //         <feFlood flood-opacity="0" result="BackgroundImageFix" />
  //         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
  //         <feOffset dy="2" />
  //         <feGaussianBlur stdDeviation="0.5" />
  //         <feColorMatrix type="matrix" values="0 0 0 0 0.356863 0 0 0 0 0.415686 0 0 0 0 0.439216 0 0 0 1 0" />
  //         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
  //         <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
  //       </filter>
  //       <linearGradient id="paint0_linear" x1="-1" y1="207" x2="1079" y2="207" gradientUnits="userSpaceOnUse">
  //         <stop stop-color="#BBD2C5" />
  //         <stop offset="1" stop-color="#536976" />
  //       </linearGradient>
  //     </defs>
  //   </svg>
  // )

  // function cleanQuotes(text) {
  //   return (text.replace(/\"/g, ""))
  // }

  // function displayGregsoaresRepo() {
  //   let result = mockFetchGregsoaresRepo.data;


  // const cardSkeleton = (
  //   <div className="max-w-sm rounded overflow-hidden shadow-lg">
  //     <div className="px-6 py-4">
  //       <div className="font-bold text-xl mb-2">{result.name}</div>

  //     </div>
  //     <div className="px-6 py-4">
  //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{result.name}</span>
  //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{result.login}</span>
  //     </div>
  //   </div>
  // )

  //   return (
  //     <div className="px-2 py-4">
  //       <div className="flex mx-2">
  //         <div className="w-1/3 px-2">
  //           <div className="chat-notification">
  //             <div className="chat-notification-logo-wrapper font-bold text-xl mb-2">
  //               {result.name}
  //               <img className="h-12" src={result.avatar_url} alt="Avatar" />
  //             </div>
  //             <div className="chat-notification-content">
  //               <p className="text-gray-700 text-base">
  //                 {result.blog}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  function displayResult() {
    // <p data-testid="displayResult">{(JSON.stringify(myRepo.items[0]))} </p>
    const displayComponent = (
      <div className="max-w-sm w-full lg:max-w-1/2 lg:flex ml-4 mt-4" data-testid="displayResult">

        {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" > */}

        {/* Add left image/topics/titles/labels */}

        {/* </div> */}
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" style={{ "backgroundImage": `url('${blueCardBG}')` }} >
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {/* <span className="text-teal-300">        Repository Name: {(JSON.stringify(myRepo.items[0].name).replace(/"/g, ""))} </span> */}
            </p>
            {/* <div className="text-teal-100 font-bold text-lg mb-2">{JSON.stringify(myRepo.items[0].description).replace(/"/g, "")} </div> */}
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-300 leading-none"></p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    return displayComponent;
  }


  return (
    <div data-testid="GithubContainer">
      <div className="w-full p-0 m-0" data-testid="CardSectionContainer">
        <div data-testid="CardContainer">
          <div className="w-1/4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8" data-testid="CardSectionContainer">
              {/* <img className="w-full" src={myRepo.items.owner.avatar_url} alt="Sunset in the mountains" /> */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {myRepo.login}
                </div>
                <p className="text-gray-600 text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nihil veniam minima corporis ipsum? Eaque reprehenderit, neque aliquid modi numquam expedita quo laborum? Vero ex aperiam tempora.
               </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Programming</span></span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Javascript</span></span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Web Development</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {myRepo != null ? (<p className="border ">Repository Name: {((JSON.stringify(myRepo.name)))}</p>) : ""} 
      {myRepo != null ? `Repository Description: ${(JSON.stringify(myRepo.then(repo => repo)))}` : ""}

      {/* {myRepo != null ? (displayResult()) : "displayResult() Loading"}
      {gregsoaresRepo != null ? (displayGregsoaresRepo()) : "displayGregsoares() Loading"}  */}
    </div>
  )
}
