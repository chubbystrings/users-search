// import UserResults from "../components/users/UserResults";
// import UserSearch from "../components/users/UserSearch";
import RepoResults from "../components/users/RepoResults";
import RepoSearch from "../components/users/RepoSearch";
import Layout from "../components/layout";
import styled from "styled-components";

const Home = () => {
  return (
    <Layout>
      <HomeWrapper>
        <RepoSearch />
        <RepoResults />
      </HomeWrapper>
    </Layout>
  );
};

const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
`;

export default Home;
