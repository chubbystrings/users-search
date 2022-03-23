import Routers from "./app/routes/Routes";
import './App.css';
import { GithubProvider } from "./app/context/github/githubContext";

function App() {
  return (
    <div>
      <GithubProvider>
          <Routers />
      </GithubProvider>
    </div>
  );
}

export default App;
