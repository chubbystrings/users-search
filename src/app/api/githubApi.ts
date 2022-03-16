import axios from "axios";

const BaseUrl = process.env.REACT_APP_GITHUB_URL
console.log(BaseUrl)

export default axios.create({
    baseURL: process.env.REACT_APP_GITHUB_URL
})