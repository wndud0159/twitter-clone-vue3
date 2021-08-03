import {createStore} from 'vuex'

import createPersistedState from "vuex-persistedstate";


const store = createStore({
    state() {
        return {
            user: null
        }
    },
    // state를 변경할 수 있다
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
    },
    plugins: [createPersistedState()],
})

export default store