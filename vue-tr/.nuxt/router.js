'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _1d916730 = () => import('/Users/potapovD1/Documents/all-training/vue-tr/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _044ce72a = () => import('/Users/potapovD1/Documents/all-training/vue-tr/pages/about.vue' /* webpackChunkName: "pages/about" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _1d916730,
			name: "index"
		},
		{
			path: "/about",
			component: _044ce72a,
			name: "about"
		}
  ]
})
