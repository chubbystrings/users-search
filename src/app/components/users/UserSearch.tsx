import { useState, useContext, ChangeEvent, FormEvent } from "react";
import GithubContext from "../../context/github/githubContext";
import Alert from "../layout/Alert";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { searchUsers } = useContext(GithubContext);
  const [alert, setAlert] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      searchUsers(text);
    }
    setText("");
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

export default UserSearch;
