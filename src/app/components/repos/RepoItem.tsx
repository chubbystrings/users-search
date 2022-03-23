import styled from "styled-components";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

interface Props {
  repo: RepoType;
}

interface RepoType {
  name: string;
  id: number;
  description: string;
  html_url: string;
  forks: string;
  open_issues: string;
  watchers_count: string;
  stargazers_count: string;
  updated_at: string;
}

const formatDate = (date:string) => {
    return date.slice(0, -10).split("-").reverse().join("/");
  };

const RepoItem = ({ repo }: Props) => {
  console.log(repo);
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
    updated_at,
  } = repo;

  return (
    <Repo>
      <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
        <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
              <a href={html_url} target="_blank" rel="noreferrer">
                <FaLink className="inline mr-1" /> {name}
              </a>
            </h3>
            <p className="mb-3 date_text">Updated: {formatDate(updated_at)}</p>
          <p className="mb-3">{description}</p>
          <div>
            <div className="mr-2 badge badge-info badge-lg">
              <FaEye className="mr-2" /> {watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
              <FaStar className="mr-2" /> {stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
              <FaInfo className="mr-2" /> {open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-lg">
              <FaUtensils className="mr-2" /> {forks}
            </div>
          </div>
        </div>
      </div>
    </Repo>
  );
};

const Repo = styled.div`
  .date_text{
      font-weight: 400;
      font-size: 12px;
  }
`;

export default RepoItem;
