import { useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import { VscIssues } from "react-icons/vsc";
import { BiGitRepoForked } from "react-icons/bi";
import { AiFillStar, AiFillEye } from "react-icons/ai";
import GithubContext from "../context/github/githubContext";
import Loader from "../components/layout/Loader";
import Layout from "../components/layout";
import PieChart from "../components/common/Pie";

const User = () => {
  const { getRepo, repoInfo, loading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getRepo(params.name as string, params.owner as string);
    console.log(repoInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {loading && <Loader />}

      {!loading && Object.keys(repoInfo).length > 0 && (
        <UserPage>
          <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4">
              <NavLink to="/" className="btn btn-ghost">
                Back To Search
              </NavLink>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-2 md:gap-8">
              <div className="custom_card_image mb-6 md:mb-0">
                <div className="rounded-lg shadow-xl card image-full img--wrapper">
                  <figure>
                    <img src={repoInfo.owner.avatar_url} alt="" />
                  </figure>
                </div>
              </div>

              <div className="description">
                <h2 className="white--text">{repoInfo.name}</h2>
                <div className="w-full">
                  <small>
                    {repoInfo.description.length > 350
                      ? repoInfo.description.substring(0, 350) + "..."
                      : repoInfo.description}
                  </small>
                </div>
                <div className="mb-6 ">
                  <div className="mt-4 card-actions mb-3 button--wrapper">
                    <a
                      href={repoInfo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      Visit Github Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-lg bg-base-100 border-box">
              <div className="statistics">
                <div className="">
                  <div className="" style={{ color: "rgba(255, 99, 132)" }}>
                    <BiGitRepoForked className="text-3xl" />
                  </div>
                  <div className="stat-title">Forks Count</div>
                  <div className=" text-3xl">{repoInfo.forks_count}</div>
                </div>

                <div className="">
                  <div className=" " style={{ color: "rgba(75, 192, 192)" }}>
                    <AiFillStar className="text-3xl" />
                  </div>
                  <div className="stat-title">Stargarzers</div>
                  <div className=" text-3xl">{repoInfo.stargazers_count}</div>
                </div>

                <div className="">
                  <div className=" " style={{ color: "rgba(54, 162, 235)" }}>
                    <AiFillEye className="text-3xl" />
                  </div>
                  <div className="stat-title">Watchers Count</div>
                  <div className=" text-3xl">{repoInfo.watchers_count}</div>
                </div>

                <div className="">
                  <div className=" " style={{ color: "rgba(255, 206, 86)" }}>
                    <VscIssues className="text-3xl" />
                  </div>
                  <div className="stat-title">Open Issues</div>
                  <div className=" text-3xl">{repoInfo.open_issues_count}</div>
                </div>
              </div>
              <div className="pie--wrapper">
                <PieChart
                  forkCount={repoInfo.forks_count}
                  watchCount={repoInfo.watchers_count}
                  openIssues={repoInfo.open_issues_count}
                  stargazers={repoInfo.stargazers_count}
                />
              </div>
            </div>
          </div>
        </UserPage>
      )}
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

  & .img--wrapper {
    height: 250px;
    width: 250px;

    & img {
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 725px) {
      margin: 0 auto;
      height: 150px;
      width: 150px;
    }
  }

  & .pie--wrapper {
    height: 350px;
    width: 350px;
    margin: 50px auto 100px auto;
    @media screen and (max-width: 345px) {
      height: 20px;
      width: 200px;
      margin-bottom: 250px;
    }
  }

  & h2 {
    font-size: 25px;
    margin-bottom: 10px;

    @media screen and (max-width: 345px) {
      font-size: 12px;
    }
  }

  & .statistics {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    column-gap: 20px;
    row-gap: 20px;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
    }
    @media screen and (max-width: 725px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      & div {
        font-size: 12px;
      }
    }
    @media screen and (max-width: 325px) {
      & div {
        font-size: 9px;
      }
    }
  }

  @media screen and (max-width: 725px) {
    & .description {
      text-align: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      overflow-wrap: break-word;
      white-space: initial;

      & small {
        font-size: 10px;
        overflow-wrap: break-word;
        white-space: initial;
      }

      & .card--title {
        text-align: center;
        overflow-wrap: break-word;
        white-space: initial;
      }
    }

    & .button--wrapper {
      display: flex;
      justify-content: center;
    }
    & a {
      font-size: 12px;
    }
  }
`;

export default User;
