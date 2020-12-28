exports.ids = [5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=713615fe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"auth-page"}},[_vm._ssrNode("<div class=\"container page\" data-v-713615fe>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-713615fe>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-713615fe>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-713615fe>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? "Login" : "Register"))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-713615fe>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/registe"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-713615fe>"+(_vm._ssrList((_vm.err),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-713615fe>"+_vm._ssrEscape(_vm._s(field)+_vm._s(message))+"</li>")})))}))+"</ul> <form data-v-713615fe>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-713615fe><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.name)))+" class=\"form-control form-control-lg\" data-v-713615fe></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-713615fe><input type=\"text\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-comtrol-lg\" data-v-713615fe></fieldset> <fieldset class=\"form-group\" data-v-713615fe><input type=\"password\" placeholder=\"Password\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-713615fe></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-713615fe>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? "login" : "registe"))+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=713615fe&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/users.js

const login = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};
const register = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // (2)只在客户端加载js-cookie

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'login',
  computed: {
    isLogin() {
      return this.$route.name === "login";
    }

  },

  data() {
    return {
      "user": {},
      err: {}
    };
  },

  methods: {
    async onsubmit() {
      try {
        console.log('000', this.user);
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        });
        console.log('000', this.user, data); //（1）下面只是内存的数据，页面刷新就没了，需要持久化
        // 不能仅仅本地存储 服务端拿不到

        this.$store.commit('setUser', data.user); //(3)持久化,在应用程序-Cookie中可以找到不会消失的user数据
        //需要初始化容器中的数据store

        Cookie.set('user', data.user);
        this.$route.push('/');
      } catch (err) {
        console.log('请求失败');
        this.err = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "713615fe",
  "6de054c7"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map