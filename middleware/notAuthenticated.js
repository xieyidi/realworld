// 如果已经登陆了不能再访问login页面了
//拦截服务端渲染也可以拦截客户端渲染
export default function({store, redirect}){
    if(store.state.user){
        console.log('不能登录注册', store.state)
        return redirect('/')
    }
}