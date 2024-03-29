import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    // 404
    {
        path: '/:catchAll(.*)',
        name: 'Not Found',
        component: NotFound
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router