import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Contacts from "@/pages/Contacts.vue"
import Catalog from "@/pages/Catalog.vue"
import HotelPage from "@/pages/HotelPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'Home',
        component: Home 
        },
        {
            path: '/catalog',
            name: 'Catalog',
            component: Catalog 
        },
        {
            path: '/about',
            name: 'About',
            component: About 
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts 
        },
        {
            path: '/hotel/:id',
            name: 'HotelPage',
            component: HotelPage 
        }
    ]
})
export default router