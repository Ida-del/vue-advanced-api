import {
    fetchNews,
    fetchAsks,
    fetchJobs,
    fetchList,
    fetchUser,
    fetchItem
} from '../api/index.js';

export default {
    async FETCH_NEWS(context) {
        const response = await fetchNews();
        context.commit('SET_LIST', response.data);
        return response;
    },
    async FETCH_ASKS(context) {
        const response = await fetchAsks();
        context.commit('SET_LIST', response.data);
        return response;
    },
    async FETCH_JOBS(context) {
        try {
            const response = await fetchJobs();
            context.commit('SET_LIST', response.data);
            return response;
        } catch (e) {
            alert(`다음과 같은 에러가 발생했습니다: ${e.name}: ${e.message}`);
        }

    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName)
        commit('SET_LIST', response.data);
        return response;

    },
    async FETCH_USER({ commit }, name) {
        const response = await fetchUser(name);
        commit('SET_USER', response.data);

    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchItem(id);
        commit('SET_ITEM', response.data);

    },

}