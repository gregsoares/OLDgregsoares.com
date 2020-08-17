import axios from "axios";

// TODO: implement sorters to return basicProfileData and other features

const searchBaseURL = `https://api.github.com/search/repositories?q=`;
// const myProfile = `https://api.github.com/users/gregsoares`;

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
  login: "gregsoares",
  id: 11140845,
  node_id: "MDQ6VXNlcjExMTQwODQ1",
  avatar_url: "https://avatars0.githubusercontent.com/u/11140845?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/gregsoares",
  html_url: "https://github.com/gregsoares",
  followers_url: "https://api.github.com/users/gregsoares/followers",
  following_url:
    "https://api.github.com/users/gregsoares/following{/other_user}",
  gists_url: "https://api.github.com/users/gregsoares/gists{/gist_id}",
  starred_url: "https://api.github.com/users/gregsoares/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/gregsoares/subscriptions",
  organizations_url: "https://api.github.com/users/gregsoares/orgs",
  repos_url: "https://api.github.com/users/gregsoares/repos",
  events_url: "https://api.github.com/users/gregsoares/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/gregsoares/received_events",
  type: "User",
  site_admin: false,
  name: "Yggdrasil",
  company: null,
  blog: "https://gregsoares.com",
  location: "PA",
  email: null,
  hireable: true,
  bio:
    '"Define the problem properly and the solution will present itself" - Albert Einstein',
  public_repos: 11,
  public_gists: 0,
  followers: 9,
  following: 5,
  created_at: "2015-02-22T00:04:59Z",
  updated_at: "2020-05-12T14:38:33Z",
};

export const fetchMyProfile = async () => {
  const {
    login,
    id,
    avatar_url,
    html_url,
    name,
    bio,
    public_repos,
  } = await myProfile;

  return { login, id, avatar_url, html_url, name, bio, public_repos };
};

export const searchRepo = async (repoName) => {
  const data = await axios
    .get(`${searchBaseURL}${repoName}`)
    .then((response) => response)
    .catch((err) => console.debug(err));
  return data;
};
