// 渲染页面之前经过这个中间渐，在局部组件中注入成员
// 没登录的打不开一些页面
export default function({store, redirect}){
    if(!store.state.user){
        return redirect('/login')
    }
}