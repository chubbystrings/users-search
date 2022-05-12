const githubReducer = (state:any, action:any) => {
    switch(action.type){
        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case "GET_USER":
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case "GET_REPOS":
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "CLEAR_RESULTS":
            return {
                ...state,
                users: []
            }
        case "SEARCH_REPOS": 
            return {
                ...state,
                searchedRepos: action.payload,
                loading: false
            }
        case "REPO_INFO":
            return {
                ...state,
                repoInfo: action.payload,
                loading: false
            }
        default: 
            return state
    }
}

export default githubReducer;