import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Image from '../components/Image'
import City from '../components/City'
import Blog from '../components/Blog'
import Bug from '../components/Bug'
import Me from '../components/Me'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: Image
        },
        {
          path: '/login',
          component: Login,
        },
        {
          path: '/City',
          component: City,
        },
        {
          path: '/blog',
          component: Blog,
        },
        {
          path: '/bug',
          component: Bug,
        },
        {
          path: '/me',
          component: Me,
        },
      ]
    }
  ]
})
