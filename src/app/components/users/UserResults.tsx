import { useContext } from "react";
import UserItem from "./UserItem";
import Loader from "../layout/Loader";
import GithubContext from "../../context/github/githubContext";
import styled from "styled-components";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  return loading ? (
    <Loader />
  ) : (
    <ItemWrapper className="">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  height: 580px;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px 5px 5px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  column-gap: 20px;
  row-gap: 20px;
  grid-auto-rows: 300px;
  @media screen and (max-width: 325px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export default UserResults;
