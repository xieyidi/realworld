import {request} from '@/plugins/request'
// home根据tag标签删选文章内容

export const getTags = () =>{
    return request({
        method:'GET',
        url:'/api/tags'
    })
}