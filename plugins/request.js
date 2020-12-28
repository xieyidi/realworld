import axios from 'axios'
export const request = axios.create({
    baseURL:"http://conduit.productionready.io"
})
//插件导出函数必须作为默认成员
export default ({store})=>{
    request.interceptors.request.use(function(config){
        //请求地址 参数方法 都在config
        const {user} = store.state
        if(user && user.token){
            config.headers.Authorization=`Token ${user.token}`
        }
        
        //这里实际上应该import store，但是容器在这里是获取不到的
        // 所以需要nuxt的插件拿到store或者是上下文,插件导出一个函数，在里面获取想要的
        return config;
    },function(error){
        return Promise.reject(error)
    })
}