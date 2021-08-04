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
        SET_BACKGROUND_IMAGE: (state, image) => {
            state.user.backgorund_image_url = image
        },
        SET_PROFILE_IMAGE: (state, image) => {
            state.user.profile_image_url = image
        }
    },
    plugins: [createPersistedState()],
})

export default store