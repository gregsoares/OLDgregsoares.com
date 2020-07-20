import axios from 'axios';

// TODO: implement sorters to return basicProfileData and other features

// const baseUrl = `https://api.github.com/`
// const myProfile = `https://api.github.com/users/gregsoares`

// const github = {
//   current_user_url: "https://api.github.com/user",
//   current_user_authorizations_html_url: "https://github.com/settings/connections/applications{/client_id}",
//   authorizations_url: "https://api.github.com/authorizations",
//   code_search_url: "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
//   commit_search_url: "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order",
//   emails_url: "https://api.github.com/user/emails",
//   emojis_url: "https://api.github.com/emojis",
//   events_url: "https://api.github.com/events",
//   feeds_url: "https://api.github.com/feeds",
//   followers_url: "https://api.github.com/user/followers",
//   following_url: "https://api.github.com/user/following{/target}",
//   gists_url: "https://api.github.com/gists{/gist_id}",
//   hub_url: "https://api.github.com/hub",
//   issue_search_url: "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
//   issues_url: "https://api.github.com/issues",
//   keys_url: "https://api.github.com/user/keys",
//   label_search_url: "https://api.github.com/search/labels?q={query}&repository_id={repository_id}&page,per_page}",
//   notifications_url: "https://api.github.com/notifications",
//   organization_url: "https://api.github.com/orgs/{org}",
//   organization_repositories_url: "https://api.github.com/orgs/{org}/repos{?type,page,per_page,ort}",
//   organization_teams_url: "https://api.github.com/orgs/{org}/teams",
//   public_gists_url: "https://api.github.com/gists/public",
//   rate_limit_url: "https://api.github.com/rate_limit",
//   repository_url: "https://api.github.com/repos/{owner}/{repo}",
//   repository_search_url: "https://api.github.com/search/repositories?q={query}{&page,per_page,ort,order}",
//   current_user_repositories_url: "https://api.github.com/user/repos{?type,page,per_page,sort}",
//   starred_url: "https://api.github.com/user/starred{/owner}{/repo}",
//   starred_gists_url: "https://api.github.com/gists/starred",
//   user_url: "https://api.github.com/users/{user}",
//   user_organizations_url: "https://api.github.com/user/orgs",
//   user_repositories_url: "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
//   user_search_url: "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
// }
const myProfile = {
  "login": "gregsoares",
  "id": 11140845,
  "node_id": "MDQ6VXNlcjExMTQwODQ1",
  "avatar_url": "https://avatars0.githubusercontent.com/u/11140845?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gregsoares",
  "html_url": "https://github.com/gregsoares",
  "followers_url": "https://api.github.com/users/gregsoares/followers",
  "following_url": "https://api.github.com/users/gregsoares/following{/other_user}",
  "gists_url": "https://api.github.com/users/gregsoares/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gregsoares/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gregsoares/subscriptions",
  "organizations_url": "https://api.github.com/users/gregsoares/orgs",
  "repos_url": "https://api.github.com/users/gregsoares/repos",
  "events_url": "https://api.github.com/users/gregsoares/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gregsoares/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Yggdrasil",
  "company": null,
  "blog": "https://gregsoares.com",
  "location": "PA",
  "email": null,
  "hireable": true,
  "bio": "\"Define the problem properly and the solution will present itself\" - Albert Einstein",
  "public_repos": 11,
  "public_gists": 0,
  "followers": 9,
  "following": 5,
  "created_at": "2015-02-22T00:04:59Z",
  "updated_at": "2020-05-12T14:38:33Z"
}

