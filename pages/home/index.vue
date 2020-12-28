<template>
<div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li v-if="user" class="nav-item">
              <nuxt-link 
              class="nav-link"
              :class="{active:tab==='Your_Feed'}"
              :to="{name:'home', query:{tab:'Your_Feed'}}"
              exact
              >Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link 
              class="nav-link"
              :class="{active:tab==='Global_Feed'}"
              :to="{name:'home', query:{tab:'Global_Feed'}}"
              exact
              >Global Feed</nuxt-link>
            </li>
            <!--<li v-if="tag" class="nav-item">
              <a class="nav-link active" href="">#{{tag}}</a>
            </li>-->
            <nuxt-link
            class="nav-link"
            :class="{active:tab==='tag'}"
            :to="{name:'home', query:{tab:'tag', tag:tag}}"
            exact
            >
            #{{tag}}
            </nuxt-link>
          </ul>
        </div>

        <div class="article-preview"
        v-for="article in articles"
        :key="slug"
        >
          <div class="article-meta">
            <nuxt-link :to="{name:'profile', params:{username:article.author.username}}">
            <img :src="article.author.image" />
            </nuxt-link>
            <div class="info">
              <nuxt-link class="author" :to="{name:'profile', params:{username:article.author.username}}">
              {{article.author.username}}
              </nuxt-link>
              <span class="date">{{article.createdAt|date('MMM DD, YYYY')}}</span>
            </div>
            <button 
            class="btn btn-outline-primary btn-sm pull-xs-right"
            :class="{active:article.favorited}"
            >
              <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link 
          :to="{name:'article', params:{slug:article.slug}}" 
          class="preview-link"
          >
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>

        <div class="article-preview">
          <div class="article-meta">
            <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
            <div class="info">
              <a href="" class="author">Albert Pai</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 32
            </button>
          </div>
          <a href="" class="preview-link">
            <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
          </a>
        </div>
        <nav>
          <ul class="pagination">
            <li 
              class="page-item" 
              v-for="item in totalPage"
              :class="{active:item===page}"
              :key="item"
            >
            <!--<a class="page-link" :href="'/?page='+item">{{item}}</a>
            a标签的作用是刷新页面而重新请求,切换页面的时候tag和page都要传入-->
              <nuxt-link
                class="page-link"
                :to="{name:'home',query:{page:item,tag:$route.query.tag,tab:tab}}"
              >
              {{item}}
              </nuxt-link>
            </li>
          </ul>
        </nav>

      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link
            :to="{name:'home', query:{tag:item, tab:'tag'}}"
            class="tag-pill tag-default" 
            v-for="item in tags" 
            :key="item"
            >{{item}}</nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>
<script>
import { getArticles,getFeedArticles } from '@/api/articles'

import {getTags} from '@/api/tag'
import {mapState} from 'vuex'
export default{
    name:"home",
    watchQuery:['page','tag','tab'], //监听参数page刷新页面
    async asyncData({query, store}){
      const page = Number.parseInt(query.page||1)
      const limit = 2
      const tab = query.tab||'Global_Feed'
      // Your_Feed要求登录状态下，获取关注的列表
      const loadArticles = store.state.user&&tab==='Your_Feed'
      ? getFeedArticles:getArticles
      const [articleRes, tagRes] = await Promise.all([//这两个任务可以并行
        loadArticles({// 跳过前四条数据取5,6数据
            limit,
            offset:(page-1) * limit,
            tag:query.tag
          }),
        getTags()
      ])
      const {articles,articlesCount} = articleRes.data
      const {tags} = tagRe.data
      return {
        articles,
        articlesCount,
        tags,
        limit,
        page,
        tag:query.tag,
        tab:query.tab||'Global_Feed'
      }
    },
    computed:{
      ...mapState(['user']),
      totalPage(){
        return Math.ceil(this.articlesCount/ this.limit)
      }
    }
}
</script>
<style></style>