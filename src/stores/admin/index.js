const state = {
    adminName: window.localStorage.getItem('flag') || '',
    isAdmin: window.localStorage.getItem('isAdmin') || 0,
    // userHead: window.localStorage.getItem('userHead') || ''
};
const actions = {

};
const mutations = {
    ADMIN_NAME(state, payload) {
        state.adminName = payload.adminName;
        state.isAdmin = payload.isAdmin;
        // state.userHead = payload.userHead;
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
}