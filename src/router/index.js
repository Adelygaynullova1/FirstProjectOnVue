import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('../pages/welcome-page/WelcomePage.vue')
        },
        {
            path: '/services',
            name: 'services',
            component: () => import('../pages/services-page/ServicesPage.vue')
        },
        {
            path: '/brands',
            name: 'brands',
            component: () => import('../pages/catalog-page/CatalogPage.vue')
        },
        {
            path: '/merch/:brand',
            name: 'merch',
            component: () => import('../pages/merch-page/MerchPage.vue')
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: () => import('../pages/aboutUs-page/AboutUsPage.vue')
        },
        {
            path: '/salon',
            name: 'salon',
            component: () => import('../pages/salon-page/SalonPage.vue')
        },
        {
            path: '/master',
            name: 'master',
            component: () => import('../pages/masters-page/MastersPage.vue')
        }

    ]
    })
export default router