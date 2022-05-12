import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  user: any;
}

const UserItem = ({ user }: Props) => {

  return (
    <UserCard>
      <div className="avatar--wrapper">
        <img src={user.avatar_url} alt="avatar" />
        <small>@{user.login}</small>
      </div>
      <div className="view--profile">
        <Link
          to={`/user/${user.login}`}
          className="text-base-content text-opacity-40"
        >
          View Profile
        </Link>
      </div>
    </UserCard>
  );
};

const UserCard = styled.div`
  width: 100%;
  height: 100%;

  /* bounding box */

  background: #faf9f6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 30px;
  padding: 10px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all .5s ease-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
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
  }

  & a:hover {
      transition: all .2s ease-out;
      background-color: #e6e5e5;
  }

  & .avatar--wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;

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
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: black;
  }

  @media screen and (max-width: 425px) {
    padding: 2px;
  }

  @media screen and (max-width: 325px) {
    max-width: 200px;
  }
`;
export default UserItem;
