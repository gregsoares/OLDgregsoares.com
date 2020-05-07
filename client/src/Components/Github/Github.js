import React, { useEffect, useState } from 'react'

import { mockSearchRepo } from "../../api/github";

export const Github = () => {
  const [repoData, setRepoData] = useState(null);

  const loadData = repoName => {
    if (!repoName) return 0;
    const data = mockSearchRepo(repoName);
    console.debug(data)
    return data;
  }

  useEffect(() => {
    // loadData('gregsoares')
    // .then(data => setRepoData(data))
    setRepoData(mockSearchRepo.data)
    // console.debug(JSON.stringify(repoData.total_count))
  }, [])

  const displayResult = () => {
    return (<p>{(JSON.stringify(repoData.items[0]))} </p>)
  }


  return (
    <div data-testid="GithubContainer">
      {repoData != null ? (<p className="border ">Repository Name: {((JSON.stringify(repoData.items[0].name)).replace(/\"/g, ""))}</p>) : ""}
      {repoData != null ? `Repository Description: ${(JSON.stringify(repoData.items[0].description).replace(/\"/g, ""))}` : ""}
    </div>
  )
}
