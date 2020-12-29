<template>
    <div id="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">{{isLogin ? "Login" : "Register"}}</h1>
                    <p class="text-xs-center">
                    <nuxt-link v-if="isLogin" to="/registe">Need an account?</nuxt-link>
                    <nuxt-link v-else to="/login">Have an account?</nuxt-link>
                    </p>

                    <ul class="error-messages">
                        <template v-for="(messages,field) in err">
                        <li v-for="(message, index) in messages" :key="message">{{field}}{{message}}</li>
                        </template>
                        
                    </ul>

                    <form @submit.prevent="onsubmit">
                    <fieldset v-if="!isLogin" class="form-group">
                    <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name" required>
                    </fieldset>
                    <fieldset class="form-group">
                    <input class="form-control form-comtrol-lg" v-model="user.email" type="text" placeholder="Email" required>
                    </fieldset>
                    <fieldset class="form-group">
                    <input class="form-control form-control-lg" v-model="user.password" type="password" placeholder="Password" required>
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right">{{isLogin ? "login" : "registe"}}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { login, register } from '@/api/users'
// (2)只在客户端加载js-cookie
const Cookie = process.client?require('js-cookie'):undefined
export default{
    name:'login',
    computed:{
        isLogin(){
            return this.$route.name === "login"
        }
    },
    data(){
        return {
            "user":{},
            err:{}
        }
    },
    methods:{
        async onsubmit(){
            try{
                console.log('000',this.user)
                const { data } = this.isLogin ? await login({
                    user:this.user
                }) : await register({
                    user:this.user
                })
                console.log('000',this.user,data)
                //（1）下面只是内存的数据，页面刷新就没了，需要持久化
                // 不能仅仅本地存储 服务端拿不到
                this.$store.commit('setUser',data.user)
                //(3)持久化,在应用程序-Cookie中可以找到不会消失的user数据
                //需要初始化容器中的数据store
                Cookie.set('user',data.user)
                this.$route.push('/')
            } catch(err){
                console.log('请求失败')
                this.err = err.response.data.errors
            }
        }
    }
}
</script>
<style scoped>
</style>