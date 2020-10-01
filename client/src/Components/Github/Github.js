import React, { useEffect, useState } from "react";

import { fetchMyProfile } from "../../assets/api/github";

// FIXME: Link to github account
export const Github = () => {
  const [myRepo, setMyRepo] = useState(null);

  // const loadData = (repoName) => {
  //   if (!repoName) return 0;
  //   const data = mockSearchRepo(repoName);
  //   console.debug(data);
  //   return data;
  // };
  const loadMyProfile = async () => {
    await fetchMyProfile().then((data) => setMyRepo(data));
  };

  useEffect(() => {
    // loadMyProfile().then(() => console.log(myRepo));
    // ==DEBUG==
    loadMyProfile().catch((err) => console.debug(err));
    // ).then((data) => setRepoData(data));
    // setRepoData(mockSearchRepo.data);
    // setGregsoaresRepo(mockFetchGregsoaresRepo.data);
    // console.debug(JSON.stringify(repoData.total_count))
  }, []);

  // function cleanQuotes(text) {
  //   return (text.replace(/\"/g, ""))
  // }

  // function displayGregsoaresRepo() {
  //   let result = mockFetchGregsoaresRepo.data;

  // const cardSkeleton = (
  //   <div className="max-w-sm overflow-hidden rounded shadow-lg">
  //     <div className="px-6 py-4">
  //       <div className="mb-2 text-xl font-bold">{result.name}</div>

  //     </div>
  //     <div className="px-6 py-4">
  //       <span className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{result.name}</span>
  //       <span className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{result.login}</span>
  //     </div>
  //   </div>
  // )

  //   return (
  //     <div className="px-2 py-4">
  //       <div className="flex mx-2">
  //         <div className="w-1/3 px-2">
  //           <div className="chat-notification">
  //             <div className="mb-2 text-xl font-bold chat-notification-logo-wrapper">
  //               {result.name}
  //               <img className="h-12" src={result.avatar_url} alt="Avatar" />
  //             </div>
  //             <div className="chat-notification-content">
  //               <p className="text-base text-gray-700">
  //                 {result.blog}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  // function displayResult() {
  //   // <p data-testid="displayResult">{(JSON.stringify(myRepo.items[0]))} </p>
  //   const displayComponent = (
  //     <div className="w-full max-w-sm mt-4 ml-4 lg:max-w-1/2 lg:flex" data-testid="displayResult">

  //       {/* <div className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l" > */}

  //       {/* Add left image/topics/titles/labels */}

  //       {/* </div> */}
  //       <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r" style={{ "backgroundImage": `url('${blueCardBG}')` }} >
  //         <div className="mb-8">
  //           <p className="flex items-center text-sm text-gray-600">
  //             {/* <span className="text-teal-300">        Repository Name: {(JSON.stringify(myRepo.items[0].name).replace(/"/g, ""))} </span> */}
  //           </p>
  //           {/* <div className="mb-2 text-lg font-bold text-teal-100">{JSON.stringify(myRepo.items[0].description).replace(/"/g, "")} </div> */}
  //           <div className="flex items-center">
  //             <div className="text-sm">
  //               <p className="leading-none text-gray-300"></p>
  //               <p className="text-gray-600">Aug 18</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  //   return displayComponent;
  // }

  return myRepo ? (
    <div className="my-4" data-testid="GithubContainer">
      <div
        className=" bg-gray-200 max-w-sm mx-auto px-4 py-4 border-2 border-gray-400 rounded shadow-lg"
        data-testid=""
      >
        <img
          className="w-full px-2"
          src={myRepo.avatar_url}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className=" text-xl font-bold">{`${myRepo.name} `}</div>
          <a href={myRepo.repos_url} target="_blank" rel="noopener noreferrer">
            <p className=" text-gray-600"></p>
            Go to Repository list
          </a>
        </div>
        <div className="px-1 mb-4 ">
          <span
            className="inline-block px-5 py-2 text-sm font-semibold text-gray-600  shadow-md border border-gray-400 rounded-lg"
            data-testid="TagsContainer"
          >
            <p>{myRepo.bio || ""}</p>
          </span>
        </div>
      </div>
      {/* {myRepo != null ? (<p className="border ">Repository Name: {((JSON.stringify(myRepo.name)))}</p>) : ""}  */}
      {/* {myRepo != null ? `Repository Description: ${(JSON.stringify(myRepo.then(repo => repo)))}` : ""} */}

      {/* {myRepo != null ? (displayResult()) : "displayResult() Loading"}
      {gregsoaresRepo != null ? (displayGregsoaresRepo()) : "displayGregsoares() Loading"}  */}
    </div>
  ) : (
    "Bad Github Component"
  );
};
