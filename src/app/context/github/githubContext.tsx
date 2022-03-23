import { createContext, ReactNode, useReducer } from "react";
import { Navigate } from "react-router-dom";
import githubApi from "../../api/githubApi";
import githubReducer from "./githubReducer";

interface Props {
    children: ReactNode;
}

interface Github {
    users: Array<Type>;
    repos: Array<RepoType>;
    loading: boolean;
    user: {
        login: string;
        avatar_url: string;
        name: any;
        type: any;
        location: any;
        bio: string;
        blog: any;
        twitter_username: any;
        html_url: any;
        followers: any;
        following: any;
        public_repos: any;
        public_gists: any;
        hireable: any;
    };
    searchUsers: (text:string) => void;
    clearResults: () => void;
    getUser: (login:any) => void;
    getRepos: (login:any) => void;
}

interface Type {
    login: string;
    avatar_url: string;
    id: number;
}

interface RepoType {
    name: string;
    id: number;
    description: string;
}

// type userType = {
//     login: string;
// }

const GithubContext = createContext({} as Github);

export const GithubProvider = ({children}:Props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    
    // get search results
    const searchUsers = async (text:any) => {
        setLoading();
        const params = new URLSearchParams({
            q: text
        })
        const {data} = await githubApi.get(`/search/users?${params}`);


        const items = data.items;

        dispatch({
            type: "GET_USERS",
            payload: items
        })
        console.log(data)
    }

    // get single user
    const getUser = async (login:string) => {
        setLoading();
        const {data} = await githubApi.get(`/users/${login}`);

        if(data.status === 404) {
            window.location.pathname = "/notfound"
            // window.location = "/notfound"
            // <Navigate replace to="/notfound" />
            return(
                <Navigate replace to="/login"/>
            )
        } else {    
            dispatch({
                type: "GET_USER",
                payload: data
            })
            console.log(data)
        }
    }

     // get user repos
     const getRepos = async (login:any) => {
        setLoading();

        const params = new URLSearchParams({
            sort: "created",
            per_page: "10",
        })
        
        const {data} = await githubApi.get(`/users/${login}/repos?${params}`);

        dispatch({
            type: "GET_REPOS",
            payload: data
        })
    }

    // set loading to true
    const setLoading = () => dispatch({type: "SET_LOADING"})

    // clear search results
    const clearResults = () => dispatch({type: "CLEAR_RESULTS"})

    return (
        <GithubContext.Provider value={{
            // users: state.users,
            // loading: state.loading,
            // user: state.user,
            // repos: state.repos,
            ...state,
            getUser,
            searchUsers,
            clearResults,
            getRepos
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;