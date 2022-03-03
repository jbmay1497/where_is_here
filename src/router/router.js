import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NearestCountry from '../views/WhatCountry.vue'
import WaterOrLand from '../views/WaterOrLand.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/NearestCountry',
        name: 'NearestCountry',
        component: NearestCountry
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