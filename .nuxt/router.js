import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49515b50 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _09ed2685 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _33eff283 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _5e37a37a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _463caa6e = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _3d828193 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _90a31ce0 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _49515b50,
    children: [{
      path: "",
      component: _09ed2685,
      name: "home"
    }, {
      path: "login",
      component: _33eff283,
      name: "login"
    }, {
      path: "registe",
      component: _33eff283,
      name: "registe"
    }, {
      path: "profile/:username",
      component: _5e37a37a,
      name: "profile"
    }, {
      path: "settings",
      component: _463caa6e,
      name: "settings"
    }, {
      path: "editor",
      component: _3d828193,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _90a31ce0,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
