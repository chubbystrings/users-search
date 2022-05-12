import { useState, useContext, ChangeEvent, FormEvent } from "react";
import GithubContext from "../../context/github/githubContext";
import Alert from "../layout/Alert";


const RepoSearch = () => {
  const [text, setText] = useState("");

  const { searchRepos } = useContext(GithubContext);
  const [alert, setAlert] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      searchRepos(text);
    }
    setText("");
    
//     allow_forking: true
// archive_url: "https://api.github.com/repos/aliasaria/scrumblr/{archive_format}{/ref}"
// archived: false
// assignees_url: "https://api.github.com/repos/aliasaria/scrumblr/assignees{/user}"
// blobs_url: "https://api.github.com/repos/aliasaria/scrumblr/git/blobs{/sha}"
// branches_url: "https://api.github.com/repos/aliasaria/scrumblr/branches{/branch}"
// clone_url: "https://github.com/aliasaria/scrumblr.git"
// collaborators_url: "https://api.github.com/repos/aliasaria/scrumblr/collaborators{/collaborator}"
// comments_url: "https://api.github.com/repos/aliasaria/scrumblr/comments{/number}"
// commits_url: "https://api.github.com/repos/aliasaria/scrumblr/commits{/sha}"
// compare_url: "https://api.github.com/repos/aliasaria/scrumblr/compare/{base}...{head}"
// contents_url: "https://api.github.com/repos/aliasaria/scrumblr/contents/{+path}"
// contributors_url: "https://api.github.com/repos/aliasaria/scrumblr/contributors"
// created_at: "2011-03-10T02:29:38Z"
// default_branch: "master"
// deployments_url: "https://api.github.com/repos/aliasaria/scrumblr/deployments"
// description: "Collaborative Online Scrum Tool Using Websockets, Node.js, jQuery, and CSS3"
// disabled: false
// downloads_url: "https://api.github.com/repos/aliasaria/scrumblr/downloads"
// events_url: "https://api.github.com/repos/aliasaria/scrumblr/events"
// fork: false
// forks: 469
// forks_count: 469
// forks_url: "https://api.github.com/repos/aliasaria/scrumblr/forks"
// full_name: "aliasaria/scrumblr"
// git_commits_url: "https://api.github.com/repos/aliasaria/scrumblr/git/commits{/sha}"
// git_refs_url: "https://api.github.com/repos/aliasaria/scrumblr/git/refs{/sha}"
// git_tags_url: "https://api.github.com/repos/aliasaria/scrumblr/git/tags{/sha}"
// git_url: "git://github.com/aliasaria/scrumblr.git"
// has_downloads: true
// has_issues: true
// has_pages: false
// has_projects: false
// has_wiki: true
// homepage: "http://scrumblr.ca"
// hooks_url: "https://api.github.com/repos/aliasaria/scrumblr/hooks"
// html_url: "https://github.com/aliasaria/scrumblr"
// id: 1461917
// is_template: false
// issue_comment_url: "https://api.github.com/repos/aliasaria/scrumblr/issues/comments{/number}"
// issue_events_url: "https://api.github.com/repos/aliasaria/scrumblr/issues/events{/number}"
// issues_url: "https://api.github.com/repos/aliasaria/scrumblr/issues{/number}"
// keys_url: "https://api.github.com/repos/aliasaria/scrumblr/keys{/key_id}"
// labels_url: "https://api.github.com/repos/aliasaria/scrumblr/labels{/name}"
// language: "HTML"
// languages_url: "https://api.github.com/repos/aliasaria/scrumblr/languages"
// license: {key: 'gpl-3.0', name: 'GNU General Public License v3.0', spdx_id: 'GPL-3.0', url: 'https://api.github.com/licenses/gpl-3.0', node_id: 'MDc6TGljZW5zZTk='}
// merges_url: "https://api.github.com/repos/aliasaria/scrumblr/merges"
// milestones_url: "https://api.github.com/repos/aliasaria/scrumblr/milestones{/number}"
// mirror_url: null
// name: "scrumblr"
// node_id: "MDEwOlJlcG9zaXRvcnkxNDYxOTE3"
// notifications_url: "https://api.github.com/repos/aliasaria/scrumblr/notifications{?since,all,participating}"
// open_issues: 51
// open_issues_count: 51
// owner: {login: 'aliasaria', id: 213343, node_id: 'MDQ6VXNlcjIxMzM0Mw==', avatar_url: 'https://avatars.githubusercontent.com/u/213343?v=4', gravatar_id: '', …}
// permissions: {admin: false, maintain: false, push: false, triage: false, pull: true}
// private: false
// pulls_url: "https://api.github.com/repos/aliasaria/scrumblr/pulls{/number}"
// pushed_at: "2022-04-22T22:52:03Z"
// releases_url: "https://api.github.com/repos/aliasaria/scrumblr/releases{/id}"
// score: 1
// size: 6581
// ssh_url: "git@github.com:aliasaria/scrumblr.git"
// stargazers_count: 1361
// stargazers_url: "https://api.github.com/repos/aliasaria/scrumblr/stargazers"
// statuses_url: "https://api.github.com/repos/aliasaria/scrumblr/statuses/{sha}"
// subscribers_url: "https://api.github.com/repos/aliasaria/scrumblr/subscribers"
// subscription_url: "https://api.github.com/repos/aliasaria/scrumblr/subscription"
// svn_url: "https://github.com/aliasaria/scrumblr"
// tags_url: "https://api.github.com/repos/aliasaria/scrumblr/tags"
// teams_url: "https://api.github.com/repos/aliasaria/scrumblr/teams"
// topics: []
// trees_url: "https://api.github.com/repos/aliasaria/scrumblr/git/trees{/sha}"
// updated_at: "2022-05-10T17:40:13Z"
// url: "https://api.github.com/repos/aliasaria/scrumblr"
// visibility: "public"
// watchers: 1361
//watchers_count: 1361
  };
  return (
    <>
      {alert && <Alert />}
      <div className="bg flex mt-5 pb-2 justify-center box-border ">
        <div className="w-6/12">
          <form
            className="relative transition duration-500 ease-out w-full"
            onSubmit={handleSubmit}
          >
            <div
              className={` flex bg-white rounded-md z-20 box-border w-full md:mr-5 relative `}
            >
              <input
                type="search"
                required
                placeholder="Search Repo"
                value={text}
                onChange={handleChange}
                className="block bg-transparent text-search text-xs border-none font-medium md:text-base px-1 sm:px-4 py-3 mt-0 mb-0 outline-none flex-1 flex-shrink flex-grow"
              />
              <button className="border-none cursor-pointer bg-transparent flex items-center justify-center rounded-tr-lg rounded-br-lg pr-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#5e5e5e"
                    className="h-5 w-5"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RepoSearch;
