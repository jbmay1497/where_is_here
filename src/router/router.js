import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import WhatCountry from '../views/WhatCountry.vue'
import WaterOrLand from '../views/WaterOrLand.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/WhatCountry',
        name: 'WhatCountry',
        component: WhatCountry
    },
    {
        path: '/WaterOrLand',
        name: 'WaterOrLand',
        component: WaterOrLand
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router