import { useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaStore, FaCode, FaUserFriends, FaUsers } from "react-icons/fa";
import GithubContext from "../context/github/githubContext";
import Loader from "../components/layout/Loader";
import RepoList from "../components/repos/RepoList";
import Layout from "../components/layout";

const User = () => {
  const { getUser, user, loading, getRepos, repos } = useContext(GithubContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUser(params.login, () => {
      navigate("/notfound");
    });
    getRepos(params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  // NOTE: check for valid url to users website
  const websiteUrl = blog?.startsWith("http") ? blog : "https://" + blog;

  return (
    <Layout>
      <>
        {loading && <Loader />}
        {!loading && (
          <UserPage>
            <div className="w-full mx-auto lg:w-10/12">
              <div className="mb-4">
                <Link to="/" className="btn btn-ghost">
                  Back To Search
                </Link>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                <div className="custom_card_image mb-6 md:mb-0">
                  <div className="rounded-lg shadow-xl card image-full">
                    <figure>
                      <img src={avatar_url} alt="" />
                    </figure>
                    <div className="card-body justify-end">
                      <div className="image_card">
                        <h2 className="card-title">{name}</h2>
                        <p>{login}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="mb-6">
                    <h1 className="text-3xl card-title">
                      {name}
                      <div className="ml-2 mr-1 badge badge-accent badge-outline">
                        {type}
                      </div>
                      {hireable && (
                        <div className="mx-1 badge badge-primary badge-outline">
                          Hireable
                        </div>
                      )}
                    </h1>
                    <p>{bio}</p>
                    <div className="mt-4 card-actions">
                      <a
                        href={html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline"
                      >
                        Visit Github Profile
                      </a>
                    </div>
                  </div>

                  <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                    {location && (
                      <div className="stat">
                        <div className="stat-title text-md">Location</div>
                        <div className="text-lg stat-value">{location}</div>
                      </div>
                    )}
                    {blog && (
                      <div className="stat">
                        <div className="stat-title text-md">Website</div>
                        <div className="text-lg stat-value">
                          <a href={websiteUrl} target="_blank" rel="noreferrer">
                            {websiteUrl}
                          </a>
                        </div>
                      </div>
                    )}
                    {twitter_username && (
                      <div className="stat">
                        <div className="stat-title text-md">Twitter</div>
                        <div className="text-lg stat-value">
                          <a
                            href={`https://twitter.com/${twitter_username}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {twitter_username}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <FaUsers className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Followers</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                      {followers}
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <FaUserFriends className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Following</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                      {following}
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <FaCode className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Public Repos</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                      {public_repos}
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <FaStore className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5">Public Gists</div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                      {public_gists}
                    </div>
                  </div>
                </div>
              </div>

              <RepoList repos={repos} />
            </div>
          </UserPage>
        )}
      </>
    </Layout>
  );
};

const UserPage = styled.div`
  position: relative;

  .custom_card_image .card.image-full:before {
    border-radius: 0.5rem;
    opacity: 0.45;
  }
  .image_card h2,
  .image_card p {
    position: absolute;
    bottom: 10%;
    color: #fff;
  }
  .image_card h2 {
    margin-bottom: 20px;
  }
`;

export default User;
