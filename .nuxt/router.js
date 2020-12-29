import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2bd420b1 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _3373d026 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _3b3e7d02 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _3eba1502 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _29c89bea = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _200546f4 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2584584f = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _2bd420b1,
    children: [{
      path: "",
      component: _3373d026,
      name: "home"
    }, {
      path: "login",
      component: _3b3e7d02,
      name: "login"
    }, {
      path: "registe",
      component: _3b3e7d02,
      name: "registe"
    }, {
      path: "profile/:username",
      component: _3eba1502,
      name: "profile"
    }, {
      path: "settings",
      component: _29c89bea,
      name: "settings"
    }, {
      path: "editor",
      component: _200546f4,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _2584584f,
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
