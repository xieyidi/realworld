(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{186:function(t,e,r){var n=r(6),c=r(27),o=r(11),l=r(187),v="["+l+"]",f=RegExp("^"+v+v+"*"),m=RegExp(v+v+"*$"),_=function(t,e,r){var c={},v=o((function(){return!!l[t]()||"​"!="​"[t]()})),f=c[t]=v?e(h):l[t];r&&(c[r]=f),n(n.P+n.F*v,"String",c)},h=_.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=_},187:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},188:function(t,e,r){"use strict";var n=r(4),c=r(21),o=r(26),l=r(124),v=r(61),f=r(11),m=r(50).f,_=r(62).f,h=r(10).f,d=r(186).trim,C=n.Number,y=C,O=C.prototype,N="Number"==o(r(78)(O)),w="trim"in String.prototype,k=function(t){var e=v(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=w?e.trim():d(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(N?f((function(){O.valueOf.call(r)})):"Number"!=o(r))?l(new y(k(e)),r,C):k(e)};for(var x,I=r(7)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)c(y,x=I[E])&&!c(C,x)&&h(C,x,_(y,x));C.prototype=O,O.constructor=C,r(13)(n,"Number",C)}},189:function(t,e,r){var n=r(6),c=r(190);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},190:function(t,e,r){var n=r(4).parseInt,c=r(186).trim,o=r(187),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},192:function(t,e,r){"use strict";r.r(e);r(60),r(24),r(49);var n=r(34),c=(r(25),r(12),r(37),r(9)),o=(r(188),r(189),r(36),r(3)),l=r(63),v=function(t){return Object(l.b)({method:"GET",url:"/api/articles",params:t})},f=function(t){return Object(l.b)({method:"GET",utl:"/api/articles/feed",params:t})},m=r(46);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"home",watchQuery:["page","tag","tab"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,m,_,h,d,C,y,O,N,w,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=Number.parseInt(r.page||1),m=2,_=r.tab||"Global_Feed",h=n.state.user&&"Your_Feed"===_?f:v,e.next=7,Promise.all([h({limit:m,offset:(o-1)*m,tag:r.tag}),Object(l.b)({method:"GET",url:"/api/tags"})]);case 7:return d=e.sent,C=Object(c.a)(d,2),y=C[0],C[1],O=y.data,N=O.articles,w=O.articlesCount,k=tagRe.data.tags,e.abrupt("return",{articles:N,articlesCount:w,tags:k,limit:m,page:o,tag:r.tag,tab:r.tab||"Global_Feed"});case 14:case"end":return e.stop()}}),e)})))()},computed:h(h({},Object(m.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}})},C=r(23),component=Object(C.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"Your_Feed"===t.tab},attrs:{to:{name:"home",query:{tab:"Your_Feed"}},exact:""}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"Global_Feed"===t.tab},attrs:{to:{name:"home",query:{tab:"Global_Feed"}},exact:""}},[t._v("Global Feed")])],1),t._v(" "),r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{to:{name:"home",query:{tab:"tag",tag:t.tag}},exact:""}},[t._v("\r\n            #"+t._s(t.tag)+"\r\n            ")])],1)]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:t.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\r\n              "+t._s(article.author.username)+"\r\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\r\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),t._m(1),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v("\r\n              "+t._s(e)+"\r\n              ")])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tag"}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:"profile.html"}},[r("img",{attrs:{src:"http://i.imgur.com/N4VcUeJ.jpg"}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v("Albert Pai")]),t._v(" "),r("span",{staticClass:"date"},[t._v("January 20th")])]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right"},[r("i",{staticClass:"ion-heart"}),t._v(" 32\r\n            ")])]),t._v(" "),r("a",{staticClass:"preview-link",attrs:{href:""}},[r("h1",[t._v("The song you won't ever stop singing. No matter how hard you try.")]),t._v(" "),r("p",[t._v("This is the description for the post.")]),t._v(" "),r("span",[t._v("Read more...")])])])}],!1,null,null,null);e.default=component.exports}}]);