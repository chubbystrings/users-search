import { createContext, ReactNode, useReducer } from "react";
import githubApi from "../../api/githubApi";
import githubReducer from "./githubReducer";

interface Props {
    children: ReactNode;
}

interface Github {
    users: Array<Type>;
    loading: boolean
    searchUsers: (text:any) => void;
    clearResults: () => void;
    // addFeedback: (newFeedback:any) => void;
    // editFeedback: (item:any) => void;
    // feedbackEdit: any;
    // updateFeedback: (id:number, updatedItem:any) => void;
}

interface Type {
    login: string;
    avatar_url: string;
    id: number;
}

const GithubContext = createContext({} as Github);

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}:Props) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    
    // get search results
    const searchUsers = async (text:any) => {
        setLoading();
        const params = new URLSearchParams({
            q: text
        })
        const {data} = await githubApi.get(`/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        const items = data.items;

        dispatch({
            type: "GET_USERS",
            payload: items
        })
        console.log(data)
    }

    // set loading to true
    const setLoading = () => dispatch({type: "SET_LOADING"})

    // clear search results
    const clearResults = () => dispatch({type: "CLEAR_RESULTS"})

    return (
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearResults
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;