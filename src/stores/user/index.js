const state = {
    nickname: window.localStorage.getItem('nickname') || '',
    username: window.localStorage.getItem('username') || '',
    headphoto: window.localStorage.getItem('headphoto') || '',
    // userHead: window.localStorage.getItem('userHead') || ''
};
const actions = {

};
const mutations = {
    NAME(state, payload) {
        state.nickname = payload.nickname;
        state.username = payload.username;
        state.headphoto = payload.headphoto;
        // state.userHead = payload.userHead;
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
}