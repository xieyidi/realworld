import {request} from '@/plugins/request'

export const getArticles = params => {
    return request({
        method:'GET',
        url:'/api/articles',
        params
    })
}
//获取关注的
export const getFeedArticles = params =>{
    return request({
        method:'GET',
        utl:'/api/articles/feed',
        params
    })
}