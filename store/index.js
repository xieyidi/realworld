const cookieparser = process.server?require('cookieparser'):undefined
// 为了防止数据冲突需要把state定义成一个函数 动态的返回数据对象
//记录当前登录的用户的基本信息
export const state = () =>{
    return {
        user: null
    }
}
export const mutations = {
    setUser(state, data){
        state.user = data
    }
}
export const actions={
    //(4)添加登录状态到容器中
    // nuxtServerInit是特殊的action服务端渲染期间自动调用，用于初始化容器数据
    //传递数据给客户端使用
    //req是服务端请求对象
    nuxtServerInit({ commit }, { req }){
        let user=null
        // 请求头中携带的cookie
        if(req.headers.cookie){
            const parsed = cookieparser.parse(req.headers.cookie)
            try{
                user = JSON.parse(parsed.user)
            } catch(err){
                console.log('store/index.js')
            }
        }
        commit('setUser',user)
    }
}