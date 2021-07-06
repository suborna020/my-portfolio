import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// const Foo = { template: '<div>foo0000000000000000</div>' }
// import ExampleComponent from '../components/ExampleComponent'

import Home from '../components/public/Home'
import UserLogin from '../components/public/auth/UserLogin'
import UserRegister from '../components/public/auth/UserRegister'
import UserDashboard from '../components/public/user/UserDashboard'
import Shop from '../components/public/shop/Shop'
import About from '../components/public/shop/About'
import Category from '../components/public/shop/Category'
import Cart from '../components/public/shop/Cart'
import Checkout from '../components/public/shop/Checkout'
import Wishlist from '../components/public/shop/Wishlist'
import error from '../components/public/user/error'





const router = new VueRouter({
    mode: 'history', //use for default # symbol remove from  url
    routes: [
        { path: '/home', component: Home, name: 'Home' },
        { path: '/shop', component: Shop, name: 'Shop' },
        { path: '/about', component: About, name: 'About' },
        { path: '/category', component: Category, name: 'Category' },
        { path: '/cart', component: Cart, name: 'Cart' },
        {path: '/checkout', component: Checkout, name: 'Checkout'},
        {path: '/wishlist', component: Wishlist, name: 'Wishlist'},
        {path: '/404', component: error, name: '404'},


        { path: '/user-register', component: UserRegister, name: 'UserRegister' },

        {
            path: '/user-login', component: UserLogin, name: 'UserLogin',
            beforeEnter: (to, from, next) => {
                const isAuthenticated = localStorage.getItem('userLoggedIn') ? true : false;
                if (to.name == 'UserLogin' && isAuthenticated) next({ name: 'UserDashboard' })
                else next();
            }
        },
        {
            path: '/user/user-dashboard', component: UserDashboard, name: 'UserDashboard',
            beforeEnter: (to, from, next) => {
                const isAuthenticated = localStorage.getItem('userLoggedIn') ? true : false;
                if (to.name !== 'UserLogin' && !isAuthenticated) next({ name: 'UserLogin' })
                else next()
            }
        },





    ]
})
export default router;