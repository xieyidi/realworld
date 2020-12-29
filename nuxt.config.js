export default {
    server: {
      port: 8000, // default: 3000
      host: '0.0.0.0', // default: localhost,
      timing: false
    },
    router: {
        linkActiveClass:"active",
      extendRoutes(routes, resolve) {
        routes.splice(0) // 删除之前所有的默认路由
        routes.push(...[{
          path: '/',
          component: resolve(__dirname, 'pages/layout'),
          children:[
              {
                  path:"",
                  name:"home",
                  component:resolve(__dirname,'pages/home')
              },
              {
                  path:"login",
                  name:"login",
                  component:resolve(__dirname, 'pages/login')
              },
              {
                path:"registe",
                name:"registe",
                component:resolve(__dirname, 'pages/login')
              },
              {
                path:"profile/:username",
                name:"profile",
                component:resolve(__dirname, 'pages/profile')
              },
              {
                path:"settings",
                name:"settings",
                component:resolve(__dirname, 'pages/settings')
              },
              {
                path:"editor",
                name:"editor",
                component:resolve(__dirname, 'pages/editor')
              },
              {
                path:"article/:slug",
                name:"article",
                component:resolve(__dirname, 'pages/article')
              },
          ]
        }])
      }
    },
    plugins:['~/plugins/request.js','~/plugins/dayjs.js']
  }