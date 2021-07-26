import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Notification from '../pages/Notification.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const routes = [
    {path: '/', component: Home, icon: 'fas fa-home fa-fw text-2xl', title: '홈', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/', component: Home, icon: 'fas fa-hashtag fa-fw text-2xl', title: '탐색하기', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/notification', component: Notification, icon: 'far fa-bell fa-fw text-2xl', title: '알림', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/messages',component: Messages, icon: 'far fa-envelope fa-fw text-2xl', title: '쪽지', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/', component: Home, icon: 'far fa-bookmark fa-fw text-2xl', title: '북마크', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/', component: Home, icon: 'far fa-list-alt fa-fw text-2xl', title: '리스트', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/profile',component: Profile, icon: 'far fa-user fa-fw text-2xl', title: '프로필', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/', component: Home, icon: 'fas fa-ellipsis-h fa-fw text-2xl', title: '더보기', meta: {isMenu: true, layout: 'DefaultLayout'}},
    {path: '/register', component: Register, meta: {isMenu: false, layout: 'EmptyLayout'}},
    {path: '/login', component: Login, meta: {isMenu: false, layout: 'EmptyLayout'}},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


//             <router-link :to="route.path" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full" v-for="route in routes" :key="route">
//               <i class="fas fa-home fa-fw text-2xl"></i>
//               <span class="ml-5 text-lg hidden md:inline-block">홈</span>
//             </router-link>
//             <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
//               <i class="fas fa-hashtag fa-fw text-2xl"></i>
//               <span class="ml-5 text-lg hidden md:inline-block">탐색하기</span>
//             </router-link>
//             <router-link to="/notification" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
//               <i class="far fa-bell fa-fw text-2xl"></i>
//               <span class="ml-5 text-lg hidden md:inline-block">알림</span>
//             </router-link>
//             <router-link to="/messages" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
//               <i class="far fa-envelope fa-fw text-2xl"></i>
//               <span class="ml-5 text-lg hidden md:inline-block">쪽지</span>
//             </router-link>
//             <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
//               <i class="far fa-bookmark fa-fw text-2xl"></i>
//               <span class="ml-5 text-lg hidden md:inline-block">북마크</span>
//             </router-link>
//             <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
//               <i class="far fa-list-alt fa-fw text-2xl"></i>
//               <span class="ml-5 text-lg hidden md:inline-block">리스트</span>
//             </router-link>
//             <router-link to="/profile" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
//               <i class="far fa-user fa-fw text-2xl"></i>
//               <span class="ml-5 text-lg hidden md:inline-block">프로필</span>
//             </router-link>
//             <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
//               <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
//               <span class="ml-5 text-lg hidden md:inline-block">더보기</span>
//             </router-link>