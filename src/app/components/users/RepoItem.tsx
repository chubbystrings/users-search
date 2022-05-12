import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  repo: any;
}

const RepoItem = ({ repo }: Props) => {
  return (
    <UserCard className="card">
      <div className="avatar--wrapper">
        <img src={repo.owner.avatar_url} alt="avatar" />
      </div>
      <div className="repo--info">
        <small>{repo.name} </small>
      </div>
      <div className="view--profile">
        <NavLink
          to={`/repos/${repo.owner.login}/${repo.name}`}
          className="text-base-content text-opacity-40"
        >
          View Repo
        </NavLink>
        <NavLink
          to={`/user/${repo.owner.login}`}
          className="text-base-content text-opacity-40"
        >
          View owner
        </NavLink>
      </div>
    </UserCard>
  );
};

const UserCard = styled.div`
  width: 100%;
  height: 100%;

  /* bounding box */

  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 5px;
  padding: 10px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.5s ease-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  & .repo--info {
    display: flex;
    flex-direction: column;
    small {
      color: black;
      font-family: "Sofia Pro";
      font-style: normal;
      color: #364354;
      text-align: center;
      font-size: 17px;
    }
  }

  & a,
  small {
    color: black;
    font-family: "Sofia Pro";
    font-style: normal;
    color: #364354;
  }

  & a {
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;
  }

  & a:hover {
    transition: all 0.2s ease-out;
    background-color: #e6e5e5;
  }

  & .avatar--wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 5px;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    & small {
      text-align: center;
    }
  }

  & .view--profile {
    color: black;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 5px;

  }

  @media screen and (max-width: 425px) {
    padding: 2px;
  }

  @media screen and (max-width: 325px) {
    max-width: 200px;
  }
`;
export default RepoItem;
