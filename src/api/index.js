import axios from 'axios';

// 1. HTTP request & response 기본 설정
const api = {
    news: 'https://api.hnpwa.com/v0/news/1.json',
    ask: 'https://api.hnpwa.com/v0/ask/1.json',
    jobs: 'https://api.hnpwa.com/v0/jobs/1.json',
    user: 'https://api.hnpwa.com/v0/user/',
    item: 'https://api.hnpwa.com/v0/item/',
    baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들 정리
function fetchNews() {
    // return axios.get(api.news);
    return axios.get(`${api.news}`);
}

async function fetchAsks() {
    try {
        const response = await axios.get(`${api.ask}`);
        return response;
    } catch (error) {
        console.log(error);
    }

}

async function fetchJobs() {
    try {
        return await axios.get(`${api.jobs}`);
    } catch (error) {
        console.log(error);
    }

}

function fetchList(pageName) {
    const url = `${api.baseUrl}${pageName}/1.json`;
    return axios.get(url);
}

function fetchUser(username) {
    const url = `${api.user}${username}.json`;
    return axios.get(url);
}

function fetchItem(id) {
    const url = `${api.item}${id}.json`;
    return axios.get(url);
}

export {
    fetchNews,
    fetchAsks,
    fetchJobs,
    fetchUser,
    fetchItem,
    fetchList
}