// const mockData = {
//   "total_count": 1,
//   "incomplete_results": false,
//   "items": [
//     {
//       "id": 158864575,
//       "node_id": "MDEwOlJlcG9zaXRvcnkxNTg4NjQ1NzU=",
//       "name": "gregsoares.com",
//       "full_name": "gregsoares/gregsoares.com",
//       "private": false,
//       "owner": {
//         "login": "gregsoares",
//         "id": 11140845,
//         "node_id": "MDQ6VXNlcjExMTQwODQ1",
//         "avatar_url": "https://avatars0.githubusercontent.com/u/11140845?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/gregsoares",
//         "html_url": "https://github.com/gregsoares",
//         "followers_url": "https://api.github.com/users/gregsoares/followers",
//         "following_url": "https://api.github.com/users/gregsoares/following{/other_user}",
//         "gists_url": "https://api.github.com/users/gregsoares/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/gregsoares/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/gregsoares/subscriptions",
//         "organizations_url": "https://api.github.com/users/gregsoares/orgs",
//         "repos_url": "https://api.github.com/users/gregsoares/repos",
//         "events_url": "https://api.github.com/users/gregsoares/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/gregsoares/received_events",
//         "type": "User",
//         "site_admin": false
//       },
//       "html_url": "https://github.com/gregsoares/gregsoares.com",
//       "description": "Personal Website, Portfolio, Web Development ",
//       "fork": false,
//       "url": "https://api.github.com/repos/gregsoares/gregsoares.com",
//       "forks_url": "https://api.github.com/repos/gregsoares/gregsoares.com/forks",
//       "keys_url": "https://api.github.com/repos/gregsoares/gregsoares.com/keys{/key_id}",
//       "collaborators_url": "https://api.github.com/repos/gregsoares/gregsoares.com/collaborators{/collaborator}",
//       "teams_url": "https://api.github.com/repos/gregsoares/gregsoares.com/teams",
//       "hooks_url": "https://api.github.com/repos/gregsoares/gregsoares.com/hooks",
//       "issue_events_url": "https://api.github.com/repos/gregsoares/gregsoares.com/issues/events{/number}",
//       "events_url": "https://api.github.com/repos/gregsoares/gregsoares.com/events",
//       "assignees_url": "https://api.github.com/repos/gregsoares/gregsoares.com/assignees{/user}",
//       "branches_url": "https://api.github.com/repos/gregsoares/gregsoares.com/branches{/branch}",
//       "tags_url": "https://api.github.com/repos/gregsoares/gregsoares.com/tags",
//       "blobs_url": "https://api.github.com/repos/gregsoares/gregsoares.com/git/blobs{/sha}",
//       "git_tags_url": "https://api.github.com/repos/gregsoares/gregsoares.com/git/tags{/sha}",
//       "git_refs_url": "https://api.github.com/repos/gregsoares/gregsoares.com/git/refs{/sha}",
//       "trees_url": "https://api.github.com/repos/gregsoares/gregsoares.com/git/trees{/sha}",
//       "statuses_url": "https://api.github.com/repos/gregsoares/gregsoares.com/statuses/{sha}",
//       "languages_url": "https://api.github.com/repos/gregsoares/gregsoares.com/languages",
//       "stargazers_url": "https://api.github.com/repos/gregsoares/gregsoares.com/stargazers",
//       "contributors_url": "https://api.github.com/repos/gregsoares/gregsoares.com/contributors",
//       "subscribers_url": "https://api.github.com/repos/gregsoares/gregsoares.com/subscribers",
//       "subscription_url": "https://api.github.com/repos/gregsoares/gregsoares.com/subscription",
//       "commits_url": "https://api.github.com/repos/gregsoares/gregsoares.com/commits{/sha}",
//       "git_commits_url": "https://api.github.com/repos/gregsoares/gregsoares.com/git/commits{/sha}",
//       "comments_url": "https://api.github.com/repos/gregsoares/gregsoares.com/comments{/number}",
//       "issue_comment_url": "https://api.github.com/repos/gregsoares/gregsoares.com/issues/comments{/number}",
//       "contents_url": "https://api.github.com/repos/gregsoares/gregsoares.com/contents/{+path}",
//       "compare_url": "https://api.github.com/repos/gregsoares/gregsoares.com/compare/{base}...{head}",
//       "merges_url": "https://api.github.com/repos/gregsoares/gregsoares.com/merges",
//       "archive_url": "https://api.github.com/repos/gregsoares/gregsoares.com/{archive_format}{/ref}",
//       "downloads_url": "https://api.github.com/repos/gregsoares/gregsoares.com/downloads",
//       "issues_url": "https://api.github.com/repos/gregsoares/gregsoares.com/issues{/number}",
//       "pulls_url": "https://api.github.com/repos/gregsoares/gregsoares.com/pulls{/number}",
//       "milestones_url": "https://api.github.com/repos/gregsoares/gregsoares.com/milestones{/number}",
//       "notifications_url": "https://api.github.com/repos/gregsoares/gregsoares.com/notifications{?since,all,participating}",
//       "labels_url": "https://api.github.com/repos/gregsoares/gregsoares.com/labels{/name}",
//       "releases_url": "https://api.github.com/repos/gregsoares/gregsoares.com/releases{/id}",
//       "deployments_url": "https://api.github.com/repos/gregsoares/gregsoares.com/deployments",
//       "created_at": "2018-11-23T18:07:59Z",
//       "updated_at": "2020-05-06T22:36:58Z",
//       "pushed_at": "2020-05-06T22:36:56Z",
//       "git_url": "git://github.com/gregsoares/gregsoares.com.git",
//       "ssh_url": "git@github.com:gregsoares/gregsoares.com.git",
//       "clone_url": "https://github.com/gregsoares/gregsoares.com.git",
//       "svn_url": "https://github.com/gregsoares/gregsoares.com",
//       "homepage": null,
//       "size": 23953,
//       "stargazers_count": 2,
//       "watchers_count": 2,
//       "language": "CSS",
//       "has_issues": true,
//       "has_projects": true,
//       "has_downloads": true,
//       "has_wiki": true,
//       "has_pages": false,
//       "forks_count": 0,
//       "mirror_url": null,
//       "archived": false,
//       "disabled": false,
//       "open_issues_count": 1,
//       "license": {
//         "key": "mit",
//         "name": "MIT License",
//         "spdx_id": "MIT",
//         "url": "https://api.github.com/licenses/mit",
//         "node_id": "MDc6TGljZW5zZTEz"
//       },
//       "forks": 0,
//       "open_issues": 1,
//       "watchers": 2,
//       "default_branch": "master",
//       "score": 1.0
//     }
//   ]
// }

// export const mockSearchRepo = { 'data': mockData }
// export const mockFetchGregsoaresRepo = { 'data': mockGregsoaresRepo }

export const fetchMyProfile = async () => {
  const { login, id, avatar_url, html_url, name, bio, public_repos } = await myProfile;
  return [login, id, avatar_url, html_url, name, bio, public_repos]
}

export const searchRepo = async repoName => {
  const data = await axios.get(`https://api.github.com/search/repositories?q=${repoName}`)
    .then(response => response)
    .catch(err => console.debug(err));
  return data;
}